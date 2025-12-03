import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('feed');

  const profiles = [
    {
      id: 1,
      name: 'Алекс Мелодия',
      role: 'Продюсер',
      avatar: '/placeholder.svg',
      skills: ['FL Studio', 'Mastering', 'Mixing'],
      rating: 4.9,
    },
    {
      id: 2,
      name: 'Мария Вокал',
      role: 'Вокалистка',
      avatar: '/placeholder.svg',
      skills: ['Джаз', 'Соул', 'R&B'],
      rating: 5.0,
    },
    {
      id: 3,
      name: 'Денис Бит',
      role: 'Битмейкер',
      avatar: '/placeholder.svg',
      skills: ['Trap', 'Hip-Hop', 'Lo-Fi'],
      rating: 4.8,
    },
  ];

  const jobs = [
    {
      id: 1,
      title: 'Ищем звукорежиссёра',
      company: 'Sound Wave Studio',
      location: 'Москва',
      type: 'Полная занятость',
      salary: '80 000 - 120 000 ₽',
    },
    {
      id: 2,
      title: 'Гитарист в группу',
      company: 'Rock Legends',
      location: 'Санкт-Петербург',
      type: 'Проектная работа',
      salary: 'По договорённости',
    },
    {
      id: 3,
      title: 'Композитор для игр',
      company: 'GameDev Pro',
      location: 'Удалённо',
      type: 'Фриланс',
      salary: '50 000 - 100 000 ₽',
    },
  ];

  const events = [
    {
      id: 1,
      title: 'Московский Jazz Festival',
      date: '15 декабря 2024',
      location: 'Москва, Крокус Сити Холл',
      image: '/placeholder.svg',
    },
    {
      id: 2,
      title: 'Electronic Music Conference',
      date: '22 декабря 2024',
      location: 'Санкт-Петербург, A2',
      image: '/placeholder.svg',
    },
    {
      id: 3,
      title: 'Networking для музыкантов',
      date: '28 декабря 2024',
      location: 'Казань, Music Hub',
      image: '/placeholder.svg',
    },
  ];

  const services = [
    {
      id: 1,
      title: 'Сведение трека',
      provider: 'Алекс Мелодия',
      price: '5 000 ₽',
      rating: 4.9,
    },
    {
      id: 2,
      title: 'Запись вокала',
      provider: 'Мария Вокал',
      price: '3 000 ₽',
      rating: 5.0,
    },
    {
      id: 3,
      title: 'Создание бита',
      provider: 'Денис Бит',
      price: '4 000 ₽',
      rating: 4.8,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10">
      <nav className="sticky top-0 z-50 glass-effect border-b border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-glow">
                <Icon name="Music" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold glow-text">aka</h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <Button
                variant="ghost"
                className="hover:text-primary transition-colors"
                onClick={() => setActiveSection('feed')}
              >
                <Icon name="Home" size={20} className="mr-2" />
                Лента
              </Button>
              <Button
                variant="ghost"
                className="hover:text-primary transition-colors"
                onClick={() => setActiveSection('profiles')}
              >
                <Icon name="Users" size={20} className="mr-2" />
                Профили
              </Button>
              <Button
                variant="ghost"
                className="hover:text-primary transition-colors"
                onClick={() => setActiveSection('jobs')}
              >
                <Icon name="Briefcase" size={20} className="mr-2" />
                Вакансии
              </Button>
              <Button
                variant="ghost"
                className="hover:text-primary transition-colors"
                onClick={() => setActiveSection('events')}
              >
                <Icon name="Calendar" size={20} className="mr-2" />
                События
              </Button>
              <Button
                variant="ghost"
                className="hover:text-primary transition-colors"
                onClick={() => setActiveSection('services')}
              >
                <Icon name="ShoppingBag" size={20} className="mr-2" />
                Услуги
              </Button>
              <Button
                variant="ghost"
                className="hover:text-primary transition-colors"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Мессенджер
              </Button>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
                <Icon name="User" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center animate-fade-in">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Твоя карьера в музыке начинается здесь
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Находи партнёров, заказчиков и работу. Демонстрируй своё портфолио и развивайся в музыкальной индустрии
          </p>
        </div>

        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Icon name="Search" size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Поиск музыкантов, вакансий, событий..."
              className="pl-12 h-14 glass-effect border-primary/30 focus:border-primary text-lg"
            />
          </div>
        </div>

        {activeSection === 'feed' && (
          <div className="grid md:grid-cols-3 gap-6 animate-slide-up">
            <Card className="md:col-span-2 glass-effect border-primary/20 hover:border-primary/50 transition-all">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Icon name="Zap" size={24} className="mr-2 text-primary" />
                  Актуальное
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {events.map((event) => (
                  <div key={event.id} className="p-4 rounded-lg bg-card/50 border border-primary/10 hover:border-primary/30 transition-all cursor-pointer">
                    <div className="flex items-start space-x-4">
                      <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <Icon name="Music2" size={32} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{event.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{event.location}</p>
                        <Badge variant="outline" className="border-primary/50">
                          <Icon name="Calendar" size={14} className="mr-1" />
                          {event.date}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="glass-effect border-primary/20 hover:border-primary/50 transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Star" size={20} className="mr-2 text-secondary" />
                    Топ профили
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {profiles.slice(0, 3).map((profile) => (
                    <div key={profile.id} className="flex items-center space-x-3 cursor-pointer hover:bg-primary/5 p-2 rounded-lg transition-colors">
                      <Avatar className="border-2 border-primary/50">
                        <AvatarImage src={profile.avatar} />
                        <AvatarFallback>{profile.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-semibold text-sm">{profile.name}</p>
                        <p className="text-xs text-muted-foreground">{profile.role}</p>
                      </div>
                      <div className="flex items-center">
                        <Icon name="Star" size={14} className="text-secondary mr-1" />
                        <span className="text-sm font-semibold">{profile.rating}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="glass-effect border-primary/20 hover:border-primary/50 transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="TrendingUp" size={20} className="mr-2 text-accent" />
                    Популярные услуги
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {services.map((service) => (
                    <div key={service.id} className="p-3 rounded-lg bg-card/50 border border-primary/10 hover:border-accent/50 transition-all cursor-pointer">
                      <h4 className="font-semibold text-sm mb-1">{service.title}</h4>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-muted-foreground">{service.provider}</p>
                        <p className="text-sm font-bold text-accent">{service.price}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'profiles' && (
          <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
            {profiles.map((profile) => (
              <Card key={profile.id} className="glass-effect border-primary/20 hover:border-primary/50 hover:scale-105 transition-all cursor-pointer">
                <CardHeader className="text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary/50">
                    <AvatarImage src={profile.avatar} />
                    <AvatarFallback className="text-2xl">{profile.name[0]}</AvatarFallback>
                  </Avatar>
                  <CardTitle>{profile.name}</CardTitle>
                  <CardDescription className="text-base">{profile.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center mb-4">
                    <Icon name="Star" size={20} className="text-secondary mr-2" />
                    <span className="text-2xl font-bold">{profile.rating}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {profile.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-primary/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                    <Icon name="UserPlus" size={18} className="mr-2" />
                    Связаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeSection === 'jobs' && (
          <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
            {jobs.map((job) => (
              <Card key={job.id} className="glass-effect border-primary/20 hover:border-primary/50 hover:scale-102 transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <CardDescription className="flex items-center text-base">
                        <Icon name="Building2" size={16} className="mr-2" />
                        {job.company}
                      </CardDescription>
                    </div>
                    <Badge className="bg-primary/20 text-primary border-primary/50">
                      {job.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-muted-foreground">
                      <Icon name="MapPin" size={18} className="mr-2 text-accent" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Icon name="DollarSign" size={18} className="mr-2 text-secondary" />
                      <span className="font-semibold">{job.salary}</span>
                    </div>
                    <Button className="w-full mt-4 bg-gradient-to-r from-primary to-accent hover:opacity-90">
                      <Icon name="Send" size={18} className="mr-2" />
                      Откликнуться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeSection === 'events' && (
          <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
            {events.map((event) => (
              <Card key={event.id} className="glass-effect border-primary/20 hover:border-primary/50 hover:scale-105 transition-all overflow-hidden cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30 flex items-center justify-center">
                  <Icon name="Music4" size={64} className="text-primary/50" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription className="flex items-center text-base">
                    <Icon name="Calendar" size={16} className="mr-2" />
                    {event.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <Icon name="MapPin" size={18} className="mr-2 text-accent" />
                    <span>{event.location}</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                    <Icon name="Ticket" size={18} className="mr-2" />
                    Зарегистрироваться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeSection === 'services' && (
          <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
            {services.map((service) => (
              <Card key={service.id} className="glass-effect border-primary/20 hover:border-primary/50 hover:scale-105 transition-all">
                <CardHeader>
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                    <Icon name="Headphones" size={32} className="text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.provider}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Icon name="Star" size={18} className="text-secondary mr-1" />
                      <span className="font-bold">{service.rating}</span>
                    </div>
                    <div className="text-2xl font-bold text-accent">{service.price}</div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>

      <footer className="mt-20 glass-effect border-t border-primary/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Icon name="Music" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold glow-text">aka</span>
          </div>
          <p className="text-muted-foreground">
            Платформа для профессионалов музыкальной индустрии
          </p>
          <div className="flex items-center justify-center space-x-6 mt-6">
            <Button variant="ghost" size="sm">О нас</Button>
            <Button variant="ghost" size="sm">Контакты</Button>
            <Button variant="ghost" size="sm">Помощь</Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;