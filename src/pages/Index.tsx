
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import Header from "@/components/layout/Header";

const Index = () => {
  const popularTours = [
    {
      id: 1,
      title: "НАЗВАНИЕ ТУРА",
      location: "ЛОКАЦИЯ",
      extremeRating: 4,
      maxRating: 6,
      imageSrc: "https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "НАЗВАНИЕ ТУРА",
      location: "ЛОКАЦИЯ",
      extremeRating: 5,
      maxRating: 6,
      imageSrc: "https://images.unsplash.com/photo-1543933441-b4f6c33fe8f7?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "НАЗВАНИЕ ТУРА",
      location: "ЛОКАЦИЯ",
      extremeRating: 3,
      maxRating: 6,
      imageSrc: "https://images.unsplash.com/photo-1564731071754-001b9f5a85b6?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const advantages = [
    {
      icon: "Shield",
      title: "БЕЗОПАСНОСТЬ",
      description: "Инструктаж и лучшее снаряжение для каждого экстремального тура"
    },
    {
      icon: "Trophy",
      title: "ОПЫТНЫЕ ГИДЫ",
      description: "Команда профессионалов с многолетним опытом в экстремальном туризме"
    },
    {
      icon: "Map",
      title: "УНИКАЛЬНЫЕ МАРШРУТЫ",
      description: "Эксклюзивные локации вдали от толп туристов"
    },
    {
      icon: "Heart",
      title: "НЕЗАБЫВАЕМЫЕ ЭМОЦИИ",
      description: "Адреналин и впечатления, которые останутся на всю жизнь"
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1589182337358-2848b51c9284?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524259292027-1a3e137e4d1d?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1597347025162-9a3efd4bef99?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1502101872923-d48509bff386?q=80&w=2032&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582920980795-2f97b0834c58?q=80&w=1935&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=2070&auto=format&fit=crop"
  ];

  const testimonials = [
    {
      name: "АЛЕКСЕЙ К.",
      tour: "ГОРНЫЙ ТРЕКИНГ",
      text: "Просто невероятно! Никогда не думал, что можно испытать столько адреналина за один поход. Организация на высшем уровне.",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "ИРИНА С.",
      tour: "ЛЕДЯНОЙ МАРШРУТ",
      text: "Потрясающий опыт! Команда гидов очень профессиональная, снаряжение отличное. Обязательно вернусь за новыми турами.",
      avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1972&auto=format&fit=crop"
    },
    {
      name: "ДМИТРИЙ П.",
      tour: "ВУЛКАНИЧЕСКИЙ ТУР",
      text: "Безумно круто! Когда стоишь на краю кратера действующего вулкана - это непередаваемые ощущения. Спасибо RAVAGE EXTRIME!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const upcomingTours = [
    {
      id: 1,
      title: "ГОРНЫЙ ШТУРМ",
      location: "АЛТАЙ",
      date: "15 ИЮНЯ 2025",
      spots: 7,
      extremeRating: 5,
      maxRating: 6
    },
    {
      id: 2,
      title: "РАФТИНГ ЭКСТРИМ",
      location: "КАРЕЛИЯ",
      date: "28 ИЮНЯ 2025",
      spots: 4,
      extremeRating: 4,
      maxRating: 6
    },
    {
      id: 3,
      title: "ЛЕДЯНОЙ МАРШРУТ",
      location: "БАЙКАЛ",
      date: "10 ИЮЛЯ 2025",
      spots: 10,
      extremeRating: 3,
      maxRating: 6
    },
    {
      id: 4,
      title: "ПЕЩЕРНЫЙ ЭКСТРИМ",
      location: "УРАЛ",
      date: "22 ИЮЛЯ 2025",
      spots: 5,
      extremeRating: 5,
      maxRating: 6
    }
  ];

  const faqs = [
    {
      question: "КАКАЯ ФИЗИЧЕСКАЯ ПОДГОТОВКА ТРЕБУЕТСЯ?",
      answer: "Требования к физической подготовке варьируются в зависимости от тура. Для каждого маршрута в описании указан уровень необходимой подготовки. Для большинства туров достаточно средней физической формы и отсутствия противопоказаний по здоровью."
    },
    {
      question: "КАКОЕ СНАРЯЖЕНИЕ НУЖНО БРАТЬ С СОБОЙ?",
      answer: "Все специализированное снаряжение предоставляется нашей компанией и входит в стоимость тура. Вам необходимо иметь только личные вещи и экипировку согласно списку, который мы высылаем перед поездкой."
    },
    {
      question: "МОЖНО ЛИ ПРИСОЕДИНИТЬСЯ К ТУРУ БЕЗ ОПЫТА?",
      answer: "Да, большинство наших туров доступны для новичков. Перед каждым туром проводится подробный инструктаж, а наши гиды всегда готовы помочь и поддержать. Туры с высоким рейтингом экстремальности могут требовать предварительного опыта."
    },
    {
      question: "ЧТО ВХОДИТ В СТОИМОСТЬ ТУРА?",
      answer: "В стоимость входит: трансфер от места сбора до локации и обратно, проживание, питание, услуги гидов, аренда специального снаряжения, страховка. Точный перечень включенных услуг указан в описании каждого тура."
    },
    {
      question: "КАК ЗАБРОНИРОВАТЬ ТУР?",
      answer: "Для бронирования необходимо выбрать тур в каталоге, заполнить форму бронирования и внести предоплату. После подтверждения бронирования вам будет выслана подробная информация о туре, списке необходимых вещей и месте сбора."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Навигационная панель */}
      <Header />

      {/* Главный баннер */}
      <div 
        className="bg-cover bg-center py-20" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop)`,
          minHeight: "500px"
        }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#97ff00] mb-6">
            ГОТОВЫ К ЭКСТРИМУ?
          </h1>
          <p className="text-white text-xl md:text-2xl mb-8">
            (ТОГДА ВАС ЗАИНТЕРЕСУЕТ)
          </p>
          <Button 
            asChild
            className="bg-[#97ff00] hover:bg-[#7acc00] text-black text-xl px-10 py-6"
          >
            <Link to="/catalog">КАТАЛОГ</Link>
          </Button>
        </div>
      </div>

      {/* Секция преимуществ */}
      <div className="bg-[#1a1a1a] py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#97ff00] mb-4">ПОЧЕМУ ВЫБИРАЮТ НАС</h2>
            <div className="h-1 w-24 bg-[#97ff00] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((item, index) => (
              <div key={index} className="bg-black p-6 border border-[#97ff00]/30 hover:border-[#97ff00] transition-colors duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#2e3a0e] flex items-center justify-center">
                    <Icon name={item.icon} className="w-8 h-8 text-[#97ff00]" />
                  </div>
                </div>
                <h3 className="text-[#97ff00] text-xl font-bold text-center mb-3">{item.title}</h3>
                <p className="text-white text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Секция популярных туров */}
      <div className="bg-black py-16">
        <div className="container mx-auto">
          <div className="flex items-center mb-8">
            <h2 className="text-[#97ff00] text-3xl font-bold">ПОПУЛЯРНОЕ</h2>
            <div className="ml-4 flex-1 h-0.5 bg-gradient-to-r from-[#97ff00]/50 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularTours.map((tour) => (
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
          
          <div className="text-center mt-10">
            <Button 
              asChild
              className="bg-transparent border-2 border-[#97ff00] text-[#97ff00] hover:bg-[#97ff00]/10 px-8 py-5"
            >
              <Link to="/catalog">ВСЕ ТУРЫ</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Галерея впечатлений */}
      <div className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#97ff00] mb-4">ГАЛЕРЕЯ ВПЕЧАТЛЕНИЙ</h2>
            <p className="text-white text-lg">Моменты, которые останутся с вами навсегда</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {galleryImages.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden">
                <img 
                  src={image} 
                  alt={`Экстремальный туризм ${index + 1}`} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Отзывы клиентов */}
      <div className="py-16 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#97ff00] mb-4">ЧТО ГОВОРЯТ НАШИ КЛИЕНТЫ</h2>
            <div className="h-1 w-24 bg-[#97ff00] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#121212] p-6 border border-[#97ff00]/20 relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#97ff00]">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="mt-8">
                  <p className="text-white italic mb-4">"{testimonial.text}"</p>
                  <div className="text-[#97ff00] font-bold">{testimonial.name}</div>
                  <div className="text-white text-sm">{testimonial.tour}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Предстоящие туры */}
      <div className="py-16 bg-[#1a1a1a]">
        <div className="container mx-auto">
          <div className="flex items-center mb-10">
            <h2 className="text-[#97ff00] text-3xl font-bold">БЛИЖАЙШИЕ ТУРЫ</h2>
            <div className="ml-4 flex-1 h-0.5 bg-gradient-to-r from-[#97ff00]/50 to-transparent"></div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#97ff00]/30">
                  <th className="text-left p-4 text-white">НАЗВАНИЕ</th>
                  <th className="text-left p-4 text-white">ЛОКАЦИЯ</th>
                  <th className="text-left p-4 text-white">ДАТА</th>
                  <th className="text-left p-4 text-white">МЕСТ</th>
                  <th className="text-left p-4 text-white">ЭКСТРЕМАЛЬНОСТЬ</th>
                  <th className="text-center p-4 text-white"></th>
                </tr>
              </thead>
              <tbody>
                {upcomingTours.map((tour) => (
                  <tr key={tour.id} className="border-b border-[#333333] hover:bg-black/50 transition-colors">
                    <td className="p-4 text-[#97ff00] font-bold">{tour.title}</td>
                    <td className="p-4 text-white">{tour.location}</td>
                    <td className="p-4 text-white">{tour.date}</td>
                    <td className="p-4 text-white">{tour.spots}</td>
                    <td className="p-4">
                      <div className="flex items-center">
                        {Array.from({ length: tour.maxRating }).map((_, index) => (
                          <div 
                            key={index} 
                            className={`h-2 w-6 mr-1 ${index < tour.extremeRating ? 'bg-[#97ff00]' : 'bg-[#97ff00]/25'}`}
                          ></div>
                        ))}
                        <span className="ml-2 text-[#97ff00] text-sm">
                          {tour.extremeRating}/{tour.maxRating}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <Button className="bg-[#2e3a0e] hover:bg-[#97ff00] text-[#97ff00] hover:text-black text-sm">
                        ЗАБРОНИРОВАТЬ
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Часто задаваемые вопросы */}
      <div className="py-16 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#97ff00] mb-4">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>
            <div className="h-1 w-24 bg-[#97ff00] mx-auto"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="border-[#97ff00]/30 border rounded-none">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-[#97ff00]/30">
                  <AccordionTrigger className="text-white hover:text-[#97ff00] px-4 py-4 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white px-4 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>

      {/* Призыв к действию */}
      <div 
        className="py-16 bg-cover bg-center" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=2074&auto=format&fit=crop)`
        }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#97ff00] mb-4">ГОТОВЫ ИСПЫТАТЬ АДРЕНАЛИН?</h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Выбирайте тур прямо сейчас и отправляйтесь в незабываемое приключение с командой RAVAGE EXTRIME
          </p>
          <Button 
            asChild
            className="bg-[#97ff00] hover:bg-[#7acc00] text-black text-xl px-10 py-6"
          >
            <Link to="/catalog">ВЫБРАТЬ ТУР</Link>
          </Button>
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

export default Index;
