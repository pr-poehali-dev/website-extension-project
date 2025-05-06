
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Навигационная панель */}
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

      {/* Содержимое */}
      <div 
        className="flex-1 bg-cover bg-center" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url(https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=2070&auto=format&fit=crop)`
        }}
      >
        <div className="container mx-auto py-12">
          <div className="bg-black/60 p-8 max-w-4xl mx-auto">
            <h1 className="text-[#97ff00] text-4xl font-bold mb-6">О НАС</h1>
            
            <div className="text-white space-y-6">
              <p>
                Компания <span className="text-[#97ff00] font-bold">RAVAGE EXTRIME</span> специализируется на организации экстремальных туров и приключений для тех, кто ищет острые ощущения и незабываемые впечатления.
              </p>
              
              <p>
                Наша команда состоит из опытных инструкторов и гидов, каждый из которых является экспертом в своей области. Мы предлагаем туры разной сложности и экстремальности, чтобы каждый нашел маршрут по своим силам и желаниям.
              </p>
              
              <h2 className="text-[#97ff00] text-2xl font-bold mt-8 mb-4">НАШИ ПРИНЦИПЫ</h2>
              
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Безопасность прежде всего - при всей экстремальности, мы соблюдаем все меры предосторожности</li>
                <li>Уникальные маршруты - мы избегаем массовых туристических направлений</li>
                <li>Персональный подход - учитываем физическую подготовку и пожелания каждого клиента</li>
                <li>Забота о природе - минимальное воздействие на окружающую среду</li>
              </ul>
              
              <h2 className="text-[#97ff00] text-2xl font-bold mt-8 mb-4">КОНТАКТЫ</h2>
              
              <div className="space-y-2">
                <p><span className="font-bold">Телефон:</span> +7 (XXX) XXX-XX-XX</p>
                <p><span className="font-bold">Email:</span> info@ravage-extrime.ru</p>
                <p><span className="font-bold">Адрес:</span> г. Москва, ул. Экстремальная, д. 42</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
