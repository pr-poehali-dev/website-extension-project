import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <nav className="bg-[#2e3a0e] text-[#97ff00] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">RAVAGE EXTRIME</Link>
        <div className="flex space-x-6">
          <Link to="/" className="hover:underline">ГЛАВНАЯ</Link>
          <Link to="/catalog" className="hover:underline">КАТАЛОГ</Link>
          <Link to="/about" className="hover:underline">О НАС</Link>
          <Link to="/profile" className="flex items-center hover:underline">
            <Icon name="User" className="h-5 w-5 mr-1" />
            ПРОФИЛЬ
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;