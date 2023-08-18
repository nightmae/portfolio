import Header from "@/components/Header";
import Head from "next/head";
import styles from "../styles/Skills.module.css";
import Image from "next/image";

const Skills = () => {
  return (
    <>
      <Head>
        <title>Skills</title>
        <link rel="icon" href="/moon.png" />
      </Head>
      <Header></Header>
      <section className="relative rounded-2xl top-6" id={styles.slideAnim}>
        <div
          className="flex flex-row justify-left align-center gap-12"
          id={styles.container}
        >
          <div
            className="main border-2 border-transparent rounded-3xl shadow-xl flex flex-col mt-12 p-4"
            id={styles.wlkj}
          >
            <span className="text-white text-2xl font-bold m-0 mb-2 align-left">
              Programming
            </span>
            <ul className="list-none p-0">
              <li className="mainBG rounded-xl text-white flex items-center text-md m-2 p-3 text-center transition-all ease-in-out duration-200 cursor-pointer hover:bg-indigo-950 hover:shadow-2xl hover:-translate-y-2 hover:rounded-2xl">
                <Image
                  src="/skills/html.png"
                  alt="HTML"
                  width={30}
                  height={30}
                  className="mr-3"
                />
                <span className="mr-3">HTML</span>
              </li>
              <li className="mainBG rounded-xl text-white flex items-center text-md m-2 p-3 text-center transition-all ease-in-out duration-200 cursor-pointer hover:bg-indigo-950 hover:shadow-2xl hover:-translate-y-2 hover:rounded-2xl">
                <Image
                  src="/skills/tupac.png"
                  alt="CSS"
                  width={30}
                  height={30}
                  className="mr-2"
                />
                <span className="mr-3">CSS</span>
              </li>
              <li className="mainBG rounded-xl text-white flex items-center text-md m-2 p-3 text-center transition-all ease-in-out duration-200 cursor-pointer hover:bg-indigo-950 hover:shadow-2xl hover:-translate-y-2 hover:rounded-2xl">
                <Image
                  src="/skills/reac.png"
                  alt="React.js"
                  width={30}
                  height={30}
                  className="mr-2"
                />
                <span className="mr-3">React.js</span>
              </li>
              <li className="mainBG rounded-xl text-white flex items-center text-md m-2 p-3 text-center transition-all ease-in-out duration-200 cursor-pointer hover:bg-indigo-950 hover:shadow-2xl hover:-translate-y-2 hover:rounded-2xl">
                <Image
                  src="/skills/next.png"
                  alt="Next.js"
                  width={30}
                  height={30}
                  className="mr-2"
                />
                <span className="mr-3">Next.js</span>
              </li>
              <li className="mainBG rounded-xl text-white flex items-center text-md m-2 p-3 text-center transition-all ease-in-out duration-200 cursor-pointer hover:bg-indigo-950 hover:shadow-2xl hover:-translate-y-2 hover:rounded-2xl">
                <Image
                  src="/skills/js.png"
                  alt="JavaScript"
                  width={30}
                  height={30}
                  className="mr-2"
                />
                <span className="mr-3">JavaScript</span>
              </li>
              <li className="mainBG rounded-xl text-white flex items-center text-md m-2 p-3 text-center transition-all ease-in-out duration-200 cursor-pointer hover:bg-indigo-950 hover:shadow-2xl hover:-translate-y-2 hover:rounded-2xl">
                <Image
                  src="/skills/ts.png"
                  alt="TypeScript"
                  width={30}
                  height={30}
                  className="mr-2"
                />
                <span className="mr-3">TypeScript</span>
              </li>
              <li className="mainBG rounded-xl text-white flex items-center text-md m-2 p-3 text-center transition-all ease-in-out duration-200 cursor-pointer hover:bg-indigo-950 hover:shadow-2xl hover:-translate-y-2 hover:rounded-2xl">
                <Image
                  src="/skills/ang.png"
                  alt="Angular"
                  width={30}
                  height={30}
                  className="mr-2"
                />
                <span className="mr-3">Angular</span>
              </li>
            </ul>
          </div>
          <div
            className="main border-2 border-transparent rounded-3xl shadow-xl flex flex-col mt-12 p-4"
            id={styles.wlkj}
          >
            <span className="text-white text-2xl font-bold m-0 mb-2 align-left">
              Mathematics
            </span>
            <ul className="list-none p-0">
              <li className="mainBG rounded-xl text-white flex items-center text-md m-2 p-3 text-center transition-all ease-in-out duration-200 cursor-pointer hover:bg-indigo-950 hover:shadow-2xl hover:-translate-y-2 hover:rounded-2xl">
                <Image
                  src="/skills/integral.png"
                  alt="Calculus (1-3)"
                  width={30}
                  height={30}
                  className="mr-2"
                />
                <span className="mr-3">Calculus (1-3)</span>
              </li>
              <li className="mainBG rounded-xl text-white flex items-center text-md m-2 p-3 text-center transition-all ease-in-out duration-200 cursor-pointer hover:bg-indigo-950 hover:shadow-2xl hover:-translate-y-2 hover:rounded-2xl">
                <Image
                  src="/skills/nabla.png"
                  alt="Tensor Calculus"
                  width={30}
                  height={30}
                  className="mr-2"
                />
                <span className="mr-3">Tensor Calculus</span>
              </li>
              <li className="mainBG rounded-xl text-white flex items-center text-md m-2 p-3 text-center transition-all ease-in-out duration-200 cursor-pointer hover:bg-indigo-950 hover:shadow-2xl hover:-translate-y-2 hover:rounded-2xl">
                <Image
                  src="/skills/partial.png"
                  alt="Differential Equations"
                  width={30}
                  height={30}
                  className="mr-2"
                />
                <span className="mr-3">Differential Equations</span>
              </li>
              <li className="mainBG rounded-xl text-white flex items-center text-md m-2 p-3 text-center transition-all ease-in-out duration-200 cursor-pointer hover:bg-indigo-950 hover:shadow-2xl hover:-translate-y-2 hover:rounded-2xl">
                <Image
                  src="/skills/matrices.png"
                  alt="Linear Algebra"
                  width={30}
                  height={30}
                  className="mr-2"
                />
                <span className="mr-3">Linear Algebra</span>
              </li>
            </ul>
          </div>
          <div
            className="main border-2 border-transparent rounded-3xl shadow-xl flex flex-col mt-12 p-4"
            id={styles.wlkj}
          >
            <span className="text-white text-2xl font-bold m-0 mb-2 align-left">
              Physics
            </span>
            <ul className="list-none p-0">
              <li className="mainBG rounded-xl text-white flex items-center text-md m-2 p-3 text-center transition-all ease-in-out duration-200 cursor-pointer hover:bg-indigo-950 hover:shadow-2xl hover:-translate-y-2 hover:rounded-2xl">
                <Image
                  src="/skills/lambda.png"
                  alt="General Relativity"
                  width={30}
                  height={30}
                  className="mr-2"
                />
                <span className="mr-3">General Relativity</span>
              </li>
              <li className="mainBG rounded-xl text-white flex items-center text-md m-2 p-3 text-center transition-all ease-in-out duration-200 cursor-pointer hover:bg-indigo-950 hover:shadow-2xl hover:-translate-y-2 hover:rounded-2xl">
                <Image
                  src="/skills/lambda.png"
                  alt="Special Relativity"
                  width={30}
                  height={30}
                  className="mr-2"
                />
                <span className="mr-3">Special Relativity</span>
              </li>
              <li className="mainBG rounded-xl text-white flex items-center text-md m-2 p-3 text-center transition-all ease-in-out duration-200 cursor-pointer hover:bg-indigo-950 hover:shadow-2xl hover:-translate-y-2 hover:rounded-2xl">
                <Image
                  src="/skills/nabla.png"
                  alt="Tensor Calculus"
                  width={30}
                  height={30}
                  className="mr-2"
                />
                <span className="mr-3">Tensor Calculus</span>
              </li>
              <li className="mainBG rounded-xl text-white flex items-center text-md m-2 p-3 text-center transition-all ease-in-out duration-200 cursor-pointer hover:bg-indigo-950 hover:shadow-2xl hover:-translate-y-2 hover:rounded-2xl">
                <Image
                  src="/skills/hbar.png"
                  alt="Quantum Field Theory"
                  width={30}
                  height={30}
                  className="mr-2"
                />
                <span className="mr-3">Quantum Field Theory</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
