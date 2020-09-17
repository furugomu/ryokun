import React from "react";

type Props = { text: string };

export default class TweetButton extends React.Component<Props> {
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
