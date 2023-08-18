import Link from 'next/link';

const Header = () => {
    return (
        <div>
<section id="header" className="header main m-auto rounded-3xl p-4 flex justify-center items-center
 absolute top-4 left-0 right-0 shadow-2xl w-alt backdrop gap-4">
    <Link id="menu-button" href="/" className="hover:headerIconHCol border-2 border-transparent hover:border-white headerIcon p-3 m-1  cursor-pointer justify-center align-center rounded-xl no-underline
     transition-all ease-in duration-100 min-w-max">Home</Link>
    <Link id="menu-button" href="/about" className="hover:headerIconHCol border-2 border-transparent hover:border-white headerIcon p-3 m-1  cursor-pointer justify-center align-center rounded-xl no-underline
     transition-all ease-in duration-100 min-w-max">About Me</Link>
    <Link id="menu-button" href="/skills" className="hover:headerIconHCol border-2 border-transparent hover:border-white headerIcon p-3 m-1  cursor-pointer justify-center align-center rounded-xl no-underline
     transition-all ease-in duration-100">Skills</Link>
    <Link id="menu-button" href="/contact" className="hover:headerIconHCol border-2 border-transparent hover:border-white headerIcon p-3 m-1  cursor-pointer justify-center align-center rounded-xl no-underline
     transition-all ease-in duration-100">Contact</Link>
    <Link id="menu-button" href="/projects" className="hover:headerIconHCol border-2 border-transparent hover:border-white headerIcon p-3 m-1  cursor-pointer justify-center align-center rounded-xl no-underline
     transition-all ease-in duration-100">Projects</Link>
    <Link id="menu-button" href="/work" className="hover:headerIconHCol border-2 border-transparent hover:border-white headerIcon p-3 m-1  cursor-pointer justify-center align-center rounded-xl no-underline
     transition-all ease-in duration-100 min-w-max">Work Experience</Link>
    <Link id="menu-button" href="/services" className="hover:headerIconHCol border-2 border-transparent hover:border-white headerIcon p-3 m-1  cursor-pointer justify-center align-center rounded-xl no-underline
     transition-all ease-in duration-100">Services</Link>
  </section>
        </div>
    );
}
 
export default Header;