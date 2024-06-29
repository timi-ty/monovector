"use client";

import { useState } from "react";
import ChatArea from "./_components/ChatArea";
import RenderArea from "./_components/RenderArea";
import usePrompt, { PromptResult } from "./_hooks/usePrompt";
import styles from "./page.module.css";

export default function Home() {
  const [result, setResult] = useState<string>("");
  function handleResult(promptResult: PromptResult) {
    //handle result here
  }
  function handleMessage(message: string) {
    setResult(message);
  }
  const { submitPrompt, getMessage } = usePrompt(handleResult, handleMessage);
  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <ChatArea submitPrompt={submitPrompt} requestMessage={getMessage} />
      </div>
      <div className={styles.right}>
        <RenderArea result={result} />
      </div>
    </main>
  );
}
