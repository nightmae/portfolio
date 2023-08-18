import Image from "next/image";
import { useState } from "react";
import Modal from '../components/Modal';
import Header from "@/components/Header";
import Alert from "@/components/Alert"
import "tailwindcss/tailwind.css";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [alertOpen, setAlertOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  const checkMobileDevice = () => {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/moon.png" />
      </Head>
      <Header />
      
      <Alert isOpen={alertOpen} onClose={handleCloseAlert} />

      <div
        className={`text-center relative mainBG py-24 px-16 rounded-xl shadow-md shadow-inner-2xl shadow-white ring-2 ring-white ${
          alertOpen ? "top-24" : "top-12" /* Adjust top value based on the alert state */
        }`}
        id={styles.wDd}
      >
        <section className="relative z-10">
          <div id="particles-js"></div>
          <div id="canvas"></div>
          <div className="absolute top-0 left-4" id={styles.moon}>
            <Image
              src="/moon.png"
              id={styles.mond}
              alt="Moon"
              width={20}
              height={20}
            />
          </div>
          <h1
            className="typewriter font-light text-6xl shadow-2xl"
            id={styles.name}
          >
            Hi, I'm{" "}
            <Link href="https://github.com/nightmae" className="lineL">
              Admir.
            </Link>
          </h1>
          <p id={styles.tagline} className="reveal-text text-2xl ">
            Front-End Developer, <br /> Musician, Translator, Mathematician,
            Physicist.
          </p>
        </section>
      </div>

      <div
        className={`p-8 rounded-lg shadow-2xl mt-8 relative ${
          alertOpen ? "top-12" : "top-2" /* Adjust top value based on the alert state */
        }`}
      >
        <div className="text-center">
          <div className="border-t-2 border-gray-300 mx-auto w-8"></div>
        </div>
        <div className="flex justify-center items-center mt-6 space-x-4">
          {/* TypeScript & JavaScript */}
          <div className="flex flex-row mainBG rounded-xl divide-x divide-black">
            <div className="w-20 h-20 mainBG rounded-l-xl flex items-center justify-center hover:bg-blue-900 cursor-pointer transition-colors duration-300">
              <img src="/skills/ts.png" alt="TypeScript" className="w-9 h-9" />
            </div>
            <div className="w-20 h-20 mainBG flex rounded-r-xl items-center justify-center divide-x divide-white hover:bg-yellow-400 cursor-pointer transition-colors duration-300">
              <img src="/skills/js.png" alt="JavaScript" className="w-10 h-9" />
            </div>
          </div>

          {/* Next.js & React.js */}
          <div className="flex flex-row mainBG rounded-xl divide-x divide-black">
            <div className="w-20 h-20 mainBG rounded-l-xl flex items-center justify-center hover:bg-gray-500 cursor-pointer transition-colors duration-300">
              <img src="/skills/nextjs.png" alt="Next.js" className="w-9 h-9" />
            </div>
            <div className="w-20 h-20 mainBG flex rounded-r-xl items-center justify-center divide-x divide-white hover:bg-blue-700 cursor-pointer transition-colors duration-300">
              <img src="/skills/reac.png" alt="React.js" className="w-10 h-9" />
            </div>
          </div>

          {/* Prisma & MongoDB */}
          <div className="flex flex-row mainBG rounded-xl divide-x divide-black">
            <div className="w-20 h-20 mainBG rounded-l-xl flex items-center justify-center hover:bg-blue-500 cursor-pointer transition-colors duration-300">
              <img src="/skills/prisma.png" alt="Prisma" className="w-9 h-9" />
            </div>
            <div className="w-20 h-20 mainBG flex rounded-r-xl items-center justify-center divide-x divide-white hover:bg-green-500 cursor-pointer transition-colors duration-300">
              <img src="/skills/mongo.png" alt="MongoDB" className="w-10 h-9" />
            </div>
          </div>

          {/* Tailwind CSS & CSS */}
          <div className="flex flex-row mainBG rounded-xl divide-x divide-black">
            <div className="w-20 h-20 mainBG rounded-l-xl flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors duration-300">
              <img
                src="/skills/tail wind.png"
                alt="Tailwind CSS"
                className="w-12 h-9"
              />
            </div>
            <div className="w-20 h-20 mainBG rounded-r-xl flex items-center justify-center divide-x divide-white hover:bg-blue-700 cursor-pointer transition-colors duration-300">
              <img src="/skills/css.png" alt="CSS" className="w-9 h-9" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
