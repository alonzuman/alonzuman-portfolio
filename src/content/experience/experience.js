import leesa from './images/leesa.PNG';
import pytagoras from './images/pytagoras.jpg';
import barbiz from './images/barbiz.PNG';
import zumanjewelry from './images/zumanjewelry.PNG';
import camerent from './images/camerent.PNG';

export const experience = {
  subtitle: '02',
  title: 'Experience',
  content: {
    stuffThatIBuilt: [
      {
        id: 1,
        dates: 'May 2020',
        title: 'Pytagoras',
        description: 'Hebrew U Hackathon project; A search engine that enables students to filter video lectures by tagging their timestamps.',
        stack: ['React', 'node.js', 'mongoDB', 'express'],
        myRole: 'Web developer',
        repo: 'https://github.com/alonzuman/pytagoras-new',
        link: 'http://pytagoras-new.herokuapp.com/ ',
        image: pytagoras,
      },
      {
        id: 2,
        dates: 'April 2020',
        title: 'Crank',
        description: 'User generated content platform for teaching and challenging each other with unusual skills.',
        stack: ['Ruby on Rails', 'Javascript', 'HTML', 'scss', 'PostgreSQL'],
        myRole: 'Web developer',
        repo: 'https://github.com/alonzuman/crank',
        link: 'http://crankify.herokuapp.com/',
        image: '',
      },
      {
        id: 3,
        dates: 'March 2020',
        title: 'Camerent',
        description: 'Peer to peer rental marketplace that enables photographers rent their professional equipment to each other.',
        stack: ['Ruby on Rails', 'Javascript', 'HTML', 'scss', 'PostgreSQL'],
        myRole: 'Web developer',
        repo: 'https://github.com/alonzuman/camerent-new',
        link: 'http://camerent.herokuapp.com/',
        image: camerent,
      },
    ],
    workExperience: [
      {
        id: 4,
        dates: 'December 2019 - Present',
        role: 'Web developer & Project manager',
        company: 'Barbiz',
        description: 'Cosmetics brand with over 13k monthly visitors, owned by Bar Zomer.',
        bullets: [
          'Worked with the client to design a new consumer product website; led the entire end to end project lifecycle.',
          'Built and customized the theme of the website using HTML, CSS & Liquid language.',
          'Provided web solutions based on the client’s specific business needs for promotions, email automations, order fulfillment and delivery service integration.',
        ],
        link: 'https://barbiz.shop',
        image: barbiz,
      },
      {
        id: 5,
        dates: 'August 2019 - December 2020',
        role: 'Co-Founder & Web developer',
        company: 'Leesa',
        description: 'Peer to peer rental marketplace startup.',
        bullets: [
          'Participated in all aspects of business development: market research, finance, operations and marketing; scaled our MVP to over 500 transactions (5k+ members in our community) over the period of 3 months.',
          'Designed UX & UI and developed front-end using HTML, CSS, Javascript & React.',
        ],
        link: 'https://barbiz.shop',
        image: leesa,
      },
      {
        id: 6,
        dates: 'August 2018 - December 2018',
        role: 'Co-Founder & Web developer',
        company: 'Zuman Jewelry',
        description: 'Peer to peer rental marketplace startup.',
        bullets: [
          'Designed and built a new ecommerce website.',
          'Managed, maintained and updated website according to the client’s specific business needs.',
        ],
        link: 'https://zumanjewelry.com',
        image: zumanjewelry,
      },
    ]
  },
}