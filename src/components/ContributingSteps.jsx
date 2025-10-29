import { PiBracketsAngleBold } from 'react-icons/pi';
import { LuGithub } from 'react-icons/lu';
import { GoPeople } from 'react-icons/go';
import StepCard from './StepCard';

const ContributingSteps = () => {
  return (
    <section className=" md:space-y-15 space-y-7 py-10 md:px-5 bg-gray-200">
      {/* heading */}
      <div className="text-center space-y-3 container mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold">
          Start Contributing in <span className="text-c2">3 Simple Steps</span>
        </h2>
        <p className="text-xl font-medium text-gray-800">
          Whether you're a beginner or expert, there's a place for you in our
          community
        </p>
      </div>

      <div className="w-full text-gray-800 font-medium text-lg flex flex-col md:flex-row justify-center items-center gap-4">
        <StepCard
          icon={<PiBracketsAngleBold />}
          heading="Find an Issue"
          paragraph="Browse our projects and find a good first issue that matches your skills and interests."
          link="View Good First Issues"
          color="after:bg-c1"
          bg="bg-c1"
          shadow="indigo"
        />

        <StepCard
          icon={<LuGithub />}
          heading="Fork & Contribute"
          paragraph="Fork the repository, make your changes, and submit a pull request. We'll guide you through the process."
          link="Read Contributing Guide"
          color="after:bg-gray-700"
          bg="bg-gray-700"
          shadow="gray"
        />

        <StepCard
          icon={<GoPeople />}
          heading="Join Discussion"
          paragraph="Connect with other contributors, share ideas, and get help in our Discord community."
          link="Join Discord"
          color="after:bg-c2"
          bg="bg-c2"
          shadow="orange"
        />
      </div>

      {/* <div></div> */}
    </section>
  );
};

export default ContributingSteps;
