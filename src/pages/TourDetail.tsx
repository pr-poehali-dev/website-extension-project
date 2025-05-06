
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import Header from "@/components/layout/Header";

const TourDetail = () => {
  const { id } = useParams();
  
  // Это демонстрационные данные. В реальном приложении информация о туре загружалась бы из API
  const tourData = {
    id: parseInt(id || "1"),
    title: "ГОРНЫЙ ТРЕКИНГ",
    location: "КАВКАЗ",
    extremeRating: 4,
    maxRating: 6,
    price: "45,000 ₽",
    duration: "7 дней",
    groupSize: "8-12 человек",
    nextDate: "15 ИЮНЯ 2025",
    spotsLeft: 7,
    description: "Экстремальный трекинг в горах Кавказа — это вызов для тех, кто готов испытать свои возможности и насладиться величественными пейзажами. Маршрут проходит по труднодоступным горным тропам, через перевалы и вдоль горных рек.",
    highlights: [
      "Подъем на высоту 3500 метров над уровнем моря",
      "Переправа через горную реку",
      "Ночевка в диких условиях с минимальным комфортом",
      "Преодоление сложных скальных участков",
      "Панорамные виды на горные хребты"
    ],
    included: [
      "Профессиональный гид-инструктор",
      "Все необходимое снаряжение (кроме личных вещей)",
      "Питание на маршруте",
      "Групповая аптечка",
      "Трансфер от точки сбора до начала маршрута и обратно",
      "Спутниковая связь на маршруте"
    ],
    dayByDay: [
      {
        day: 1,
        title: "ПРИБЫТИЕ И АККЛИМАТИЗАЦИЯ",
        description: "Встреча группы в базовом лагере. Проверка снаряжения, инструктаж по технике безопасности. Небольшой акклиматизационный выход на высоту 1500 м."
      },
      {
        day: 2,
        title: "ПЕРВЫЙ ПОДЪЕМ",
        description: "Ранний выход. Трекинг вдоль горных рек к первому базовому лагерю на высоте 2000 м. Преодоление первых преград."
      },
      {
        day: 3,
        title: "ВОСХОЖДЕНИЕ",
        description: "Подъем на перевал (2500 м). Сложный скальный участок с элементами альпинизма. Ночевка в палатках на плато."
      },
      {
        day: 4,
        title: "ВЫСОКОГОРНОЕ ОЗЕРО",
        description: "Трекинг к высокогорному озеру. Преодоление каменистых осыпей. Панорамные виды на горные хребты."
      },
      {
        day: 5,
        title: "ПИКОВАЯ ТОЧКА",
        description: "Восхождение на пиковую точку маршрута (3500 м). Технически сложный участок. Невероятные виды и ощущение победы."
      },
      {
        day: 6,
        title: "НАЧАЛО СПУСКА",
        description: "Спуск по альтернативному маршруту. Переправа через горную реку. Ночевка в живописном месте."
      },
      {
        day: 7,
        title: "ВОЗВРАЩЕНИЕ",
        description: "Финальный день трека. Спуск к точке эвакуации. Трансфер в базовый лагерь. Прощальный ужин."
      }
    ],
    requirements: [
      "Хорошая физическая форма, способность ходить с рюкзаком 10-15 кг по 6-8 часов в день",
      "Отсутствие хронических заболеваний сердечно-сосудистой и дыхательной систем",
      "Опыт в пеших походах начального уровня сложности",
      "Возраст от 18 до 60 лет",
      "Готовность к различным погодным условиям и минимальному комфорту"
    ],
    reviews: [
      {
        name: "АЛЕКСАНДР К.",
        rating: 5,
        text: "Великолепный маршрут! Получил массу впечатлений и адреналина. Гид был очень профессиональным и внимательным ко всем деталям. Рекомендую!"
      },
      {
        name: "ЕЛЕНА М.",
        rating: 4,
        text: "Отличный тур для тех, кто хочет испытать себя. Маршрут действительно непростой, но виды и эмоции стоят каждой капли пота. Снимаю одну звезду только за то, что в описании не указали, насколько холодно может быть ночью."
      },
      {
        name: "ДМИТРИЙ В.",
        rating: 5,
        text: "Лучший трекинг в моей жизни! Теперь планирую пройти все маршруты с RAVAGE EXTRIME. Организация на высоте, безопасность продумана до мелочей."
      }
    ],
    imageSrc: "https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?q=80&w=2069&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=2076&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1455156218388-5e61b526818b?q=80&w=2070&auto=format&fit=crop"
    ]
  };

  const renderStarRating = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Icon 
        key={index} 
        name="Star" 
        className={`h-5 w-5 ${index < rating ? 'text-[#97ff00]' : 'text-[#97ff00]/25'}`} 
        fill={index < rating ? '#97ff00' : 'none'} 
      />
    ));
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />

      {/* Хлебные крошки */}
      <div className="bg-[#0c0c0c] py-2">
        <div className="container mx-auto">
          <div className="flex text-sm text-[#97ff00]/70">
            <Link to="/" className="hover:text-[#97ff00]">ГЛАВНАЯ</Link>
            <span className="mx-2">/</span>
            <Link to="/catalog" className="hover:text-[#97ff00]">КАТАЛОГ</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{tourData.title}</span>
          </div>
        </div>
      </div>

      {/* Основная информация */}
      <div className="bg-black py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Левая колонка - главное изображение и галерея */}
            <div className="md:col-span-2 space-y-4">
              <div className="aspect-video overflow-hidden border border-[#97ff00]/30">
                <img src={tourData.imageSrc} alt={tourData.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="grid grid-cols-4 gap-2">
                {tourData.galleryImages.map((image, index) => (
                  <div key={index} className="aspect-square overflow-hidden border border-[#97ff00]/30">
                    <img src={image} alt={`${tourData.title} ${index + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                  </div>
                ))}
              </div>
            </div>

            {/* Правая колонка - основная информация и бронирование */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-[#97ff00] mb-2">{tourData.title}</h1>
                <p className="text-white text-xl mb-4">{tourData.location}</p>
                
                <div className="flex items-center mb-4">
                  <div className="text-white text-sm mr-4">ЭКСТРЕМАЛЬНОСТЬ</div>
                  <div className="flex items-center">
                    {Array.from({ length: tourData.maxRating }).map((_, index) => (
                      <div 
                        key={index} 
                        className={`h-3 w-8 mr-1 ${index < tourData.extremeRating ? 'bg-[#97ff00]' : 'bg-[#97ff00]/25'}`}
                      ></div>
                    ))}
                    <span className="ml-2 text-[#97ff00]">
                      {tourData.extremeRating}/{tourData.maxRating}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[#0c0c0c] p-6 border border-[#97ff00]/30">
                <div className="text-2xl font-bold text-[#97ff00] mb-4">{tourData.price}</div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-white text-sm mb-1">ДЛИТЕЛЬНОСТЬ</div>
                    <div className="text-[#97ff00]">{tourData.duration}</div>
                  </div>
                  <div>
                    <div className="text-white text-sm mb-1">ГРУППА</div>
                    <div className="text-[#97ff00]">{tourData.groupSize}</div>
                  </div>
                  <div>
                    <div className="text-white text-sm mb-1">БЛИЖАЙШАЯ ДАТА</div>
                    <div className="text-[#97ff00]">{tourData.nextDate}</div>
                  </div>
                  <div>
                    <div className="text-white text-sm mb-1">СВОБОДНЫХ МЕСТ</div>
                    <div className="text-[#97ff00]">{tourData.spotsLeft}</div>
                  </div>
                </div>
                
                <Button className="w-full bg-[#97ff00] hover:bg-[#7acc00] text-black text-lg py-6">
                  ЗАБРОНИРОВАТЬ
                </Button>
              </div>

              <div className="p-4 border border-[#97ff00]/30 bg-[#0c0c0c]">
                <h3 className="text-white font-bold mb-2">НУЖНА ПОМОЩЬ?</h3>
                <p className="text-white text-sm mb-4">Если у вас есть вопросы о туре, свяжитесь с нами:</p>
                <div className="flex items-center text-[#97ff00]">
                  <Icon name="Phone" className="mr-2" />
                  +7 (XXX) XXX-XX-XX
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Подробная информация о туре (табы) */}
      <div className="bg-[#0c0c0c] py-12">
        <div className="container mx-auto">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full flex mb-8 bg-transparent">
              <TabsTrigger value="description" className="flex-1 text-white data-[state=active]:bg-[#2e3a0e] data-[state=active]:text-[#97ff00] hover:text-[#97ff00]">
                ОПИСАНИЕ
              </TabsTrigger>
              <TabsTrigger value="program" className="flex-1 text-white data-[state=active]:bg-[#2e3a0e] data-[state=active]:text-[#97ff00] hover:text-[#97ff00]">
                ПРОГРАММА
              </TabsTrigger>
              <TabsTrigger value="requirements" className="flex-1 text-white data-[state=active]:bg-[#2e3a0e] data-[state=active]:text-[#97ff00] hover:text-[#97ff00]">
                ТРЕБОВАНИЯ
              </TabsTrigger>
              <TabsTrigger value="reviews" className="flex-1 text-white data-[state=active]:bg-[#2e3a0e] data-[state=active]:text-[#97ff00] hover:text-[#97ff00]">
                ОТЗЫВЫ
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-[#97ff00] text-xl font-bold mb-4">О ТУРЕ</h3>
                  <p className="mb-6">{tourData.description}</p>
                  
                  <h3 className="text-[#97ff00] text-xl font-bold mb-4">КЛЮЧЕВЫЕ МОМЕНТЫ</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {tourData.highlights.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-[#97ff00] text-xl font-bold mb-4">ЧТО ВКЛЮЧЕНО</h3>
                  <ul className="space-y-3">
                    {tourData.included.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Icon name="Check" className="text-[#97ff00] mr-2 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="program">
              <div className="space-y-6">
                <h3 className="text-[#97ff00] text-xl font-bold mb-4">ПРОГРАММА ПО ДНЯМ</h3>
                
                <Accordion type="single" collapsible className="w-full">
                  {tourData.dayByDay.map((day, index) => (
                    <AccordionItem key={index} value={`day-${index + 1}`} className="border-b border-[#97ff00]/20">
                      <AccordionTrigger className="text-white hover:text-[#97ff00]">
                        <span className="flex items-center">
                          <span className="bg-[#2e3a0e] text-[#97ff00] w-8 h-8 rounded-full flex items-center justify-center mr-4">
                            {day.day}
                          </span>
                          {day.title}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-white">
                        {day.description}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>
            
            <TabsContent value="requirements">
              <div className="bg-black p-6 border border-[#97ff00]/30">
                <h3 className="text-[#97ff00] text-xl font-bold mb-6">ТРЕБОВАНИЯ К УЧАСТНИКАМ</h3>
                
                <ul className="space-y-4">
                  {tourData.requirements.map((item, index) => (
                    <li key={index} className="flex items-start text-white">
                      <Icon name="AlertCircle" className="text-[#97ff00] mr-3 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews">
              <div className="space-y-8">
                <h3 className="text-[#97ff00] text-xl font-bold mb-4">ОТЗЫВЫ УЧАСТНИКОВ</h3>
                
                {tourData.reviews.map((review, index) => (
                  <div key={index} className="bg-black p-6 border border-[#97ff00]/20">
                    <div className="flex justify-between items-center mb-4">
                      <div className="font-bold text-white">{review.name}</div>
                      <div className="flex">
                        {renderStarRating(review.rating)}
                      </div>
                    </div>
                    <p className="text-white">{review.text}</p>
                  </div>
                ))}
                
                <div className="flex justify-center mt-8">
                  <Button 
                    variant="outline" 
                    className="border-[#97ff00] text-[#97ff00] hover:bg-[#97ff00]/10"
                  >
                    ОСТАВИТЬ ОТЗЫВ
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Похожие туры */}
      <div className="bg-black py-12">
        <div className="container mx-auto">
          <div className="flex items-center mb-8">
            <h2 className="text-[#97ff00] text-2xl font-bold">ПОХОЖИЕ ТУРЫ</h2>
            <div className="ml-4 flex-1 h-0.5 bg-gradient-to-r from-[#97ff00]/50 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((id) => (
              <div key={id} className="bg-[#0c0c0c] border border-[#97ff00]/30 overflow-hidden group">
                <div className="h-40 relative overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-${1500000000000 + id * 1000000}?q=80&w=2069&auto=format&fit=crop`} 
                    alt={`Похожий тур ${id}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-white font-bold mb-1">{["ЛЕДЯНОЙ СПУСК", "ВУЛКАНИЧЕСКИЙ ТУР", "ПЕЩЕРНОЕ ПОГРУЖЕНИЕ"][id - 1]}</h3>
                  <p className="text-[#97ff00] mb-4">{["БАЙКАЛ", "КАМЧАТКА", "КРЫМ"][id - 1]}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      {Array.from({ length: 6 }).map((_, index) => (
                        <div 
                          key={index} 
                          className={`h-2 w-5 mr-0.5 ${index < [3, 5, 4][id - 1] ? 'bg-[#97ff00]' : 'bg-[#97ff00]/25'}`}
                        ></div>
                      ))}
                    </div>
                    <Link to={`/tour/${id}`} className="text-[#97ff00] text-sm hover:underline">ПОДРОБНЕЕ</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Футер */}
      <footer className="bg-[#0a0a0a] text-white py-10">
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

export default TourDetail;
