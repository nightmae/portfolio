import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Head from "next/head";
import styles from '../styles/Animation.module.css'

const WorkExperience = () => {
  return (
    <>
      <Head>
        <title>Work Experience</title>
        <link rel="icon" href="/moon.png" />
      </Head>
      <Header></Header>
      <section className="relative rounded-2xl top-6 shadow-xl">
        <span className="relative -top-1 opacity-60">Translation Work</span>
        <div className="flex flex-row mainBG p-2 rounded-xl" id={styles.enterAnim}>
          <div className="main m-2 p-2 rounded-xl shadow-md w-96 text-center">
            <Image
              src="/Doors.png"
              alt="Game 1"
              className="rounded-xl h-48"
              width={400}
              height={150}
              quality={100}
              style={{
                borderRadius: "1em",
              }}
            />
            <h2 className="mt-2">DOORS</h2>
            <span className="opacity-60">LSPLASH</span>
            <p>Translated "DOORS"</p>
            <Link href="https://www.roblox.com/games/6516141723/DOORS">
              <button className="text-white headerIcon border-2 border-black px-1 py-2 mt-2 transition-all ease-in-out duration-400 text-center rounded-xl w-48 ">View More</button>
            </Link>
          </div>

          <div className="main m-2 p-2 rounded-xl shadow-md w-96 text-center">
            <Image
              src="/HH.png"
              alt="Game 2"
              className="rounded-xl h-48"
              width={400}
              height={150}
              quality={100}
              style={{
                borderRadius: "1em",
              }}
            />
            <h2 className="mt-2">Horrific Housing</h2>
            <span className="opacity-60">CookieScript</span>
            <p>Translated "Horrific Housing"</p>
            <Link href="https://www.roblox.com/games/263761432/Horrific-Housing">
              <button className="text-white headerIcon border-2 border-black px-1 py-2 mt-2 transition-all ease-in-out duration-400 text-center rounded-xl w-48 ">View More</button>
            </Link>
          </div>

          <div className="main m-2 p-2 rounded-xl shadow-md w-96 text-center">
            <Image
              src="/TalentHub.png"
              alt="Game 2"
              className="rounded-xl h-48"
              width={400}
              height={150}
              quality={100}
              style={{
                borderRadius: "1em",
              }}
            />
            <h2 className="mt-2">My TalentHub</h2>
            <span className="opacity-60">CoulombScattering</span>
            <p>All the other games</p>
            <Link href="https://create.roblox.com/talent/creators/311742866">
              <button className="text-white headerIcon border-2 border-black px-1 py-2 mt-2 transition-all ease-in-out duration-400 text-center rounded-xl w-48 ">View More</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkExperience;
