import PropTypes from 'prop-types';

const Button = ({ icon, children, color }) => {
  return (
    <button
      className={` font-semibold min-w-40 px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 ${color} 
      cursor-pointer  hover:scale-105 transition-all duration-400 ease-in-out
      ${color === 'bg-c1' ? 'text-white' : 'text-neutral-900'}`}
    >
      {children}
      {icon}
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.node,
  children: PropTypes.node,
  color: PropTypes.string,
};

export default Button;
