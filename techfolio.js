import emoji from "react-easy-emoji";

/* 1. Main App */
/* 2. Social Networks */
/* 3. Banner Section  */
/* 4. About Section  */
/* 5. Skills Section */
/* 6. Open Source Section  */
/* 7. Projects Section */
/* 8. Experience Section */
/* 9. Contact Section */

/* wrap your text in emoji("") if you want to show emoji in your text

/*=====================
    1. Main App
    Desc: set what's in the document's head section
==========================*/

const app = {
  title: "Mouadh Lafi Portfolio",
  // Note : consider leaving null if you dont have any head icon
  icon: "wattpad.png",
  description: "An ordinary karachitte Web Developer, Mobile Shutterbug, and Writer.",
};

/*=====================
    2. Social Networks 
    Desc: your social network links
==========================*/

const socialNetworks = {
  //Note : if you dont need or have any social network just add null value
  github: "https://github.com/Lafimouad",
  linkden: "https://linkedin.com/in/mouadh-lafi",
  facebook: "https://www.facebook.com/mouad.lafi",
  instagram: "https://instagram.com/mouadh.lafi/",
  twitter: "https://twitter.com/mouadh-lafi",
};

/*=====================
    3. Banner Section
    Desc: techfolio logo, greetings, summary and avatar,
==========================*/

const bannerSection = {
  username: "Mouadh",
  bannerHeading: "Mouadh Lafi.",
  bannerTagLine: emoji(
    "I am a self-motivated and dedicated software engineer who enjoys leveraging technical, and problem-solving skills to create dynamic, high-quality apps"
  ),
  //Note:Simply add you avatar image in src/assets/imgs folder
  //and add the name along with extention e.g xyz.png , abc.svg
  //Note : if you want to use default illustration instead of adding your avatar add defaultAvatar.svg
  bannerAvatar: "avatar.jpeg",
  resumeLink:
    "https://drive.google.com/file/d/1pjtDXGoM2FtX6c9hyLEIYtZqZl-KC7x3/view",
};

/*=====================
    4. About Section
    Desc: It's all about you!. this section is designed using the command 
    line concept so it asked you to add the admin of the command line 
    and 2 basic commands (i recommend you to use default commands).
==========================*/

const aboutSection = {
  admin: "mouadh@Mouadh.Lafi",
  firstCommand: " sudo run about.exe",
  secondCommand: " executing about.exe",
  about:
    "Software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly ",
};

/*=====================
    5. Skils Section
    Desc: This section hep you set your skills 
==========================*/

const skillsSection = {
  // Recommended : don't add more than 3 skill taglines.
  skillsTagLines: [
    "Love to Build Scalable web and native application using React with the several stacks, packages, and services.",
    "Also Passionate towards other stuff like mobile development and Dev-Ops.",
  ],

  // Recommended : don't add more than 12 skills.
  // Note : go to https://fontawesome.com/icons?d=gallery > select the icon you want to show 
  //        > copy its class > paste it as {fontAwesomeClassname: "fab fa-html5"} in SkillsSet

  skillsSet: [
    {
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      fontAwesomeClassname: "fab fa-brands fa-git-alt",
    },
    {
      fontAwesomeClassname: "fab fa-js",
    },
    {
      fontAwesomeClassname: "fab fa-react",
    },
    {
      fontAwesomeClassname: "fab fa-node",
    },
    {
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      fontAwesomeClassname: "fab fa-brands fa-aws",
    },
    {
      fontAwesomeClassname: "fab fa-brands fa-android",
    },
    {
      fontAwesomeClassname: "fab fa-brands fa-java",
    },
    {
      fontAwesomeClassname: "fab fa-docker",
    },
  ],
};

/*=====================
    6. Open Source Section
    Desc: This section hlep you configure your github repos section 
==========================*/
const openSourceSection = {
  //Note :  don't edit the githubToken
  githubToken: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,

  githubUserName: "Lafimouad",
  //Note :  no of open source projects you want to show.
  numberOfRepos: 6,
};

/*=====================
    7. Projects Section
    Desc: This section hlep you configure your major projects.
==========================*/


