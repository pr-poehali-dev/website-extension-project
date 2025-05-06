
import { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import Header from "@/components/layout/Header";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("tours");
  
  // Моковые данные пользователя
  const userData = {
    name: "АЛЕКСЕЙ ИВАНОВ",
    email: "alexey@example.com",
    phone: "+7 (905) 123-45-67",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop",
    extremeLevel: "ПРОФИ",
    bonusPoints: 1250,
    toursCompleted: 8
  };

  // Моковые данные бронирований
  const bookings = [
    {
      id: 1,
      tourName: "ГОРНЫЙ ТРЕКИНГ",
      location: "КАВКАЗ",
      date: "15 ИЮНЯ 2025",
      status: "ПОДТВЕРЖДЕНО",
      price: "45,000 ₽",
      image: "https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: 2,
      tourName: "ВУЛКАНИЧЕСКИЙ ТУР",
      location: "КАМЧАТКА",
      date: "28 ИЮЛЯ 2025",
      status: "ОЖИДАЕТСЯ",
      price: "75,000 ₽",
      image: "https://images.unsplash.com/photo-1543933441-b4f6c33fe8f7?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  // Моковые данные завершенных туров
  const completedTours = [
    {
      id: 101,
      tourName: "РАФТИНГ ЭКСТРИМ",
      location: "АЛТАЙ",
      date: "22 АВГУСТА 2024",
      rating: 5,
      image: "https://images.unsplash.com/photo-1594784254931-5bccd5b6bacf?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 102,
      tourName: "ПОДЛЕДНЫЙ ДАЙВИНГ",
      location: "КАРЕЛИЯ",
      date: "10 ФЕВРАЛЯ 2024",
      rating: 5,
      image: "https://images.unsplash.com/photo-1635236603966-b8c015bca6a8?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 103,
      tourName: "ПЕЩЕРНОЕ ПОГРУЖЕНИЕ",
      location: "УРАЛ",
      date: "15 МАЯ 2024",
      rating: 4,
      image: "https://images.unsplash.com/photo-1586169384627-9e35f7ffa08d?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  // Моковые данные любимых туров
  const favoriteTypes = [
    {
      type: "ГОРЫ",
      count: 5,
      icon: "Mountain"
    },
    {
      type: "ВОДА",
      count: 2,
      icon: "Droplets"
    },
    {
      type: "ПЕЩЕРЫ",
      count: 1,
      icon: "Landmark"
    }
  ];

  // Моковые достижения
  const achievements = [
    {
      name: "ПОКОРИТЕЛЬ ВЫСОТ",
      description: "Пройдено 3 высокогорных маршрута",
      icon: "Award",
      date: "23 АВГУСТА 2024"
    },
    {
      name: "ВОДНАЯ СТИХИЯ",
      description: "Участие в 2 водных экстрим-турах",
      icon: "Waves",
      date: "15 ИЮНЯ 2024"
    },
    {
      name: "ПЕРВОПРОХОДЕЦ",
      description: "Завершен первый экстремальный тур",
      icon: "Trophy",
      date: "10 ФЕВРАЛЯ 2024"
    }
  ];

  const renderStarRating = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Icon 
        key={index} 
        name="Star" 
        className={`h-4 w-4 ${index < rating ? 'text-[#97ff00]' : 'text-[#97ff00]/25'}`} 
        fill={index < rating ? '#97ff00' : 'none'} 
      />
    ));
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />

      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Боковая панель профиля */}
          <div className="md:col-span-1">
            <div className="bg-[#0c0c0c] border border-[#97ff00]/30 p-6 flex flex-col items-center">
              <Avatar className="w-32 h-32 border-4 border-[#97ff00]">
                <AvatarImage src={userData.avatar} alt={userData.name} />
                <AvatarFallback className="bg-[#2e3a0e] text-[#97ff00]">АИ</AvatarFallback>
              </Avatar>
              
              <h2 className="text-xl font-bold text-white mt-4 text-center">{userData.name}</h2>
              <Badge className="mt-2 bg-[#2e3a0e] text-[#97ff00] hover:bg-[#97ff00] hover:text-black">
                {userData.extremeLevel}
              </Badge>
              
              <div className="w-full mt-6">
                <div className="flex justify-between text-white mb-2">
                  <span>Email:</span>
                  <span className="text-[#97ff00]">{userData.email}</span>
                </div>
                <div className="flex justify-between text-white mb-2">
                  <span>Телефон:</span>
                  <span className="text-[#97ff00]">{userData.phone}</span>
                </div>
                <div className="flex justify-between text-white mb-2">
                  <span>Завершено туров:</span>
                  <span className="text-[#97ff00]">{userData.toursCompleted}</span>
                </div>
                <div className="flex justify-between text-white mb-4">
                  <span>Бонусы:</span>
                  <span className="text-[#97ff00]">{userData.bonusPoints} ⚡</span>
                </div>
                
                <div className="mt-6 space-y-3">
                  <Button variant="outline" className="w-full border-[#97ff00] text-[#97ff00] hover:bg-[#97ff00]/10">
                    <Icon name="Settings" className="mr-2 h-4 w-4" />
                    НАСТРОЙКИ ПРОФИЛЯ
                  </Button>
                  <Button variant="outline" className="w-full border-[#97ff00] text-[#97ff00] hover:bg-[#97ff00]/10">
                    <Icon name="LogOut" className="mr-2 h-4 w-4" />
                    ВЫЙТИ
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Блок с любимыми типами туров */}
            <div className="bg-[#0c0c0c] border border-[#97ff00]/30 p-6 mt-6">
              <h3 className="text-[#97ff00] font-bold mb-4">ЛЮБИМЫЕ НАПРАВЛЕНИЯ</h3>
              <div className="space-y-4">
                {favoriteTypes.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[#2e3a0e] flex items-center justify-center mr-3">
                        <Icon name={item.icon} className="h-5 w-5 text-[#97ff00]" />
                      </div>
                      <span className="text-white">{item.type}</span>
                    </div>
                    <Badge className="bg-[#2e3a0e] text-[#97ff00]">{item.count}</Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Основная панель с табами */}
          <div className="md:col-span-3">
            <Tabs defaultValue="tours" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="w-full bg-[#0c0c0c] p-0 h-auto">
                <TabsTrigger 
                  value="tours" 
                  className="flex-1 py-3 text-white data-[state=active]:bg-[#2e3a0e] data-[state=active]:text-[#97ff00] hover:text-[#97ff00] rounded-none"
                >
                  МОИ ТУРЫ
                </TabsTrigger>
                <TabsTrigger 
                  value="achievements" 
                  className="flex-1 py-3 text-white data-[state=active]:bg-[#2e3a0e] data-[state=active]:text-[#97ff00] hover:text-[#97ff00] rounded-none"
                >
                  ДОСТИЖЕНИЯ
                </TabsTrigger>
                <TabsTrigger 
                  value="bonuses" 
                  className="flex-1 py-3 text-white data-[state=active]:bg-[#2e3a0e] data-[state=active]:text-[#97ff00] hover:text-[#97ff00] rounded-none"
                >
                  БОНУСЫ
                </TabsTrigger>
              </TabsList>
              
              {/* Вкладка с турами */}
              <TabsContent value="tours" className="mt-6">
                <div className="bg-[#0c0c0c] border border-[#97ff00]/30 p-6 mb-8">
                  <h3 className="text-[#97ff00] font-bold text-xl mb-6">ПРЕДСТОЯЩИЕ ТУРЫ</h3>
                  
                  {bookings.length === 0 ? (
                    <div className="text-white text-center py-10">
                      <Icon name="Calendar" className="w-16 h-16 text-[#97ff00]/50 mx-auto mb-4" />
                      <p className="text-lg">У вас пока нет забронированных туров</p>
                      <Button asChild className="mt-4 bg-[#2e3a0e] hover:bg-[#97ff00] text-[#97ff00] hover:text-black">
                        <Link to="/catalog">ВЫБРАТЬ ТУР</Link>
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {bookings.map((booking) => (
                        <Card key={booking.id} className="bg-black border border-[#97ff00]/20 overflow-hidden">
                          <CardContent className="p-0">
                            <div className="flex flex-col md:flex-row">
                              <div className="md:w-1/4 h-32 md:h-auto relative">
                                <img 
                                  src={booking.image} 
                                  alt={booking.tourName} 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1 p-4">
                                <div className="flex justify-between">
                                  <Link to={`/tour/${booking.id}`} className="text-white text-xl font-bold hover:text-[#97ff00]">
                                    {booking.tourName}
                                  </Link>
                                  <Badge className={`
                                    ${booking.status === "ПОДТВЕРЖДЕНО" ? "bg-[#2e3a0e] text-[#97ff00]" : "bg-[#3a2e0e] text-[#ffbb00]"}
                                  `}>
                                    {booking.status}
                                  </Badge>
                                </div>
                                <p className="text-[#97ff00] mt-1">{booking.location}</p>
                                
                                <div className="flex justify-between mt-4 items-end">
                                  <div>
                                    <p className="text-white text-sm">ДАТА НАЧАЛА:</p>
                                    <p className="text-[#97ff00] font-bold">{booking.date}</p>
                                  </div>
                                  <div className="text-right">
                                    <p className="text-white text-sm">СТОИМОСТЬ:</p>
                                    <p className="text-[#97ff00] font-bold">{booking.price}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                      
                      <div className="flex justify-end mt-4">
                        <Button asChild variant="outline" className="mr-2 border-[#97ff00] text-[#97ff00] hover:bg-[#97ff00]/10">
                          <Link to="/catalog">ЗАБРОНИРОВАТЬ ЕЩЕ</Link>
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Завершенные туры */}
                <div className="bg-[#0c0c0c] border border-[#97ff00]/30 p-6">
                  <h3 className="text-[#97ff00] font-bold text-xl mb-6">ИСТОРИЯ ПУТЕШЕСТВИЙ</h3>
                  
                  {completedTours.length === 0 ? (
                    <div className="text-white text-center py-10">
                      <Icon name="History" className="w-16 h-16 text-[#97ff00]/50 mx-auto mb-4" />
                      <p className="text-lg">История путешествий пуста</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {completedTours.map((tour) => (
                        <Card key={tour.id} className="bg-black border border-[#97ff00]/20 overflow-hidden">
                          <CardContent className="p-0">
                            <div className="flex flex-col md:flex-row">
                              <div className="md:w-1/4 h-32 md:h-auto relative">
                                <img 
                                  src={tour.image} 
                                  alt={tour.tourName} 
                                  className="w-full h-full object-cover"
                                />
                                <div className="absolute top-0 right-0 bg-black/70 px-2 py-1">
                                  <p className="text-[#97ff00] text-sm">{tour.date}</p>
                                </div>
                              </div>
                              <div className="flex-1 p-4">
                                <Link to={`/tour/${tour.id}`} className="text-white text-xl font-bold hover:text-[#97ff00]">
                                  {tour.tourName}
                                </Link>
                                <p className="text-[#97ff00] mt-1">{tour.location}</p>
                                
                                <div className="flex justify-between mt-4 items-end">
                                  <div className="flex items-center">
                                    <p className="text-white mr-2">Ваша оценка:</p>
                                    <div className="flex">
                                      {renderStarRating(tour.rating)}
                                    </div>
                                  </div>
                                  <Button 
                                    variant="ghost"
                                    className="text-[#97ff00] hover:text-white hover:bg-[#2e3a0e]"
                                  >
                                    НАПИСАТЬ ОТЗЫВ
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </div>
              </TabsContent>
              
              {/* Вкладка с достижениями */}
              <TabsContent value="achievements" className="mt-6">
                <div className="bg-[#0c0c0c] border border-[#97ff00]/30 p-6">
                  <h3 className="text-[#97ff00] font-bold text-xl mb-6">МОИ ДОСТИЖЕНИЯ</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {achievements.map((achievement, index) => (
                      <Card key={index} className="bg-black border border-[#97ff00]/20">
                        <CardContent className="p-4">
                          <div className="flex items-start">
                            <div className="w-12 h-12 rounded-full bg-[#2e3a0e] flex items-center justify-center mr-4 flex-shrink-0">
                              <Icon name={achievement.icon} className="h-6 w-6 text-[#97ff00]" />
                            </div>
                            <div>
                              <h4 className="font-bold text-lg text-[#97ff00]">{achievement.name}</h4>
                              <p className="text-white text-sm mb-2">{achievement.description}</p>
                              <p className="text-[#97ff00]/70 text-xs">Получено: {achievement.date}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-[#97ff00] font-bold text-xl mb-6">БЛИЖАЙШИЕ ЦЕЛИ</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="bg-black border border-[#97ff00]/20">
                        <CardContent className="p-4">
                          <div className="flex items-start">
                            <div className="w-12 h-12 rounded-full bg-[#0c0c0c] flex items-center justify-center mr-4 flex-shrink-0 border border-[#97ff00]/30">
                              <Icon name="Flame" className="h-6 w-6 text-[#97ff00]/50" />
                            </div>
                            <div>
                              <h4 className="font-bold text-lg text-white">ПОКОРИТЕЛЬ ВУЛКАНОВ</h4>
                              <p className="text-white text-sm mb-2">Пройти тур с посещением действующего вулкана</p>
                              <div className="w-full bg-[#0c0c0c] h-2 mt-2">
                                <div className="bg-[#97ff00] h-2" style={{ width: "50%" }}></div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-black border border-[#97ff00]/20">
                        <CardContent className="p-4">
                          <div className="flex items-start">
                            <div className="w-12 h-12 rounded-full bg-[#0c0c0c] flex items-center justify-center mr-4 flex-shrink-0 border border-[#97ff00]/30">
                              <Icon name="Mountain" className="h-6 w-6 text-[#97ff00]/50" />
                            </div>
                            <div>
                              <h4 className="font-bold text-lg text-white">ВЫСОКОГОРЬЕ</h4>
                              <p className="text-white text-sm mb-2">Достичь высоты 4000 метров над уровнем моря</p>
                              <div className="w-full bg-[#0c0c0c] h-2 mt-2">
                                <div className="bg-[#97ff00] h-2" style={{ width: "25%" }}></div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Вкладка с бонусами */}
              <TabsContent value="bonuses" className="mt-6">
                <div className="bg-[#0c0c0c] border border-[#97ff00]/30 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-[#97ff00] font-bold text-xl">МОИ БОНУСЫ</h3>
                    <div className="bg-[#2e3a0e] px-4 py-2 rounded-md">
                      <span className="text-[#97ff00] font-bold text-xl">{userData.bonusPoints} ⚡</span>
                    </div>
                  </div>
                  
                  <div className="bg-black p-6 border border-[#97ff00]/20 mb-8">
                    <h4 className="text-white font-bold mb-4">КАК ПОЛУЧИТЬ БОНУСЫ</h4>
                    <ul className="space-y-3 text-white">
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-[#97ff00] mr-2 mt-1 flex-shrink-0" />
                        <span>За каждый завершенный тур — 5% от стоимости</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-[#97ff00] mr-2 mt-1 flex-shrink-0" />
                        <span>За отзыв с фотографиями — 500 бонусов</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-[#97ff00] mr-2 mt-1 flex-shrink-0" />
                        <span>За приглашенного друга — 1000 бонусов</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-[#97ff00] mr-2 mt-1 flex-shrink-0" />
                        <span>За прохождение сложных туров (5-6 экстрима) — дополнительные 1000 бонусов</span>
                      </li>
                    </ul>
                  </div>
                  
                  <h4 className="text-[#97ff00] font-bold text-xl mb-6">ДОСТУПНЫЕ НАГРАДЫ</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="bg-black border border-[#97ff00]/20">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-4">
                          <h5 className="font-bold text-white text-lg">СКИДКА 10%</h5>
                          <Badge className="bg-[#2e3a0e] text-[#97ff00]">5000 ⚡</Badge>
                        </div>
                        <p className="text-white text-sm mb-6">Скидка 10% на любой тур из каталога</p>
                        <Button className="w-full bg-[#2e3a0e] hover:bg-[#97ff00] text-[#97ff00] hover:text-black" disabled={userData.bonusPoints < 5000}>
                          ПОЛУЧИТЬ
                        </Button>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-black border border-[#97ff00]/20">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-4">
                          <h5 className="font-bold text-white text-lg">VIP-ЭКИПИРОВКА</h5>
                          <Badge className="bg-[#2e3a0e] text-[#97ff00]">3000 ⚡</Badge>
                        </div>
                        <p className="text-white text-sm mb-6">VIP-комплект снаряжения для следующего тура</p>
                        <Button className="w-full bg-[#2e3a0e] hover:bg-[#97ff00] text-[#97ff00] hover:text-black" disabled={userData.bonusPoints < 3000}>
                          ПОЛУЧИТЬ
                        </Button>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-black border border-[#97ff00]/20">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-4">
                          <h5 className="font-bold text-white text-lg">БЕСПЛАТНЫЙ ТРАНСФЕР</h5>
                          <Badge className="bg-[#2e3a0e] text-[#97ff00]">2000 ⚡</Badge>
                        </div>
                        <p className="text-white text-sm mb-6">Индивидуальный трансфер к месту сбора и обратно</p>
                        <Button className="w-full bg-[#2e3a0e] hover:bg-[#97ff00] text-[#97ff00] hover:text-black">
                          ПОЛУЧИТЬ
                        </Button>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-black border border-[#97ff00]/20">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-4">
                          <h5 className="font-bold text-white text-lg">ФИРМЕННАЯ ЭКИПИРОВКА</h5>
                          <Badge className="bg-[#2e3a0e] text-[#97ff00]">1500 ⚡</Badge>
                        </div>
                        <p className="text-white text-sm mb-6">Фирменная футболка, кепка и термос с логотипом</p>
                        <Button className="w-full bg-[#2e3a0e] hover:bg-[#97ff00] text-[#97ff00] hover:text-black">
                          ПОЛУЧИТЬ
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
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

export default UserProfile;
