const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full '>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 text-white border-pink-600'>
              About
            </p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi, Im Clint, nice to meet you. Please take a look around</p>
          </div>
          <div>
            <p className='mt-1'>
              I am a Full Stac k Developer specializing in building (and
              occasionally designing) exceptional digital experiences.
              Currently, I am focused on building responsive full-stack web
              applications.
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
