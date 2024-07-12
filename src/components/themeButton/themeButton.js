export const ThemeButton = ({ text }) => {
  const handleClick = () => {
    let url = "https://testnet.elementfi.io";
    window.open(url, '_blank');
  };
  return (
    <button className="bg-gradient-to-r from-[#D591FF] via-[#919CFF] to-[#91EBFF] h-11 px-6 font-semibold text-lg rounded-full"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
