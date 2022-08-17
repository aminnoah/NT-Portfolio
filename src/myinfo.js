/* eslint-disable import/no-anonymous-default-export */
// Images
import ProfilePic from "./images/ProfilePic.png"
import Creole from "./images/Creole.png"
import ConvoToGo from "./images/Convo-To-Go.png"
import Petful from "./images/Petful.png"
import Yamma from './images/yamma-screenshot.png'
import CAG from './images/CAG-screenshot.png'
// Skills Icons
import javaIcon from "./images/javaIcon.png"
import htmlIcon from "./images/htmlIcon.png"
import cssIcon from "./images/cssIcon.png"
import reactIcon from "./images/reactIcon.png"
import jsIcon from "./images/jsIcon.png"
import codeIcon from "./images/code.png"
import chaiIcon from "./images/chaiIcon.png"
import herokuIcon from "./images/herokuIcon.png"
import jqIcon from "./images/jqIcon.png"
import mochaIcon from "./images/mochaIcon.png"
import nodeIcon from "./images/nodeIcon.png"
import pgIcon from "./images/pgIcon.png"
import designIcon from "./images/designIcon.png"
import typescriptIcon from "./images/typescriptIcon.png"
import playwrightIcon from "./images/playwrightIcon.png"

// Social Icon
import linkedInIcon from "./images/linkedInIcon.png"
import githubIcon from "./images/github.png"
import codepenIcon from "./images/codepen.png"


export default {

  //   Header Details ---------------------
  name: "Noah Turner",
  headerTagline: [
    //Line 1 For Header
    "Building digital",
    //Line 2 For Header
    "products, brands,",
    //Line 3 For Header
    "and experiences",
  ],

  headerParagraph:
    "Full-Stack Software Engineer from Chicago, Illinois. Let's create tomorrow, together.",

 
  contactEmail: "aminnoah19@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      id: 1, 
      title: "Yamma",
      para:
        "Yamma provides users with a compilation of up-to-date U.S. news. Users can communicate with each other through corresponding article chat windows.",
      imageSrc:
        Yamma,
      url: "https://yamma-client-23jelxwls.vercel.app/",
      github: "https://github.com/MettyS/yamma-client",
      tech: ["HTML","CSS","JavaScript","NodeJS","React","Express","Mocha","Chai","AJAX","Heroku","Vercel"]
    },
    {
      id: 2, 
      title: "Creole Vocabulary Teacher",
      para:
        "This app lets a registered user learn Creole using spaced repetition. The user can track and see thier progress on a personalized dashboard. I created this application to experience more of my own culture.",
      imageSrc: Creole,
      url: "http://spaced-repetition-beta.vercel.app/",
      github: "https://github.com/aminnoah/spaced-repetition-client",
      tech: ["HTML","CSS","JavaScript","NodeJS","React","Express","Mocha","Chai","AJAX","Heroku","Vercel","Cypress","Algorithms","Data Structures"]
    },
    {
      id: 3,
      title: "Convo-To-Go",
      para:
        "This application helps users to prepare and initiate conversations in a wide variety of settings. It provides the user with a set list of events or environments, and based on their input, they will receive a number of relevant questions and conversation starters. New users or visitors will have the ability to access the pre-existing conversation starters. Upon log in, users can input suggestions for new questions and events.",
      imageSrc: ConvoToGo,
      url: "https://convo-to-go-client.vercel.app/",
      github: "https://github.com/aminnoah/convo-to-go-client",
      tech: ["HTML","CSS","JavaScript","NodeJS","React","Express","Mocha","Chai","AJAX","Heroku","Vercel"]
    },
    {
      id: 4, 
      title: "Petful", 
      para:
        "This is a pet adoption app that matches a user to a pet on a first in first out basis. Users can see other adopters do the same.",

      imageSrc:
        Petful,
      url: "http://petful-client-bice.vercel.app/",
      github: "https://github.com/aminnoah/Petful-client",
      tech: ["HTML","CSS","JavaScript","NodeJS","React","Express","Mocha","Vercel","Algorithms","Data Structures"]
    },
    {
      id: 5,
      title: "Chicago Artist Guide",
      para: "We provide a centralized place for Chicago theatre companies, individual artists, and communities to come together. We remove common obstacles with time and money-saving resources so artists can focus on what’s most important: making art",
      imageSrc: CAG,
      url: "https://www.chicagoartistguide.org/home",
      github: "https://github.com/Chicago-Artist-Guide"
    }

    /*
    To Add More Projects (Update the id Respectively)
    ,{
        id: 6,
        title: 'Project',
        para: 'Something Amazing',
        imageSrc: "",
        url: '',
        github: '',
        tech: []
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Hello and welcome! My name is Noah Turner. I am a Fullstack Software Engineer from Chicago, Illinois and currently a Software Developer Consultant.",
  aboutParaTwo:
  "I started my journey as a Software Engineer in 2019 when I was introduced to the world of coding through a friend. I was instantly intrigued by the idea of creating something from nothing. I began my journey by learning HTML, CSS, and the architecture behind an accessible web app. I continued on to JavaScript and turned those static pages into dynamic websites. During the pandemic, I enrolled in Thinkful's Full Stack Software Engineering Program. Through their structured and fast pace course, I advanced my skills into Full Stack Development by understanding back-end development with NodeJS and database creation/ maintenance with PostgreSQL. After graduating Thinkful's program, I joined the Chicago Artist Guide as a volunteer dev in order to gain real world experience and solidify my skills.",
  aboutParaThree:
    "As an engineer for Bitovi, I have worked on teams for Fortune 500 companies, e-commerce, authorization. I have held and run multiple meetups for the JavaScript community. I am infatuated with the world of software engineering and I want to help you bring your ideas to fruition. ",
  aboutImage: ProfilePic,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      id: 1,
      img: htmlIcon
    },
    {
      id: 2,
      img: cssIcon
    },
    {
      id: 3,
      img: jsIcon
    },
    {
      id: 4,
      img: reactIcon
    },
    {
      id: 5,
      img: designIcon
    },
    {
      id: 6,
      img: codeIcon
    },
    {
      id: 7,
      img: chaiIcon
    },
    {
      id: 8,
      img: herokuIcon
    },
    {
      id: 9,
      img: jqIcon
    },
    {
      id: 10,
      img: mochaIcon
    },
    {
      id: 11,
      img: nodeIcon
    },
    {
      id: 12,
      img: pgIcon
    },
    {
      id: 13,
      img: typescriptIcon
    },
    {
      id: 14,
      img: javaIcon
    },
    {
      id: 15,
      img: playwrightIcon 
    }
  ],

  // End Skills Section --------------------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    
    { img: githubIcon, url: "https://github.com/aminnoah" },
    {
      img: codepenIcon,
      url: "https://codepen.io/aminnoah",
    },
    {
      img: linkedInIcon,
      url: "https://www.linkedin.com/in/noahturnerdev/",
    },
  ],

  // End Contact Section ---------------
}