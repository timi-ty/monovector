"use client";

import { MouseEvent, useState } from "react";
import styles from "./ChatArea.module.css";

export default function ChatArea({
  submitPrompt,
}: Readonly<{ submitPrompt: (prompt: string) => void }>) {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");
  function handleSubmit(ev: MouseEvent) {
    ev.preventDefault();
    setMessages((m) => [...m, inputMessage]);
    submitPrompt(inputMessage);
    setInputMessage("");
  }

  return (
    <div className={styles.main}>
      <div className={styles.trail}>
        {messages.map((message) => (
          <div>{message}</div>
        ))}
      </div>
      <form className={styles.form}>
        <textarea
          className={styles.input}
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Send
        </button>
      </form>
    </div>
  );
}
