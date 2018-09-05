import React from "react";

export default class Copy extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  copy() {
    const selection = window.getSelection();
    selection.removeAllRanges();
    const r = document.createRange();
    r.selectNode(this.ref.current);
    selection.addRange(r);
    document.execCommand("copy");
  }

  render() {
    const {text} = this.props;
    return <>
      <span ref={this.ref}>{text}</span>
      <button type="button" onClick={this.copy.bind(this)}>コピー</button>
    </>;
  }
}
// Copy.propTypes = {text:PropTypes.string}
