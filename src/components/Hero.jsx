import HeroImage from '../assets/heroImg.jpg';
import { FaGithub } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import Button from './Button';

const Hero = () => {
  return (
    <section className="py-20">
      {/* hero section */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center text-gray-800">
        {/* Text */}
        <div className=" flex flex-col md:w-[50vw] gap-8 items-center justify-center md:ml-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center ">
            Building Africa's
            <br />
            <span className="text-c2 font-bold"> Open Source </span>
            <br />
            Future
          </h1>
          <p className="px-4 text-center sm:text-lg md:text-xl font-black">
            Join Algorithmia SE, a vibrant community of developers, designers,
            and innovators creating open source solutions that address real
            challenges across Africa.
          </p>

          {/* Buttons */}
          <div className="flex justify-between items-center gap-8">
            <Button icon={<FaGithub />} color={'bg-c1'}>
              Github
            </Button>

            <Button icon={<FaAngleRight />} color={'bg-c2'}>
              Explore Projects
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className=" flex items-center justify-center border-4 border-c1 rounded-full">
          <img
            src={HeroImage}
            alt="Hero Image"
            className="md:w-[40vw] w-[70vw] rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
