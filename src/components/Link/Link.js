import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { IoIosArrowUp } from 'react-icons/io'

const Link = () => {
  return (
    <section className="flex flex-col items-center bg-gray-800 text-white py-12 gap-11 text-4xl">
      <div>
        <a href="#intro">
          <IoIosArrowUp className='text-3xl' />
        </a>
      </div>
      <div className='flex flex-row gap-12'>
        <a href='https://www.linkedin.com/in/subin-mohan-s-36657b175/' target='_blank' rel='noreferrer'><FaLinkedin /></a>
        <a href='https://github.com/ChaosFreeze' target='_blank' rel='noreferrer'><FaGithub /></a>
        <a href='https://twitter.com/Subinmohan_77' target='_blank' rel='noreferrer'><FaTwitter /></a>
      </div>
    </section>
  );
};

export default Link;
