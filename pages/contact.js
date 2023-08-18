import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';

import { useState } from 'react';
import Modal from '../components/Modal';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Head>
        <title>Contact Information</title>
        <link rel="icon" href="/moon.png" />
      </Head>
      <Header></Header>
      <section className="relative rounded-2xl top-6">
  <div className="flex flex-row justify-left items-center gap-12 shadow-xl">
    <div className="h-96 w-96 main text-white shadow-md rounded-xl p-7 flex flex-col justify-start items-start leading-relaxed">
      <div className="flex items-center mb-2 cursor-pointer text-md transition-colors duration-500">
        <Image src="/mail.svg" className="align-middle mr-2" width={30} height={30} />
        <span className="mr-3"><strong>Email:</strong> </span> peritopre@gmail.com
      </div>
      <div className="flex items-center mb-2 cursor-pointer text-md transition-colors duration-500">
        <Image src="/discord.svg" className="icon mr-2" width={30} height={30} />
        <span className="mr-3"><strong>Discord:</strong></span> nightmae
      </div>
      <div className="flex items-center mb-2 cursor-pointer text-md transition-colors duration-500">
        <Image src="/linkedin.svg" className="icon mr-2" width={30} height={30} />
        <span className="mr-3"><strong>LinkedIn:</strong></span> <Link className="text-green-500 hover:text-green-600 transition-all duration-500" href="/">undefined</Link>
      </div>
      <button className="mainBG mt-40 p-4 border border-transparent transition-colors duration-500 rounded-xl w-full shadow-2xl hover:bg-gray-900 hover:border-white" onClick={openModal}>Contact via Website</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  </div>
</section>


    </>
  );
};

export default Contact;
