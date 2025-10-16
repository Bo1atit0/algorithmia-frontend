import HeroImage from '../assets/heroImg.webp';
import { FaGithub } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import Button from './Button';

const Hero = () => {
  return (
    <section className="py-20 flex flex-col">
      {/* hero section */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center text-gray-800">
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

          <div className="flex justify-center items-center gap-8">
            <div className="flex flex-col justify-center items-center">
              <p className="text-4xl font-bold text-c2">50+</p>
              <p className="text-xl text-neutral-700">Active Contributors</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <p className="text-4xl font-bold text-c2">12</p>
              <p className="text-xl text-neutral-700">Open Projects</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <p className="text-4xl font-bold text-c2">8</p>
              <p className="text-xl text-neutral-700">Countries</p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          className=" p-1 rounded-full relative z-10 overflow-hidden
        after:bg-[conic-gradient(transparent,transparent,transparent,var(--color-c1))]
        after:content-[''] after:absolute after:animate-[spinSlow_10s_linear_infinite]
        after:z-[-1] after:inset-0 after:[animation-delay:-5s]
        before:content-[''] before:absolute before:inset-0 before:z-[-1] before:animate-[spinSlow_10s_linear_infinite]
        before:bg-[conic-gradient(transparent,transparent,transparent,var(--color-c1))]
        "
        >
          <img
            src={HeroImage}
            alt="Hero Image"
            className="md:w-[38vw] w-[70vw] rounded-full"
          />
          {/* <div className="bg-neutral-300 absolute inset-0 mix-blend-darken"></div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
