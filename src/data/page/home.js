import { reviewsList } from '../list/reviews';
import { worksList } from '../list/works';

export const banner = {
  title: 'Ремонт квартир под ключ в Алмате',
  text: 'Ремонтируем квартиры с готовыми архитектурными проектами и фиксированной ценой.',
  btnText: 'Расчитать стоимость',
  img: '/img/banner-img.png',
};

export const about = {
  title: 'О нас',
  text: `
    <span>SmartRemont</span> – цифровой формат в сфере ремонта, объединяющий информационные технологии и рабочие процессы строительно-монтажных работ.
<br> <br>
    С помощью системы наши клиенты могут отслеживать все этапы ведения ремонта. Наличие собственных помещений.
    `,
  btnText: 'узнать подробнее',
  statistics: [
    {
      number: 3133,
      text: 'Выполненных ремонта',
    },
    {
      number: 774,
      text: 'Ремонтов одновременно',
    },
  ],
};

export const constructor = {
  title: 'Конструктор',
  text: `Расчёт ремонта квартиры онлайн. 
Укажите параметры вашей квартиры, затем в конструкторе выберите планируемый дизайн квартиры, далее укажите необходимые дополнительные опции.`,
  btnText: 'Перейти к конструктору',
  img: '/img/constructor-img.png',
};

export const ourWorks = {
  title: 'Наши работы',
  list: worksList,
};
export const reviews = {
  title: 'Отзывы',
  list: reviewsList,
};
