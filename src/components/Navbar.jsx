import {
  FaBars,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import logo from "../assets/logo1.png";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div
      className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]
    text-gray-300'
    >
      <div>
        <img src={logo} alt='logo Image' style={{ width: "50px" }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Skill</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* Hamburguer*/}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}

      <ul
        className={
          !nav
            ? "hidden"
            : " absolute top-0 left-3 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Skill</li>
        <li className='py-6 text-4xl'>Work</li>
        <li className='py-6 text-4xl'>Contact</li>

      </ul>

      {/* social icons  */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300  bg-blue-600 '>
            <a
              className='flex justify-between items-center w-full text-gray'
              href='/'
            >
              Linkendin <FaLinkedin size={30} />
            </a>
          </li>
          <li
            className='w-[160px] h-[60px] flex justify-between items-center 
           ml-[-100px] hover:ml-[-10px] duration-300  bg-blue-400'
          >
            <a
              className='flex justify-between items-center w-full text-gray'
              href='/'
            >
              Linkendin <FaFacebook size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300  bg-black '>
            <a
              className='flex justify-between items-center w-full text-gray'
              href='/'
            >
              Linkendin <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300  bg-green-500 '>
            
            <a
              className='flex justify-between items-center w-full text-gray'
              href='/'
            >
              Resume <FaUser size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
