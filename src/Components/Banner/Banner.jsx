import banner from '../../../public/images/banner.jpg'
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 my-7 lg:my-12 justify-center text-center'>
            <div className='flex-1 my-10 lg:my-20'>
                <h3 className='text-4xl my-5'>Front-end Web Developer</h3>
                <h2 className='text-6xl my-5'>Mahbuba Khanom</h2>
                <Link to='/about'>
                <button className='px-5 py-3 bg-fuchsia-500 text-white rounded-xl font-bold'>About me <FaArrowRightLong className='inline'></FaArrowRightLong></button></Link>
                
            </div>
            <div className='flex-1 px-5 lg:px-0 lg:flex gap-6 justify-center text-center'>
               <div>
               <img className='border-8 lg:w-[400px] lg:h-[400px] rounded-full border-fuchsia-500 ' src={banner} alt="" />
               </div>
                <div className='flex lg:grid justify-center items-center lg:my-20'>
               <p className='my-3'><a href='https://www.linkedin.com/in/mkrafiyah/'><FaLinkedin className='w-[40px] h-[40px]'></FaLinkedin></a></p>
               <p className='my-3'><a href='tel:971558753372'><IoCall  className='w-[40px] h-[40px]'></IoCall></a></p>
               <p className='my-3'><a href="https://github.com/mkrafiyah"><FaGithub  className='w-[40px] h-[40px]'></FaGithub></a></p>
               <p className='my-2'><a href="https://wa.me/971558753372"><FaWhatsapp className='w-[40px] h-[40px]'></FaWhatsapp></a></p>
               <p><a href="mailto:rafiyah.mahbub@gmail.com"><MdEmail className='w-[40px] h-[40px]'></MdEmail></a></p>
            </div>
            </div>
            
        </div>
    );
};

export default Banner;