import { backendUrl, fetchConfig } from "../_utils/client.config";
import { sprintErrorMessage } from "../_utils/utils";

//Attach an SvgResult handler and use the returned function to submit prompts at any time, whose result will trigger the attached SvgResult handler.
export default function useSvgPrompt(
  onSvgResult: (svgResult: SvgResult) => void
): (prompt: string) => void {
  function submitPrompt(prompt: string) {
    svgFromPrompt(prompt, onSvgResult);
  }
  return submitPrompt;
}

async function svgFromPrompt(
  prompt: string,
  onResult: (result: SvgResult) => void
) {
  const url = `${backendUrl}/svg-prompt`;

  const formData = new FormData();
  formData.append("prompt", prompt);

  try {
    const response = await fetch(
      url,
      fetchConfig({ method: "POST", body: formData })
    );
    const svgResult: SvgResult = await response.json();
    onResult(svgResult);
  } catch (error: any) {
    console.error(error);
    onResult({
      svg: "",
      error: `SVG prompt error: ${sprintErrorMessage(error)}`,
    });
  }
}

export interface SvgResult {
  svg: string;
  error: string;
}
