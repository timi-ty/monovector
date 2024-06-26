"use client";

import ChatArea from "./_components/ChatArea";
import RenderArea from "./_components/RenderArea";
import useSvgPrompt, { SvgResult } from "./_hooks/useSvgPrompt";
import styles from "./page.module.css";

export default function Home() {
  function handleSvgResult(svgResult: SvgResult) {
    //handle the result here
  }
  const submitPrompt = useSvgPrompt(handleSvgResult);
  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <ChatArea submitPrompt={submitPrompt} />
      </div>
      <div className={styles.right}>
        <RenderArea />
      </div>
    </main>
  );
}
