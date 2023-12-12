import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { MdEmail } from "react-icons/md";


const Footer = () => {
    return (
        <footer className="footer footer-center mt-20 p-10 bg-fuchsia-100 text-base-content rounded">
           <nav className="flex gap-7">
           <NavLink className='list-none font-medium' to='/home'><li><a>Home</a></li></NavLink>
            <NavLink className='list-none font-medium' to='/projects'><li><a>Projects</a></li></NavLink>
            <NavLink className='list-none font-medium' to='/contact'><li><a>Contact</a></li></NavLink>
            <NavLink className='list-none font-medium' to='/about'><li><a>About</a></li></NavLink>
           </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a><FaWhatsapp className='w-[20px] h-[20px]'></FaWhatsapp></a>
                    <a><FaGithub  className='w-[20px] h-[20px]'></FaGithub></a>
                    <a><IoCall  className='w-[20px] h-[20px]'></IoCall></a>
                    <a href=""><FaLinkedin className='w-[20px] h-[20px]'></FaLinkedin></a>
                    <a href=""><MdEmail className='w-[20px] h-[20px]'></MdEmail></a>
                </div>
            </nav>
            <aside>
                <p>Copyright © 2023 - All right reserved</p>
            </aside>
        </footer>
    );
};

export default Footer;