import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from 'next/image'
import Head from "next/head";
import Header from "@/components/Header";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 6000);
  }, []);

  return (
    <>
      {" "}
      <Head>
        <title>404...?</title>
        <link rel="icon" href="/moon.png" />
      </Head>
      <Header></Header>
      <main className="grid min-h-full place-items-center px-6 py-24">
        <div className="text-center">
          <p className="text-base text-white">404</p>
          <h1 className="mt-4 text-3xl tracking-tight text-white sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-white">
            This page does not exist.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md main px-3.5 py-2.5 text-sm text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
      <div className="mainBG w-96 h-24 fixed right-4 rounded-xl ring-4 ring-gray-500" id="achievement">
        <Image src="/bucket.webp" height={60} width={60} className="absolute m-4"></Image>
        <h2 className="text-purple-500 text-2xl p-1 m-1 relative left-24 top-2">Challenge Complete!</h2>
        <p className="text-xl p-1 -mt-4 m-1 relative left-24 top-2">How Did We Get Here?</p>
      </div>
    </>
  );
};

export default NotFound;
