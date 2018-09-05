import React from "react";

export default class TweetButton extends React.Component {
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
        text: this.props.text
      })
      .then(widget => {
        if (this.widget) this.widget.remove();
        this.widget = widget;
      });
  }

  render() {
    const { text } = this.props;
    return <span ref={this.ref} />;
  }
}
