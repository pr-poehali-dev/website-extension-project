
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-[#2e3a0e] text-[#97ff00] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">RAVAGE EXTRIME</Link>
        <div className="flex space-x-6">
          <Link to="/" className="hover:underline">ГЛАВНАЯ</Link>
          <Link to="/catalog" className="hover:underline">КАТАЛОГ</Link>
          <Link to="/about" className="hover:underline">О НАС</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
