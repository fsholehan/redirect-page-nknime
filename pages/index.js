import Head from "next/head";
import RedirectPage from "../components/RedirectPage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Redirecting to nknime.com...</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RedirectPage />
    </div>
  );
}
