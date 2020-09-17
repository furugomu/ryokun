import React, { FC, useCallback, useEffect, useRef } from "react";

type Props = { text: string };

const TweetButton: FC<Props> = ({ text }) => {
  const ref = useRef<HTMLSpanElement>();
  const widget = useRef<HTMLElement>();
  const update = useCallback(() => {
    twttr.widgets
      .createShareButton(location.href, ref.current, {
        text,
      })
      .then((newWidget: any) => {
        if (widget.current) widget.current.remove();
        widget.current = newWidget;
      });
  }, [text]);
  useEffect(() => {
    update();
  }, [update]);

  return <span ref={ref} />;
};
export default TweetButton;
