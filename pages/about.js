import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const About = () => {
  const [quote, setQuote] = useState(null);
  const url = "https://api.quotable.io/random";

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const fetchRandomQuote = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setQuote(data);
  };

  return (
    <>
      <Head>
        <title>About Me</title>
        <link rel="icon" href="/moon.png" />
      </Head>
      <Header></Header>
      <section
        className="text-left relative mainBG py-16 px-12 rounded-2xl shadow-2xl border-2 border-white top-0"
        id={styles.wAlll}
      >
        <div>
          <span className="uppercase font-bold text-3xl">About Me</span>
          <p className="mt-2">
            Hello, I'm a dedicated Serbo-Croatian translator hailing from the
            heart of Bosnia. My professional life revolves around bridging
            communication gaps, but in my personal life, I bridge cultural gaps
            through my passion for music. I find joy in playing Turbo-folk music
            on my synthesizer, with songs by Šaban Šaulić being among my
            favorites. Academically, I am currently engrossed in the intricacies
            of Calculus 3 and the fascinating world of Quantum Field Theory. The
            complex equations and concepts only fuel my curiosity and
            determination to learn. My future plans include diving into the
            profound depths of Number Theory and exploring more advanced realms
            of Physics, if one can imagine anything beyond Quantum Field Theory.
            With each note I play and equation I solve, I strive to understand
            and appreciate the world in its complexity and its simplicity.
          </p>
        </div>
      </section>
      <div className="mainBG p-4 rounded-xl flex justify-center items-center relative top-12 border-2 border-white" id={styles.wAllll}>
      {quote && quote.content && <p>{quote.content}</p>}
      </div>
    </>
  );
};

export default About;
