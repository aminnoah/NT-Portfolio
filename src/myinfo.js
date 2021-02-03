/* eslint-disable import/no-anonymous-default-export */
// Images
import ProfilePic from "./images/ProfilePic.png"
import Creole from "./images/Creole.png"
import ConvoToGo from "./images/Convo-To-Go.png"
import Petful from "./images/Petful.png"
import Yamma from './images/yamma-screenshot.png'
// Skills Icons
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
    "Full-Stack Software Developer from Chicago, Illinois. Let's create tomorrow, together.",

 
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
        "This is pet adoption app that matches a user to a pet on a first in first out basis. Users can see other adopters do the same.",

      imageSrc:
        Petful,
      url: "http://petful-client-bice.vercel.app/",
      github: "https://github.com/aminnoah/Petful-client",
      tech: ["HTML","CSS","JavaScript","NodeJS","React","Express","Mocha","Vercel","Algorithms","Data Structures"]
    },

    /*
    To Add More Projects (Update the id Respectively)
    ,{
        id: 5,
        title: 'Project Five',
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
    "Hello and thank you for checking out my portfolio! My name is Noah Turner. I am a Fullstack Software Developer from Chicago, Illinois and a graduate of the Fullstack Web Development Program at Thinkful.",
  aboutParaTwo:
  "I am transitioning from the health & wellness industry, where I was a Personal Trainer and Soccer Coach for FC Barcelona Academy. Similarly, the two industries require constant learning and continuation of my education and craft. I have brought the same level of commitment, excitement, and determination to excel as a Software Developer.",
  aboutParaThree:
    "I am infatuated with the world of software engineering. The possibilities of creation are only limited to what I create in my mind. The satisfaction that comes from creating and solving real-world problems will never cease to intrigue me. I am looking for a career where I can be challenged and pushed past my limits in order to make a positive change for society.",
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
      url: "www.linkedin.com/in/noah-turner-full-stack-dev",
    },
  ],

  // End Contact Section ---------------
}