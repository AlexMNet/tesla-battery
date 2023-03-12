import headerLogo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className="bg-neutral-800 py-6 w-screen animate-header">
      <img className="w-24 mx-auto" src={headerLogo} alt="Tesla Logo" />
    </header>
  );
};

export default Header;
