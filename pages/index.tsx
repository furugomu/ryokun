import Head from "next/head";
import Ryokun from "../components/Ryokun";

const Page = () => (
  <>
    <Head>
      <title>りょうくんグルメ</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <script
        async={true}
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      />
    </Head>
    <Ryokun />
  </>
);

export default Page;