const projectsSection = {
  projects: [
    {
      projectName: "EDM",
      projectBio: `
      - Built Cross-Platform Mobile apps(IOS/Android)  of an Electronic Document Management application "EDM" using Flutter.

       and developed a Back End service as  RESTful API to receive, track, manage  and store documents using Spring Boot  .
      `,

      projectUrl: "https://github.com/Lafimouad/EDM-flutter",
      stackList: ["Flutter", "GetX", "SpringBoot"],
      folder: "pharmadrive",
    },
    {
      projectName: "Smart Meter",
      projectBio: "Mobile application to manage smart meters.",

      projectUrl: "",
      stackList: ["Flutter", "GetX", "Firebase"],
      folder: "pfe",
      links:""
    },
  ],
};

/*=====================
    8. Experience Section
    Desc: This section help you configure your experience.
==========================*/

const experienceSection = {
  experiences: [
    {
      companyLink: "https://www.linkedin.com/company/vistaprint/",
      company: "VISTAPRINT",
      experienceTitle: "Full stack Software engineer ",
      experienceDesc:
        "Worked mainly with React/Typescript,NodeJs,Spring Boot and AWS to build amazing interactive web application",
      // Recommended : don't add full date.
      experienceDuration: "12/2022, Current",
      // Recommended : don't add more than 3 tags.
      experienceTags: ["Software Engineer", "Typescript", "Web", "JAVA"],
    },
    {
      companyLink: "https://www.linkedin.com/company/itss/",
      company: "ITSS",
      experienceTitle:
        "Digital Consultant (Full stack Software engineer at ATB) ",
      experienceDesc: `- Created and developed "ATB Onboarding" FrontEnd part using the Temenoes Infinity solution and developed "ATB Onboarding" BackEnd part using several Spring Boot microservices and
existing SOAP and Java services.`,
      experienceDuration: "07/2022-12/2022",
      experienceTags: ["React", "Spring Boot", "Azure Cloud"],
    },
    {
      companyLink: "https://www.linkedin.com/company/value-tunisie/",
      company: "Value",
      experienceTitle: "Internship: Full Stack Engineer intern ",
      experienceDesc: `- Developed of a Full-Stack Web Application using Angular,Spring Boot and MySQL also Created a CI/CD pipeline using Jenkins , Nexus ,GIT and Docker and Camunda BPMN to create and manage a credit workflow finally we used Keycloack IAM as an access management system to simplifies the security process and to maintain a SSO session`,
      experienceDuration: "01/2022 - 07/2022",
      experienceTags: ["Angular", "Spring Boot", "MYSQL"],
    },
  ],
};
/*=====================
    8. Education 
    Desc: This section help you configure your experience.
==========================*/

const educationSection = {
  experiences: [
    {
      companyLink: "https://esprit.tn/",
      company: "Private Engineering and Technology School (ESPRIT)",
      experienceTitle:
        "Master of Engineering - MEng computer Software Engineering",
      experienceDesc: "",
      // Recommended : don't add full date.
      experienceDuration: "09/2019 - 07/2022",
      // Recommended : don't add more than 3 tags.
      experienceTags: [],
    },
    {
      companyLink: "https://ipein.rnu.tn/",
      company:
        "Preparatory Institute for Engineering Studies of Nabeul (IPEIN)",
      experienceTitle: "Pre Engineering Degree( Mathematics and Physics) ",
      experienceDesc: ``,
      experienceDuration: "09/2016 - 06/2019",
      experienceTags: [],
    },
    {
      companyLink: "http://www.education.gov.tn/?lang=en",
      company: "",
      experienceTitle: "Tunisian baccalaureate in mathematics ",
      experienceDesc: "",
      experienceDuration: " 05/2016",
      experienceTags: [],
    },
  ],
};

/*=====================
    9. Contact Section
    Desc: This section help you configure your contact.
==========================*/

const contactSection = {
  contactTagline:
    "Hey Folks, Love to see you sliding here, Y'all can reach me.",
  // Note : add your all contacts in the contactList seperating with *,* .
  contactList: ["+216 55454412", "mouadh.lafi@outlook.com"],
};


// Bingo :))

export {
  app,
  socialNetworks,
  bannerSection,
  aboutSection,
  skillsSection,
  openSourceSection,
  projectsSection,
  experienceSection,
  contactSection,
  educationSection
};
