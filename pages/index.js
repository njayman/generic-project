import Head from "next/head";
import HeadComponent from "../components/Layout/HeadComponent";

export default function Home() {
  return (
    <div>
      <HeadComponent title="Home" description="Home page" />
    </div>
  );
}
