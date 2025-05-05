/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Moncef Daoud",
  title: "Hi all, I'm Moncef",
  subTitle: emoji(
    "Passionate Full Stack Software Developer 🚀 with hands-on experience in building dynamic web and mobile applications using JavaScript, React.js, Node.js, Vue.js, and other modern libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Servcon",
  linkedin: "https://www.linkedin.com/in/moncef-servcon-1320b3292/",
  gmail: "moncefservcon@gmail.com",
  facebook: "https://www.facebook.com/moncef.daoud1/",
  instagram: "https://www.instagram.com/moncef_daoud/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Enthusiastic Full Stack Developer eager to explore and master every technology stack.",
  skills: [
    emoji(
      "⚡ Build and maintain responsive web applications aligned with client requirements."
    ),
    emoji("⚡ Collaborate with cross-functional teams to develop and deploy scalable solutions."),
    emoji(
      "⚡ Perform code reviews and maintain code quality across projects."
    ),
    emoji("⚡ Troubleshoot bugs and optimize performance for existing applications."),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "MySQL-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Tunisian School in Doha",
      logo: require("./assets/images/tunisian school in doha.webp"),
      subHeader: "High School Diploma in Mathematics",
      duration: "September 2006 - June 2015",
      desc: "Graduated among the top 5 students in class.",
      descBullets: [
        "Demonstrated a strong passion for Mathematics, Science, and the Art"
      ]
    },
    {
      schoolName: "Medtech - Mediterranean Institue of Technology",
      logo: require("./assets/images/MEDTECH-LOGO-WHITE.png"),
      subHeader: "Bachelor of Science in Computer Science (program not completed)",
      duration: "September 2016 - April 2022",
      desc: "Took courses in Software Engineering, Web Security, Operating Systems, and other core areas of computer science.",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Junior Front-End Developer",
      company: "Servcon",
      companylogo: require("./assets/images/servcon.png"),
      date: "August 2023 – Present",
      desc: "Web Developer",
      descBullets: [
        "Build and maintain responsive web applications aligned with client requirements.",
        "Collaborate with cross-functional teams(design, marketing, backend) to develop and deploy scalable solutions.",
        "Perform code reviews and maintain code quality across projects.",
        "Troubleshoot bugs and optimize performance for existing applications."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/logo.png"),
      projectName: "Munaqasa",
      projectDesc: "Developed a modern, responsive website and custom user portal for Munqasa. Implemented role-based access for different user types, including admins and clients, with secure authentication and personalized dashboards.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://marbu.in/munaqasa-v3/ar"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/NEW.PNG"),
      projectName: "Alhenzab Law Firm",
      projectDesc: "Led the full development of a bilingual website for Alhenzab. Built all key pages. Developed a custom admin panel to manage services, contact forms, and appointment approvals with automated email notifications.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.alhenzablaw.com/english"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Tubo logo.png"),
      projectName: "Tubo",
      projectDesc: "Built a modern, responsive corporate website for Tubo with a clean design and intuitive layout. \nNew website is coming soon..",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://tubo.qa/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/logow.png"),
      projectName: "CE International",
      projectDesc: "Developed a clean corporate website for CE International. Implemented a responsive design, service listings, and a contact form. Focused on performance optimization, RTL layout adjustments, and cross-browser compatibility to ensure a smooth user experience for both audiences.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ce-international.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/EXONWEST BLUE.png"),
      projectName: "Exonvest",
      projectDesc: "Contributed to the website's UI design and implemented multi-language support for a seamless user experience across English and Arabic.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://exonvest.com/"
        }
      ]
    },
    {
      image: require("./assets/images/mlogo.png"),
      projectName: "BG Eterno",
      projectDesc: "Contributed to the website's UI design and implemented multi-language support for a seamless user experience across English and Arabic.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://eterno.bg-qa.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/logo-dark.png"),
      projectName: "Mawateer",
      projectDesc: "Developed a dynamic and responsive website for Mawateer, showcasing services with a clean layout and smooth navigation. Mawateer website coming soon..",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.facebook.com/MawaterMotorsQatar/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Coursera Certifications",
      subtitle:
        "",
      image: require("./assets/images/coursera-brand-white-bkg-1442x432.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/3fb10006b27a7b042b5f0515996609f5"
        }
      ]
    },
    {
      title: "W3School online learning",
      subtitle:
        "coding",
      image: require("./assets/images/77673807.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View My profile Score",
          url: "https://www.w3profile.com/MoncefServcon"
        }
      ]
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I enjoy sharing my knowledge, however limited it may be, and aspire to earn a speaker badge one day!"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I genuinely enjoy talking about technology, and yes, even about myself because every story and idea has the power to spark connection and insight.",

  // Please Provide with Your Podcast embeded Link
  podcast: [
   // "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Whether it's discussing a project or simply saying hello, my inbox is always open.",
  number: "+974 66900812",
  email_address: "moncef@servcon.qa"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
