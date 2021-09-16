import "../styles/index.css";
import Navbar from "../components/Navbar";
import Head from "next/head";
export default function MyApp({ Component, pageProps }) {
  return (
    <div className="">
      <Head>
        <meta name="title" content="Kp Adeyinka" />
        <meta
          name="description"
          content="Kp Adeyinka is a backend and frontend programmer who specializes in react, JavaScript, TypeScript and more!"
        />
        <link rel="icon" href="https://i.imgur.com/Xc8sGz7.png" />
        <meta
          name="keywords"
          content="programmer, blog, tutorials, YouTube, GitHub"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Kp Adeyinka" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
