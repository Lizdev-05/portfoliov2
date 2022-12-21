import IMG1 from './db-img/estate.webp'
import IMG2 from './db-img/meal.webp'
import IMG3 from './db-img/stock.webp'
import IMG4 from './db-img/prudent.webp'
import IMG5 from './db-img/bookstore2.webp'
import IMG6 from './db-img/awesomebook.webp'
import IMG7 from './db-img/molema.jpeg'
import IMG8 from './db-img/dami.jpeg'
import IMG9 from './db-img/abdel.png'
import IMG10 from './db-img/shams.jpeg'
import IMG11 from './db-img/alan.png'
import IMG12 from './db-img/nic.png'
import IMG13 from './db-img/vic.png'
import IMG14 from './db-img/rahman.jpeg'
import IMG15 from './db-img/kenny.jpeg'

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
      live: 'https://tranquil-crag-64773.herokuapp.com/',
      source: 'https://github.com/Lizdev-05/Recipe-app',
    },
    
    {
      id: 6,
      title: 'The Awesome Book Library',
      description: 'This project is focused on building is a simple website that displays a list of books that users have added.It allows you to add and remove books from that list also. ',
      image: IMG6,
      live: 'https://lizdev-05.github.io/Awesome-Books/',
      source: 'https://github.com/Lizdev-05/Awesome-Books.git',
    },
    
]


export const recommendation = [
  {
    id: 1,
    text: 'While at TIIDELAB, I saw that Elizabeth is an energetic individual and is skilled in her field. always willing to improve she will be a valuable asset to your organisation.',
    image: IMG7,
    name: 'Molema Lema',
    location: 'Dubai, UAE'
  },
  {
    id: 2,
    text: 'I worked together with Elizabeth at TIIDELab and I can say Elizabeth is very goal oriented as well as a team player, she was always easygoing. She was keenly devoted to the work, but being a real people person, she was also enjoyable to be around. Elizabeth demonstrated to be an exceptional software engineer. She was well organized and thrived under pressure.',
    image: IMG8,
    name: 'Damilola Ogungbenro',
    location: 'Ottawa, Canada'
  },
  {
    id: 3,
    text: 'I  have worked with Elizabeth at Micro-verse and her professionalism during meetings and punctuality are among her other outstanding traits something I appreciated. Elizabeth has strong problem-solving skills as well as excellent communication skills which are complementary to making her a great remote software developer. Any company that has a thing for a balance in project delivery, as well as a fun-minded person, would be happy to have her on their team, Being in a good setting she is a valuable member of any software development team.',
    image: IMG9,
    name: 'Abdelmejid Oumer Ali',
    location: 'Addis Abbaba, Ethiopia'
  },
  {
    id: 4,
    text: 'Elizabeth’s willingness to go above and beyond while executing a task is worthy of emulation. Her dexterity, poise, energy and resourcefulness in and out of her role as a fellow with us is admirable. Put her behind a system to code, she is good to go. Put her before her peers to solve problems, she will do just fine',
    image: IMG10,
    name: 'Shamsudeen Aderoju',
    location: 'Abuja, Nigeria'
  },
  {
    id: 5,
    text: 'It’s my pleasure to recommend Elizabeth, she is smart and has strong personality, she is able to solve urgent problems with minimum periods, she is fit to work in a team and collaboration both in site or remote.',
    image: IMG11,
    name: 'Alan Lukman',
    location: 'Slemani, Iraqi'
  },
  {
    id: 6,
    text: ' highly recommend Elizabeth as a Software Developer and would love to work together again with her. Elizabeth is amazing at her job! she knows her way around people, she is good with the students and colleagues, does whatever it takes to help colleagues, and gets things done. she makes sure that everyone is on the same page and focused on the main goal. I learned how to use sass from Elizabeth',
    image: IMG12,
    name: 'Nicholas Chimaobi Emmanuel',
    location: 'Lagos, Nigeria'
  },
  {
    id: 7,
    text: 'Elizabeth Ojesanmi is one of the smartest software developers I’ve ever met. I worked alongside her at TIIDELab Initiative as fellow software intern. During that time she showed her commitment and determination towards team building and making sure that technical projects comes into completion while meeting deadlines over. Elizabeth is a person who has exceptional leadership skills and she has used that skill to impact those around her and the success of the team and projects. She is also a genuinely kind, respectful, encouraging person.. I can recommend her for any position because I believe in her.',
    image: IMG13,
    name: 'Victor Okoroji',
    location: 'Lagos, Nigeria'
  },
  {
    id: 8,
    text: 'Elizabeth is one of the best and most courageous person I’ve ever met; I’ve had the opportunity to work with her several times and found her to be a great collaborator as well. Another thing I admire about Elizabeth is that she’s relentless on any task she decides to work on. I strongly recommend Oyinlade for any organization because I have strong faith in her technical abilities.',
    image: IMG14,
    name: 'Rahman',
    location: 'Lagos Nigeria'
  },
  {
    id: 8,
    text: 'lizabeth is one of the brightest software developers I’ve ever met. I worked alongside her at TiideLab where she was instrumental in building amazing projects, and in that time she proved her commitment and determination over and over again. Elizabeth is always challenging herself--she’s the type of person who reads documentation for fun, and her attention to detail is evident in all of the projects I’ve worked with her on. She’s also genuinely a kind, encouraging person, and kept me from falling into bug blues multiple times. I can recommend her with reservation.',
    image: IMG15,
    name: 'Kehinde Onifade',
    location: 'Osun, Nigeria'
  },
]
export default data;