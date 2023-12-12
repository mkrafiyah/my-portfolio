import { Link } from "react-router-dom";


const About = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-20">
      <h2 className="text-4xl text-center my-20 font-bold">About Thyself</h2>
      <h3 className="text-xl">I am, <p className="text-xl font-bold">Mahbuba Khanom</p></h3>
      <p className="text-xl">I am from Barishal, Bangladesh. Now i am living in Abu Dhabi, UAE.</p>
      <p className="text-xl">I had always desired for learning web development. As a result i started learning and practising react from the past few months.I am also learning MongoDB as i want to see me as a MERN stack developer in future.</p>
      <h2 className="text-4xl text-center my-20 font-bold">Working Experience</h2>
      <p className="text-xl">Though I have not prior experience to working in any company but i have done some projects.If you are eager to know about that please click here. <Link className="text-sky-700 underline" to='/projects'>Projects</Link>  </p>
      <h2 className="text-4xl text-center my-20 font-bold">My Educational Qualification</h2>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">2018</time>
            <div className="text-lg font-black">MSc. in Food Microbiology</div>
            I have completed my MSc. in Food Microbiology from Patuakhali Science and Technology University in 2018, with cgpa 3.78 out of 4.00.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2016</time>
            <div className="text-lg font-black">BSc. in Nutrition and Food Science</div>
            I have completed my BSc. in Nutrition and Food Science from Patuakhali Science and Technology University in 2016, with cgpa 3.46 out of 4.00.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">2011</time>
            <div className="text-lg font-black">HSC</div>
            I have completed my HSC in Science group from Barishal Govt. Women's College, Barishal with gpa 5.00 out of 5.00.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2009</time>
            <div className="text-lg font-black">SSC</div>
            I have completed my HSC in Science group from Barishal Govt. Girls' High School, Barishal with gpa 5.00 out of 5.00.
          </div>
          <hr />
        </li>
        <li>
          <hr />

        </li>
      </ul>
    </div>
  );
};

export default About;