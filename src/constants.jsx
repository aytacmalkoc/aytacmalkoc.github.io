// university transcript file
import transcript from './assets/files/transcript.pdf';

// skill images
import laravelLogo from './assets/images/laravel-logo.png';
import expressLogo from './assets/images/express-logo.png';
import strapiLogo from './assets/images/strapi-logo.png';
import reactLogo from './assets/images/react-logo.png';
import vueLogo from './assets/images/vue-logo.png';
import wordpressLogo from './assets/images/wordpress-logo.png';
import mysqlLogo from './assets/images/mysql-logo.png';
import mongodbLogo from './assets/images/mongodb-logo.png';

export const socialMediaLinks = [
  {
    id: 1,
    label: 'Github',
    icon: 'fa-brands fa-github',
    url: 'https://www.github.com/aytacmalkoc'
  },
  {
    id: 2,
    label: 'Npm',
    icon: 'fa-brands fa-npm',
    url: 'https://www.npmjs.com/~aytacmalkoc'
  },
  {
    id: 3,
    label: 'Twitter',
    icon: 'fa-brands fa-twitter',
    url: 'https://www.twitter.com/jrd_aytacmalkoc'
  },
  {
    id: 4,
    label: 'Instagram',
    icon: 'fa-brands fa-instagram',
    url: 'https://www.instagram.com/aytacmalkoc35'
  },
  {
    id: 5,
    label: 'Email',
    icon: 'fa-solid fa-envelope',
    url: 'mailto:aytacmalkoc@protonmail.com'
  }
];

export const experiences = [
  {
    id: 1,
    title: 'Co-founder',
    company: 'upperearth digital',
    duration: 'August 2021 - Dec 2021',
    description:
      'I have carried out many corporate works in the design agency that I am a partner of. During this time, I learned a lot about company management and customer relations.'
  },
  {
    id: 2,
    title: 'Software Intern',
    company: 'Fikir İşler',
    duration: 'Sep 2018 - June 2019',
    description:
      'During my internship, I took part in many projects. I provided support for frontend design and backend management. I developed myself in human relations.'
  }
];

export const educations = [
  {
    id: 1,
    title: 'Isparta University of Applied Sciences',
    duration: '2019 - 2021',
    description: 'Computer Programming Pr. - Cumulative GPA: 2.95/4',
    type: 'University',
    file: {
      title: 'Download Transcript',
      url: transcript
    }
  },
  {
    id: 2,
    title: 'Mersinli Vocational and Technical Anatolian High School',
    duration: '2014 - 2019',
    description: 'Information Technologies/Web Programming Pr. - GS: 69.73/100',
    type: 'High School'
  }
];

export const skills = {
  frontend: [
    {
      id: 1,
      name: 'React',
      image: reactLogo
    },
    {
      id: 2,
      name: 'Vue',
      image: vueLogo
    },
    {
      id: 3,
      name: 'Wordpress',
      image: wordpressLogo
    }
  ],
  backend: [
    {
      id: 4,
      name: 'Laravel',
      image: laravelLogo
    },
    {
      id: 5,
      name: 'Express',
      image: expressLogo
    },
    {
      id: 6,
      name: 'Strapi',
      image: strapiLogo
    }
  ],
  database: [
    {
      id: 7,
      name: 'MySQL',
      image: mysqlLogo
    },
    {
      id: 8,
      name: 'MongoDB',
      image: mongodbLogo
    }
  ]
};
