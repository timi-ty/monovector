import { backendUrl, fetchConfig } from "../_utils/client.config";
import { sprintErrorMessage } from "../_utils/utils";

//Attach an SvgResult handler and use the returned function to submit prompts at any time, whose result will trigger the attached SvgResult handler.
export default function usePrompt(
  onResult: (svgResult: PromptResult) => void,
  onMessage: (message: string) => void
) {
  function submitPrompt(prompt: string) {
    resultFromPrompt(prompt, onResult);
  }
  function getMessage() {
    requestMessage(onMessage);
  }
  return { submitPrompt, getMessage };
}

async function resultFromPrompt(
  prompt: string,
  onResult: (result: PromptResult) => void
) {
  const url = `${backendUrl}/prompt`;
  try {
    const response = await fetch(
      url,
      fetchConfig({
        method: "POST",
        body: prompt,
        contentType: "multipart/form-data",
      })
    );
    const promptResult: PromptResult = await response.json();
    onResult(promptResult);
  } catch (error: any) {
    console.error(error);
    onResult({
      result: "",
      error: `Prompt error: ${sprintErrorMessage(error)}`,
    });
  }
}

async function requestMessage(onResult: (result: string) => void) {
  const url = `${backendUrl}/message`;

  try {
    const response = await fetch(
      url,
      fetchConfig({
        method: "GET",
      })
    );
    const messageResult = await response.text();
    onResult(messageResult);
  } catch (error: any) {
    console.error(error);
    onResult(`Message error: ${sprintErrorMessage(error)}`);
  }
}

export interface PromptResult {
  result: string;
  error: string;
}
