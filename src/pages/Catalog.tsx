
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Catalog = () => {
  const tours = [
    {
      id: 1,
      title: "ГОРНЫЙ ТРЕКИНГ",
      location: "КАВКАЗ",
      extremeRating: 4,
      maxRating: 6,
      imageSrc: "https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "ВУЛКАНИЧЕСКИЙ ТУР",
      location: "КАМЧАТКА",
      extremeRating: 5,
      maxRating: 6,
      imageSrc: "https://images.unsplash.com/photo-1543933441-b4f6c33fe8f7?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "ДАЙВИНГ С АКУЛАМИ",
      location: "ЧЕРНОЕ МОРЕ",
      extremeRating: 3,
      maxRating: 6,
      imageSrc: "https://images.unsplash.com/photo-1564731071754-001b9f5a85b6?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "РАФТИНГ ЭКСТРИМ",
      location: "АЛТАЙ",
      extremeRating: 5,
      maxRating: 6,
      imageSrc: "https://images.unsplash.com/photo-1594784254931-5bccd5b6bacf?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "ЛЕДЯНОЙ МАРШРУТ",
      location: "БАЙКАЛ",
      extremeRating: 3,
      maxRating: 6,
      imageSrc: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2040&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "ПАРАПЛАНЕРИЗМ",
      location: "СОЧИ",
      extremeRating: 4,
      maxRating: 6,
      imageSrc: "https://images.unsplash.com/photo-1622222298046-f8cf55854452?q=80&w=2070&auto=format&fit=crop"
    }
  ];

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

      {/* Баннер каталога */}
      <div className="bg-black py-12">
        <div className="container mx-auto">
          <h1 className="text-[#97ff00] text-4xl font-bold mb-8">КАТАЛОГ ЭКСТРЕМАЛЬНЫХ ТУРОВ</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours.map((tour) => (
              <Card key={tour.id} className="bg-black border border-[#97ff00]/30 overflow-hidden rounded-none hover:shadow-[0_0_15px_rgba(151,255,0,0.3)] transition-shadow duration-300 h-full">
                <div className="h-60 relative overflow-hidden">
                  <img 
                    src={tour.imageSrc} 
                    alt={tour.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-white text-xl font-bold mb-1">{tour.title}</h3>
                  <p className="text-[#97ff00] mb-4">{tour.location}</p>
                  
                  <div className="mt-auto">
                    <div className="text-white text-sm mb-1">ЭКСТРЕМАЛЬНОСТЬ</div>
                    <div className="flex items-center">
                      {Array.from({ length: tour.maxRating }).map((_, index) => (
                        <div 
                          key={index} 
                          className={`h-3 w-8 mr-1 ${index < tour.extremeRating ? 'bg-[#97ff00]' : 'bg-[#97ff00]/25'}`}
                        ></div>
                      ))}
                      <span className="ml-2 text-[#97ff00]">
                        {tour.extremeRating}/{tour.maxRating}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
