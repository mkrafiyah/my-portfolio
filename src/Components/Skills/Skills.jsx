import html from '../../../public/images/html.png'
import css from '../../../public/images/css.png'
import js from '../../../public/images/js.png'
import mongodb from '../../../public/images/mongo.png'
import react from '../../../public/images/react.png'
import tailwind from '../../../public/images/tailwind.png'

const Skills = () => {
    return (
        <div className='my-12 px-20'>
            <h2 className='text-5xl text-center font-bold mb-20'>My Skills</h2>
            <div className='grid lg:flex justify-center gap-10 items-center mx-10'>
            <div className="w-40 h-40 rounded-xl  bg-fuchsia-100">
            
                <img className='w-20 justify-center py-5 mx-auto' src={html} alt="" />
                <h2 className='text-xl font-semibold text-center'>HTML</h2>
                
            </div>
            <div className="w-40 h-40 rounded-xl  bg-fuchsia-100">
                <img className='w-20 justify-center py-5 mx-auto' src={css} alt="" />
                <h2 className='text-xl font-semibold text-center'>CSS</h2>
            </div>
            <div className="w-40 h-40 rounded-xl  bg-fuchsia-100">
                <img className='w-20 justify-center py-5 mx-auto' src={js} alt="" />
                <h2 className='text-xl font-semibold text-center'>JS</h2>
            </div>
            <div className="w-40 h-40 rounded-xl  bg-fuchsia-100">
                <img className='w-20 justify-center py-5 mx-auto' src={react} alt="" />
                <h2 className='text-xl font-semibold text-center'>React</h2>
            </div>
          
        </div>
        <div className='grid lg:flex my-20  gap-10 justify-center  items-center'>
        <div className="w-40 h-40 rounded-xl  ml-10 bg-fuchsia-100">
                <img className='w-20 justify-center py-5 mx-auto' src={tailwind} alt="" />
                <h2 className='text-xl font-semibold text-center'>Tailwind</h2>
            </div>
            <div className="w-40 h-40 rounded-xl  bg-fuchsia-100">
                <img className='w-20 justify-center py-5 mx-auto' src={mongodb} alt="" />
                <h2 className='text-xl font-semibold text-center'>MongoDB</h2>
            </div>
        </div>
        </div>
    );
};

export default Skills;