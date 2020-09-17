import React, { FC, useMemo, useState } from "react";
import { FieldProps, Form, Text as InformedText, useFormState } from "informed";
import Copy from "./Copy";
import TweetButton from "./TweetButton";
import Share from "./Share";

type Props = {};

type Values = {
  food: string;
  place: string;
  shop: string;
  name: string;
  adjective: string;
};
const initialValues = {
  food: "水",
  place: "我が家",
  shop: "洗面所",
  name: "水道水",
  adjective: "無味無臭",
};

const Ryokun: FC<Props> = () => {
  return (
    <>
      <Description />
      <Form<Values> initialValues={initialValues}>
        <Fields />
        <FormContent />
      </Form>
    </>
  );
};
export default Ryokun;

const Description = () => (
  <p>
    <a href="https://twitter.com/uryo1112">りょうくんグルメ</a>
    文法に沿ったツイートを生成します。
  </p>
);

const Fields: FC = () => (
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
);

const Text: FC<FieldProps<Values, {}>> = (props) => (
  <InformedText style={{ fontSize: "16px" }} {...props} />
);

const FormContent: FC = () => {
  const formState = useFormState<Values>();
  const { food, place, shop, name, adjective } = formState.values;
  const text = useMemo(
    () =>
      `
  まじでこの世の全ての${food}好きに教えてあげたいんだが${place}の${shop}には全ての人間を虜にする禁断の${name}がある。
  これが${adjective}で超絶美味いからぜひ全国の${food}好き、${food}を愛する者たち、${food}を憎む者たち、全ての${food}関係者に伝われ
  `.replace(/^\s+/gm, ""),
    [food, place, shop, name, adjective]
  );
  return (
    <>
      <p>
        <Copy text={text} />
      </p>
      <p>
        <Share text={text} />
      </p>
      <p>
        <a href="https://github.com/furugomu/ryokun">GitHub</a>
      </p>
    </>
  );
};
