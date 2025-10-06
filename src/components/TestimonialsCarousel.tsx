import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const testimonials = [
  {
    text: 'Работать с командой было легко и продуктивно. Они быстро разобрались в нашей ИТ-среде и предложили практичные решения.',
    name: 'Иван Иванов',
    role: 'Владелец бизнеса',
    avatar: 'И',
  },
  {
    text: 'Проект помог нам упростить процессы и ускорить время вывода новых продуктов на рынок.',
    name: 'Светлана П.',
    role: 'IT-директор',
    avatar: 'С',
  },
  {
    text: 'Рекомендую как надёжного партнёра — профессионально и с бизнес-менталитетом.',
    name: 'Дмитрий К.',
    role: 'Руководитель проекта',
    avatar: 'Д',
  },
];

const TestimonialsSection = () => {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-alt-primary text-center mb-12">
        Отзывы клиентов
      </h2>

      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={4000}
        keyBoardControl
        swipeable
        draggable
        showDots
        containerClass="carousel-container lg:hidden"
        dotListClass="custom-dot-list-style"
        itemClass="p-5"
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 h-100 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-alt-cta text-white rounded-full">
                {item.avatar}
              </div>
              <div className="ml-3">
                <div className="font-semibold text-alt-primary">{item.name}</div>
                <div className="text-sm text-gray-500">{item.role}</div>
              </div>
            </div>
            <p className="text-gray-700 italic">&quot;{item.text}&quot;</p>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default TestimonialsSection;
