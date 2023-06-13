import reactLogo from "../assets/react.png";
import nodeLogo from "../assets/node.png";
import mongoLogo from "../assets/mongo.png";
import htmlLogo from "../assets/html.png";
import javascriptLogo from "../assets/javascript.png";
import firebaseLogo from "../assets/firebase.png";
import cssLogo from "../assets/css.png";
import github from "../assets/github.png";
import tailwindLogo from "../assets/tailwind.png";
import awslogo from "../assets/aws.png";

const Skills = () => {
  return (
    <div className='bg-[#0a192f] text-gray-50'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 '>
            Experience
          </p>
          <p className='py-4'>
            these are the technologies I have used in my projects
          </p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={htmlLogo} alt='Logo html' />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={cssLogo} alt='Logo html' />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto'
              src={javascriptLogo}
              alt='Logo html'
            />
            <p className='my-4'>JAVASCRIPT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={reactLogo} alt='Logo html' />
            <p className='my-4'>REACT </p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={nodeLogo} alt='Logo html' />
            <p className='my-4'>NODE </p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={mongoLogo} alt='Logo html' />
            <p className='my-4'>MONGO DB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={github} alt='Logo html' />
            <p className='my-4'>GITHUB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={tailwindLogo} alt='Logo html' />
            <p className='my-4'>TAILWIND CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={awslogo} alt='aws logo' />
            <p className='my-4'>AWS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto'
              src={firebaseLogo}
              alt='Firebase logo'
            />
            <p className='my-4'>FIREBASE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
