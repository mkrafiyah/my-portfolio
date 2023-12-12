import errorImg from '../../../public/images/404-error.jpg'

const ErrorPage = () => {
    return (
        <div className='max-w-screen-xl mx-auto'> 
            <img className='w-[400px] mx-auto mt-10' src={errorImg} alt="" />
        </div>
    );
};

export default ErrorPage;