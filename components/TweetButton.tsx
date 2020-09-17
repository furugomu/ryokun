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
class TweetButtonx extends React.Component<Props> {
  ref: React.RefObject<HTMLSpanElement>;
  widget?: HTMLElement;
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidUpdate() {
    this.update();
  }

  update() {
    twttr.widgets
      .createShareButton(location.href, this.ref.current, {
        text: this.props.text,
      })
      .then((widget: any) => {
        if (this.widget) this.widget.remove();
        this.widget = widget;
      });
  }

  render() {
    const { text } = this.props;
    return <span ref={this.ref} />;
  }
}
