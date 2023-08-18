import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Projects.module.css";

const Projects = () => {

  return (
    <>
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/moon.png" />
      </Head>
      <Header></Header>
      <section id="mainBody">
        <div className="parallaxContainer">
          <div className="relative flex flex-wrap justify-center px-50 items-center flex-col top-maxx">
            <div
              className="flex h-96 m-10 shadow-xl main rounded-xl overflow-hidden"
              id={styles.vwWidth}
            >
              <div className="w-96 p-10 box-border flex flex-col justify-center">
                <span className="text-3xl font-bold">DOORS</span>
                <p>Translated "DOORS" Into Serbian, Bosnian, and Croatian.</p>
                <Link
                  href="https://www.roblox.com/games/6516141723/DOORS"
                  className="mainBG underline-no px-3 py-3 mt-16 border-1 rounded-xl border-transparent flex align-center items-left transition-color transition-border duration-500 hover:border-white hover:bg-gray-900"
                >
                  View Project
                </Link>
              </div>
              <div
                className="w-96 flex items-center justify-center overflow-hidden"
                style={{
                  width: "70%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/Doors.png"
                  alt="Project 1"
                  objectFit="cover"
                  width={400}
                  height={200}
                  quality={100}
                  className="w-full h-full object-cover transition-transform duration-200"
                />
              </div>
            </div>
            <div
              className="flex h-96 m-10 shadow-xl main rounded-xl overflow-hidden"
              id={styles.vwWidth}
            >
              <div className="w-96 p-10 box-border flex flex-col justify-center">
                <span className="text-3xl font-bold">AquaTrack</span>
                <p>Website that tracks your water intake</p>
                <Link
                  href="https://nightmae.github.io/AquaTrack/"
                  className="mainBG underline-no px-3 py-3 mt-16 border-1 rounded-xl border-transparent flex align-center items-left transition-color transition-border duration-500 hover:border-white hover:bg-gray-900"
                >
                  View Project
                </Link>
              </div>
              <div
                className="w-96 flex items-center justify-center overflow-hidden"
                style={{
                  width: "70%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/AquaTrack.png"
                  alt="Project 2"
                  objectFit="cover"
                  width={400}
                  height={200}
                  quality={100}
                  className="w-full h-full object-cover transition-transform duration-200"
                />
              </div>
            </div>
            <div
              className="flex h-96 m-10 shadow-xl main rounded-xl overflow-hidden"
              id={styles.vwWidth}
            >
              <div className="w-96 p-10 box-border flex flex-col justify-center">
                <span className="text-3xl font-bold">???</span>
                <p>
                  Redesigning most of my things in Next.js with my new tech
                  stack, aswell as making a few new apps, with some practical
                  use.
                </p>
                  <Link
                    href="/projects"
                    className="mainBG underline-no px-3 py-3 mt-16 border-1 rounded-xl border-transparent flex align-center items-left transition-color transition-border duration-500 hover:border-white hover:bg-red-900 hover:shakeAnimation"
                  >
                    View Project
                  </Link>
              </div>
              <div
                className="w-96 flex items-center justify-center overflow-hidden"
                style={{
                  width: "70%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/Question.svg"
                  alt="Project Q"
                  objectFit="cover"
                  width={400}
                  height={200}
                  quality={100}
                  className="w-full h-full object-cover transition-transform duration-200"
                />
              </div>
            </div>
            <div
              className="flex m-10 shadow-xl main rounded-xl overflow-hidden"
              id={styles.vwWidth}
            >
              <div className="w-96 p-10 box-border flex flex-col justify-center">
                <span className="text-3xl font-bold">AnimLib.css</span>
                <p>CSS Animations Library</p>
                <Link
                  href="https://nightmae.github.io/AquaTrack"
                  className="mainBG underline-no px-3 py-3 mt-16 border-1 rounded-xl border-transparent flex align-center items-left transition-color transition-border duration-500 hover:border-white hover:bg-gray-900"
                >
                  View Project
                </Link>
              </div>
              <div
                className="w-96 flex items-center justify-center overflow-hidden"
                style={{
                  width: "70%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/AnimLib.png"
                  alt="Project 3"
                  objectFit="cover"
                  width={400}
                  height={200}
                  quality={100}
                  className="w-full h-full object-cover transition-transform duration-200"
                />
              </div>
            </div>
            <div
              className="flex h-96 m-10 shadow-xl main rounded-xl overflow-hidden"
              id={styles.vwWidth}
            >
              <div className="w-96 p-10 box-border flex flex-col justify-center">
                <span className="text-3xl font-bold">ITS</span>
                <p>
                  Currently working for The "International Translation Services"
                  group
                </p>
                <Link
                  href="https://discord.gg/translate"
                  className="mainBG underline-no px-3 py-3 mt-16 border-1 rounded-xl border-transparent flex align-center items-left transition-color transition-border duration-500 hover:border-white hover:bg-gray-900"
                >
                  View Group
                </Link>
              </div>
              <div
                className="w-96 flex items-center justify-center overflow-hidden"
                style={{
                  width: "70%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/ITS.png"
                  alt="Project 4"
                  objectFit="cover"
                  width={400}
                  height={200}
                  quality={100}
                  className="w-full h-full object-cover transition-transform duration-200"
                />
              </div>
            </div>
            <div
              className="flex h-96 m-10 shadow-xl main rounded-xl overflow-hidden"
              id={styles.vwWidth}
            >
              <div className="w-96 p-10 box-border flex flex-col justify-center">
                <span className="text-3xl font-bold">This Portfolio</span>
                <p>Yeah you're reading this [Now in Next.js!]</p>
                <Link
                  href="https://www.roblox.com/games/6516141723/DOORS"
                  className="mainBG underline-no px-3 py-3 mt-16 border-1 rounded-xl border-transparent flex align-center items-left transition-color transition-border duration-500 hover:border-white hover:bg-gray-900"
                >
                  View Project
                </Link>
              </div>
              <div
                className="w-96 flex items-center justify-center overflow-hidden"
                style={{
                  width: "70%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/Portfolio.png"
                  alt="Project 5"
                  objectFit="cover"
                  width={400}
                  height={200}
                  quality={100}
                  className="w-full h-full object-cover transition-transform duration-200"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
