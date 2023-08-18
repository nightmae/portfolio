import Link from 'next/link';
import Header from '../components/Header'
import Head from 'next/head'

const Services = () => {
    return (
        <>
      <Head>
        <title>Services</title>
        <link rel="icon" href="/moon.png" />
      </Head>
        <Header></Header>
        <section className="relative mainBG p-5 rounded-2xl top-6 shadow-xl" >
        <div className="mainBG p-8 rounded-xl shadow-xl " id="heightWidthAdjuster"
            style={{
                padding: '2em',
                borderRadius: '1em'
            }}
        >
            <span className="text-3xl -m-10 mb-5 p-6">Services</span>
            <p className="">I offer a range of services tailored to your needs:</p>
            <ul className="p-2">
                <li><strong>Translation Services:</strong> With expertise in multiple languages, I can provide translation services for 125 Robux or 0.3 EUR per string. I ensure accuracy and context in all translations.</li>
                <li><strong>Website Design:</strong> Whether you're looking for a simple website or a dynamic online platform, I can design it for you. My rates start at 100 EUR for a basic website and can vary based on your specific requirements.</li>
            </ul>
            <p><strong>Please</strong> <Link href="/contact" className="no-underline text-green-500">contact me</Link> for more details or to discuss a customized service package.</p>
        </div>
    </section>
    </>
    );
}
 
export default Services;