import React, { FC, useCallback } from "react";
import TweetButton from "./TweetButton";

type Props = { text: string };
const Share: FC<Props> = ({ text }) => {
  const share = useCallback(async () => {
    try {
      await navigator.share({ url: location.href, text });
    } catch (e) {
      // キャンセルでもここに来るのでうるさくしない
      console.log("share error:", e);
    }
  }, [text]);

  if (typeof navigator !== "undefined" && navigator.share) {
    return <button onClick={() => share()}>シェア</button>;
  } else {
    return <TweetButton text={text} />;
  }
};
export default Share;
