import IMG1 from './db-img/estate.webp';
import IMG2 from './db-img/meal.webp';
import IMG3 from './db-img/stock.webp';
import IMG4 from './db-img/prudent.webp';
import IMG5 from './db-img/bookstore2.webp';
import IMG6 from './db-img/awesomebook.webp';

const data = [
  {
    id: 1,
    title: 'The Awesome Real Estate',
    description: 'The Awesome estate web application displays a list of apartments that were provided by local data.',
    image: IMG1,
    live: 'https://lizdev-awesome-estate.netlify.app/',
    source: 'https://github.com/Lizdev-05/awesome-estate.git',
  },

  {
    id: 2,
    title: ' S&L Sensation',
    description: 'The Meal DB web application displays a list of meals that were provided by an external API.',
    image: IMG2,
    live: 'https://lizdev-05.github.io/capstone-project/',
    source: 'https://github.com/Lizdev-05/capstone-project.git',
  },

  {
    id: 3,
    title: 'Realtime Stock Metric',
    description: 'Stock metrics is a web(mobile-focused) app for checking the companies listed on the stock exchange and see their live metrics.',
    image: IMG3,
    live: 'https://lizdev-stock-metric.netlify.app/',
    source: 'https://github.com/Lizdev-05/stock-market.git',
  },

  {
    id: 4,
    title: ' The Prudent Mobile App',
    description: 'Prudent app is a Ruby on Rails mobile web application that allows users to keep track of their expenses and categories.',
    image: IMG4,
    live: 'https://prudent-app.onrender.com/',
    source: 'https://github.com/Lizdev-05/Budget-app',
  },
  {
    id: 5,
    title: 'The Book Store App',
    description: 'The Bookstore is a website where the user can display a list of books, add a book by providing a title, an author,category and remove a selected book.',
    image: IMG5,
    live: 'https://lizdev-book-store.netlify.app/',
    source: 'https://github.com/Lizdev-05/book-store',
  },

  {
    id: 6,
    title: 'The Awesome Book Library',
    description: 'This project is focused on building is a simple website that displays a list of books that users have added.It allows you to add and remove books from that list also. ',
    image: IMG6,
    live: 'https://lizdev-05.github.io/Awesome-Books/',
    source: 'https://github.com/Lizdev-05/Awesome-Books.git',
  },

];

export default data;
