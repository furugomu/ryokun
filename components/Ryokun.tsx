import React from "react";
import { Form, Text as InformedText } from "informed";
import Copy from "./Copy";
import TweetButton from "./TweetButton";

type Props = {};

type State = {
  food: string;
  place: string;
  shop: string;
  name: string;
  adjective: string;
};

export default class Ryokun extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      food: "水",
      place: "我が家",
      shop: "洗面所",
      name: "水道水",
      adjective: "無味無臭",
    };
  }

  handleChange(formState) {
    this.setState(formState.values);
  }

  text() {
    const { food, place, shop, name, adjective } = this.state;
    return `
    まじでこの世の全ての${food}好きに教えてあげたいんだが${place}の${shop}には全ての人間を虜にする禁断の${name}がある。
    これが${adjective}で超絶美味いからぜひ全国の${food}好き、${food}を愛する者たち、${food}を憎む者たち、全ての${food}関係者に伝われ
    `.replace(/^\s+/gm, "");
  }

  render() {
    const text = this.text();
    return (
      <>
        <Description />
        <MyForm values={this.state} onChange={this.handleChange.bind(this)} />
        <p>
          <Copy text={text} />
        </p>
        <p>
          <TweetButton text={text} />
        </p>
        <p>
          <a href="https://github.com/furugomu/ryokun">GitHub</a>
        </p>
      </>
    );
  }
}

const Description = () => (
  <p>
    <a href="https://twitter.com/uryo1112">りょうくんグルメ</a>
    文法に沿ったツイートを生成します。
  </p>
);

const MyForm = ({ values, onChange }) => (
  <Form initialValues={values} onChange={onChange}>
    <dl>
      <dt>誰に教えてあげたい？</dt>
      <dd>
        この世の全ての
        <Text field="food" />
        好き
      </dd>
      <dt>店はどこにある？</dt>
      <dd>
        <Text field="place" />
      </dd>
      <dt>店の名前は？</dt>
      <dd>
        <Text field="shop" />
      </dd>
      <dt>どんな料理？</dt>
      <dd>
        全ての人間を虜にする禁断の
        <Text field="name" />
      </dd>
      <dt>どんな？</dt>
      <dd>
        <Text field="adjective" />
        で超絶美味い
      </dd>
    </dl>
  </Form>
);

const Text = (props) => (
  <InformedText style={{ fontSize: "16px" }} {...props} />
);
