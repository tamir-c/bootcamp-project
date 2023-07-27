// Note: I might refactor this later down the line if we start having a lot of buttons.
const SocialButton = ({ icon, text }) => {
  return (
    <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
      <div className="bg-white p-2 rounded-full">{icon}</div>
      <span className="ml-4">{text}</span>
    </button>
  );
};

export default SocialButton;
