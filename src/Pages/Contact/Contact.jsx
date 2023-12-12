import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_6o6bm3e', 
    'template_tyhaejv', form.current, 
    'CEiNhryCsiHJ0_FAZ')
      .then((result) => {
          console.log(result.text);
          console.log('Message Sent');
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div>
            <h2 className="text-3xl lg:text-5xl text-center my-20 font-bold">Contact With Me</h2>
    <form className='border bg-fuchsia-200 grid w-4/6 lg:w-3/6 p-5 mx-auto lg:p-10' ref={form} onSubmit={sendEmail}>
      <label className='text-lg'>Name</label>
      <input className='border rounded-lg p-2 mb-4 ' type="text" name="user_name" />
      <label>Email</label>
      <input className='border rounded-lg p-2 mb-4 ' type="email" name="user_email" />
      <label>Message</label>
      <textarea className='border rounded-lg p-2 mb-4 ' name="message" />
      <input className='border bg-fuchsia-500 text-white mt-5 w-2/3 mx-auto rounded-lg p-2 mb-4 ' type="submit" value="Send" />
    </form>
        </div>
    );
};

export default Contact;