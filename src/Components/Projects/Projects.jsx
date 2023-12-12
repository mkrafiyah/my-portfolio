import { FaArrowRightLong } from 'react-icons/fa6';
import banner from '../../../public/images/banner.jpg';
import img1 from '../../../public/images/Screenshot 1.png';
import img2 from '../../../public/images/Screenshot 2.png';
import img3 from '../../../public/images/Screenshot 3.png';
const Projects = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold text-center'>My Projects</h2>
            <div className="grid lg:flex px-5 lg:px-0 justify-center items-center my-20 gap-10">
                <div className=' p-5 bg-fuchsia-300 '>
                    <img className='w-[400px] h-[300px]' src={img1} alt="" />
                </div>
                <div>
                    <h2 className='text-4xl mb-5'>Dream Auto Projects</h2>
                    <button className='px-5 py-3 bg-fuchsia-500 text-white rounded-xl font-bold'>Learn More <FaArrowRightLong className='inline'></FaArrowRightLong></button>
                </div>
            </div>
            <div className="grid lg:flex px-5 lg:px-0 justify-center items-center my-20 gap-10">
            <div>
                    <h2 className='text-4xl mb-5'>MediHealth Projects</h2>
                    <button className='px-5 py-3 bg-fuchsia-500 text-white rounded-xl font-bold'>Learn More <FaArrowRightLong className='inline'></FaArrowRightLong></button>
                </div>
                <div className=' p-5 bg-fuchsia-300 '>
                <img className='w-[400px] h-[300px]' src={img2} alt="" />
                </div>
                
            </div>
            <div className="grid lg:flex px-5 lg:px-0 justify-center items-center gap-10">
                <div className=' p-5 bg-fuchsia-300 '>
                <img className='w-[400px] h-[300px]' src={img3} alt="" />
                </div>
                <div>
                    <h2 className='text-4xl mb-5'>Emarat Projects</h2>
                    <button className='px-5 py-3 bg-fuchsia-500 text-white rounded-xl font-bold'>Learn More <FaArrowRightLong className='inline'></FaArrowRightLong></button>
                </div>
            </div>
        </div>
    );
};

export default Projects;