import React, { FC, useRef } from "react";

type Props = { text: string };

const Copy: FC<Props> = ({ text }) => {
  const ref = useRef<HTMLSpanElement>();
  return (
    <>
      <span ref={ref}>{text}</span>
      <button type="button" onClick={() => copyElementContent(ref.current)}>
        コピー
      </button>
    </>
  );
};
export default Copy;

const copyElementContent = (element?: HTMLElement) => {
  if (!element) return;

  const selection = window.getSelection();
  selection.removeAllRanges();
  const r = document.createRange();
  r.selectNode(element);
  selection.addRange(r);
  document.execCommand("copy");
};
