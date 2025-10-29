import PropTypes from 'prop-types';

const StepCard = ({ icon, heading, paragraph, link, color, bg, shadow }) => {
  return (
    <div
      style={{ '--shadow': shadow }}
      className={`flex flex-col justify-center items-center gap-4 p-6 md:w-[30%] text-center
         cursor-pointer rounded-xl mx-7
         hover:[animation:glow_2s_ease-in-out_infinite] transition-all duration-700 ease-in-out`}
    >
      <div
        className={`font-extrabold text-4xl ${bg} p-2 text-white rounded-lg`}
      >
        {icon}
      </div>

      <h3 className="font-bold text-xl">{heading}</h3>
      <p className="text-lg">{paragraph}</p>
      <a
        href="#"
        className={`relative 
            after:absolute after:content-[''] after:bottom-0 after:left-0 
            after:w-0 hover:after:w-full after:h-[2px] 
            ${color} after:transition-all after:duration-1000 after:ease-in-out
            after:opacity-0 hover:after:opacity-100
            after:scale-x-0 hover:after:scale-x-100
            after:origin-left
            `}
      >
        {link}
      </a>
    </div>
  );
};

StepCard.propTypes = {
  icon: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  shadow: PropTypes.string.isRequired,
};

export default StepCard;
