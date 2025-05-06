import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";

const Catalog = () => {
  const tourTypes = [
    "ВСЕ", "ГОРЫ", "ВОДА", "ПЕЩЕРЫ", "ВУЛКАНЫ", "ВОЗДУХ"
  ];

  const tours = [
    {
      id: 1,
      title: "ГОРНЫЙ ТРЕКИНГ",
      location: "КАВКАЗ",
      extremeRating: 4,
      maxRating: 6,
      type: "ГОРЫ",
      price: "45,000 ₽",
      duration: "7 дней",
      imageSrc: "https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "ВУЛКАНИЧЕСКИЙ ТУР",
      location: "КАМЧАТКА",
      extremeRating: 5,
      maxRating: 6,
      type: "ВУЛКАНЫ",
      price: "75,000 ₽",
      duration: "10 дней",
      imageSrc: "https://images.unsplash.com/photo-1543933441-b4f6c33fe8f7?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "ДАЙВИНГ С АКУЛАМИ",
      location: "ЧЕРНОЕ МОРЕ",
      extremeRating: 3,
      maxRating: 6,
      type: "ВОДА",
      price: "35,000 ₽",
      duration: "5 дней",
      imageSrc: "https://images.unsplash.com/photo-1564731071754-001b9f5a85b6?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "РАФТИНГ ЭКСТРИМ",
      location: "АЛТАЙ",
      extremeRating: 5,
      maxRating: 6,
      type: "ВОДА",
      price: "40,000 ₽",
      duration: "6 дней",
      imageSrc: "https://images.unsplash.com/photo-1594784254931-5bccd5b6bacf?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "ЛЕДЯНОЙ МАРШРУТ",
      location: "БАЙКАЛ",
      extremeRating: 3,
      maxRating: 6,
      type: "ГОРЫ",
      price: "55,000 ₽",
      duration: "8 дней",
      imageSrc: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2040&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "ПАРАПЛАНЕРИЗМ",
      location: "СОЧИ",
      extremeRating: 4,
      maxRating: 6,
      type: "ВОЗДУХ",
      price: "30,000 ₽",
      duration: "3 дня",
      imageSrc: "https://images.unsplash.com/photo-1622222298046-f8cf55854452?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 7,
      title: "ПЕЩЕРНЫЙ ЭКСТРИМ",
      location: "УРАЛ",
      extremeRating: 5,
      maxRating: 6,
      type: "ПЕЩЕРЫ",
      price: "38,000 ₽",
      duration: "5 дней",
      imageSrc: "https://images.unsplash.com/photo-1586169384627-9e35f7ffa08d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 8,
      title: "ГОРНОЕ ВОСХОЖДЕНИЕ",
      location: "АЛТАЙ",
      extremeRating: 6,
      maxRating: 6,
      type: "ГОРЫ",
      price: "60,000 ₽",
      duration: "9 дней",
      imageSrc: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 9,
      title: "ПОДЛЕДНЫЙ ДАЙВИНГ",
      location: "КАРЕЛИЯ",
      extremeRating: 6,
      maxRating: 6,
      type: "ВОДА",
      price: "65,000 ₽",
      duration: "7 дней",
      imageSrc: "https://images.unsplash.com/photo-1635236603966-b8c015bca6a8?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Навигационная панель */}
      <Header />

      {/* Баннер каталога */}
      <div 
        className="bg-cover bg-center py-12" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(https://images.unsplash.com/photo-1594784254931-5bccd5b6bacf?q=80&w=1974&auto=format&fit=crop)`,
        }}
      >
        <div className="container mx-auto">
          <h1 className="text-[#97ff00] text-4xl font-bold mb-2">КАТАЛОГ ЭКСТРЕМАЛЬНЫХ ТУРОВ</h1>
          <p className="text-white text-lg mb-8">Выберите испытание по своим силам и предпочтениям</p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-3">
              <Input 
                placeholder="Поиск по названию или локации..." 
                className="bg-[#0c0c0c] border-[#97ff00]/30 text-white h-12 focus-visible:ring-[#97ff00]" 
              />
            </div>
            <Button className="bg-[#97ff00] hover:bg-[#7acc00] text-black h-12">
              <Icon name="Search" className="mr-2" />
              НАЙТИ
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-black py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Фильтры */}
            <div className="space-y-8">
              <div className="bg-[#0c0c0c] p-6 border border-[#97ff00]/30">
                <h3 className="text-[#97ff00] font-bold mb-6 pb-2 border-b border-[#97ff00]/30">ФИЛЬТРЫ</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-bold mb-3">ТИП ТУРА</h4>
                    <div className="space-y-2">
                      {tourTypes.map((type, index) => (
                        <div key={index} className="flex items-center">
                          <input 
                            type="checkbox" 
                            id={`type-${index}`} 
                            className="w-4 h-4 mr-3 accent-[#97ff00]" 
                            defaultChecked={index === 0} 
                          />
                          <label htmlFor={`type-${index}`} className="text-white cursor-pointer">{type}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-bold mb-3">УРОВЕНЬ ЭКСТРИМА</h4>
                    <div className="px-2 py-4">
                      <Slider 
                        defaultValue={[3]} 
                        max={6} 
                        step={1} 
                        className="[&>span]:bg-[#97ff00]"
                      />
                      <div className="flex justify-between mt-2 text-white text-xs">
                        <span>ЛЕГКИЙ</span>
                        <span>ЭКСТРИМ</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-bold mb-3">ДЛИТЕЛЬНОСТЬ</h4>
                    <div className="space-y-2">
                      {["1-3 дня", "4-7 дней", "8-14 дней", "Более 14 дней"].map((duration, index) => (
                        <div key={index} className="flex items-center">
                          <input 
                            type="checkbox" 
                            id={`duration-${index}`} 
                            className="w-4 h-4 mr-3 accent-[#97ff00]" 
                          />
                          <label htmlFor={`duration-${index}`} className="text-white cursor-pointer">{duration}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-bold mb-3">СТОИМОСТЬ</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <Input 
                        placeholder="От" 
                        className="bg-[#0a0a0a] border-[#97ff00]/30 text-white" 
                      />
                      <Input 
                        placeholder="До" 
                        className="bg-[#0a0a0a] border-[#97ff00]/30 text-white" 
                      />
                    </div>
                  </div>
                  
                  <Button className="w-full bg-[#2e3a0e] hover:bg-[#97ff00] text-[#97ff00] hover:text-black">
                    ПРИМЕНИТЬ
                  </Button>
                </div>
              </div>
              
              <div className="bg-[#0c0c0c] p-6 border border-[#97ff00]/30">
                <h3 className="text-[#97ff00] font-bold mb-2">НУЖНА ПОМОЩЬ?</h3>
                <p className="text-white text-sm mb-4">Не можете определиться с туром? Мы поможем вам выбрать оптимальный вариант</p>
                <Button variant="outline" className="w-full border-[#97ff00] text-[#97ff00] hover:bg-[#97ff00]/10">
                  <Icon name="MessageCircle" className="mr-2 h-4 w-4" />
                  СВЯЗАТЬСЯ С НАМИ
                </Button>
              </div>
            </div>
            
            {/* Список туров */}
            <div className="md:col-span-3">
              <Tabs defaultValue="all" className="w-full mb-6">
                <TabsList className="w-full flex mb-6 bg-[#0c0c0c] p-0 h-auto">
                  {tourTypes.map((type, index) => (
                    <TabsTrigger 
                      key={index} 
                      value={type.toLowerCase()} 
                      className="flex-1 py-3 text-white data-[state=active]:bg-[#2e3a0e] data-[state=active]:text-[#97ff00] hover:text-[#97ff00] rounded-none"
                    >
                      {type}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {tours.map((tour) => (
                    <Card key={tour.id} className="bg-black border border-[#97ff00]/30 overflow-hidden rounded-none hover:shadow-[0_0_15px_rgba(151,255,0,0.3)] transition-shadow duration-300 h-full">
                      <div className="h-60 relative overflow-hidden">
                        <img 
                          src={tour.imageSrc} 
                          alt={tour.title} 
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-[#0c0c0c] px-3 py-1 text-[#97ff00] font-bold">
                          {tour.price}
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <Link to={`/tour/${tour.id}`}>
                          <h3 className="text-white text-xl font-bold mb-1 hover:text-[#97ff00] transition-colors">{tour.title}</h3>
                        </Link>
                        <div className="flex justify-between mb-4">
                          <p className="text-[#97ff00]">{tour.location}</p>
                          <p className="text-white text-sm">{tour.duration}</p>
                        </div>
                        
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
              </Tabs>
            </div>
          </div>
        </div>
      </div>

      {/* Футер */}
      <footer className="bg-[#0a0a0a] text-white py-10 mt-auto">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-[#97ff00] text-xl font-bold mb-4">RAVAGE EXTRIME</h3>
              <p className="mb-4">Экстремальные туры для тех, кто хочет получить незабываемые впечатления и испытать свои возможности.</p>
            </div>
            <div>
              <h3 className="text-[#97ff00] text-xl font-bold mb-4">КОНТАКТЫ</h3>
              <p className="mb-2">Телефон: +7 (XXX) XXX-XX-XX</p>
              <p className="mb-2">Email: info@ravage-extrime.ru</p>
              <p>Адрес: г. Москва, ул. Экстремальная, д. 42</p>
            </div>
            <div>
              <h3 className="text-[#97ff00] text-xl font-bold mb-4">СОЦИАЛЬНЫЕ СЕТИ</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-[#2e3a0e] flex items-center justify-center hover:bg-[#97ff00] transition-colors">
                  <Icon name="Instagram" className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#2e3a0e] flex items-center justify-center hover:bg-[#97ff00] transition-colors">
                  <Icon name="Facebook" className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#2e3a0e] flex items-center justify-center hover:bg-[#97ff00] transition-colors">
                  <Icon name="Youtube" className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#2e3a0e] flex items-center justify-center hover:bg-[#97ff00] transition-colors">
                  <Icon name="Twitter" className="text-white" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-[#333333] mt-8 pt-8 text-center">
            <p>© 2025 RAVAGE EXTRIME. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Catalog;