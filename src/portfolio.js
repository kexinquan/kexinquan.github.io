/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Kexin Quan",
  title: "Hey, This is Kexin ",
  subTitle: emoji(
    "I am a passionate Data Analyst 🔢 having advanced coding skills such as Python, R, Machine Learning, etc. Also a developer 🚀 with multiple experiences of building Web and Mobile applications using JavaScript / Reactjs and other packages and libraries."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1YJWMZT5BrKUcpv-pE1KdZG3n-MwlTkY4/view?usp=sharing",
};

// Your Social Media Link

const socialMediaLinks = {
  linkedin: "www.linkedin.com/in/kexinquan",
  github: "https://github.com/kexinquan",
  gmail: "kequan@ucsd.edu",
  facebook: "https://www.facebook.com/profile.php?id=100009407436147",
  instagram: "https://www.instagram.com/?hl=en",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "MY SKILLS",
  subTitle: emoji(
    "A DATA ANALYSIST AND DEVELOPER WHO ENJOYS EVERY TECH STACK IN LIFE🤔 "
  ),
  skills: [
    emoji(
      "⚡ Machine Learning and NLP: pyTorch, TensorFlow, scikit-learn, NLTK, pandas, spaCy, TextBlob"
    ),
    emoji(
      "⚡ Visualization Tools: D3.js, Matplotlib, Seaborn, ggplot2, Plotly"
    ),
    emoji(
      "⚡ Developer Tools: Git, PyCharm, Visual Studio Code, Firebase, Figma, Postman"
    ),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },

    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java",
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project",
    },
    {
      skillName: "data",
      fontAwesomeClassname: "fas fa-chart-bar",
    },
    {
      skillName: "NLP",
      fontAwesomeClassname: "fas fa-language",
    },
    {
      skillName: "machine learning",
      fontAwesomeClassname: "fas fa-robot",
    },
    {
      skillName: "LaTex",
      fontAwesomeClassname: "fas fa-paragraph",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
    {
      skillName: "postman",
      fontAwesomeClassname: "fas fa-user-astronaut",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "visualization",
      fontAwesomeClassname: "fas fa-braille",
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Analysis", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Visualization", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend ",
      progressPercentage: "70%",
    },
    {
      Stack: "Frontend/UIUX ",
      progressPercentage: "50%",
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  title: "MY Experiences",
  experience: [
    {
      role: "Data Analyst, Researcher, Developer",
      company: "ProtoLab - UC San Diego",
      companylogo: require("./assets/images/protolab1.png"),
      date: "April 2020 – Present",
      desc:
        "Develop an interactive python-based text mining tool, extracte special contexts and stakeholders using NLTK, spaCy in an unstructured problem statement.",
      descBullets: [
        "Explore how to automatically provide intelligent feedback to design novices based on NLP.",
        "Lead the data team in analyzing∼300 design problem statements using NLP tools to extract important information like stakeholders and construct a network to illustrate their interconnections.",
        "Present findings as a submission to CHI’21.",
      ],
    },
    {
      role: "EEG Researcher & Data Analyst",
      company: "Cognitive Development Lab - UC San Diego",
      companylogo: require("./assets/images/cogdevlab.png"),
      date: "Dec 2019 – Present",
      desc:
        "Conduct experiments on participants to collect data on EEG and decision choices. Develop and apply computational models for users’ behavioral and decision making data in bandit problems.",
      descBullets: [
        "Develop an analysis pipeline to study participants’ learning strategy followed by ”Win-Stay-Lose-shift” theory.",
        "Apply mathematical models in data analysis to predict users’ future decision in a multi-arm bandit game.",
      ],
    },
    {
      role: "Data Analyst Intern",
      company: "FutureLab - TsingHua University",
      companylogo: require("./assets/images/futurelab.jpeg"),
      date: "July 2019 – Sep 2019",
      desc:
        "Collect and process behavioral information data(i.e. mouse-pressure, heart rate) using Python and Matplotlib for plotting trends of various conditions.",
      descBullets: [
        "Build emotion-sensitive virtual agents that combine speech emotion recognition and matching emotional response.",
        "Assess users’ self-reported data with ANOVA, t-tests to depict significant differences between multiple stages.",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
// 有问题
const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "kexinquan", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
};

// Some Big Projects You have worked with your company

const bigProjects = {
  title: "My Class Works",
  subtitle:
    "While taking interesting elective courses, I've also accomplished some meaningful projects! ",
  projects: [
    {
      image: require("./assets/images/tetris1.png"),
      subtitle: "click on the image",
      link:
        "https://drive.google.com/file/d/1AMBpGzmXXzfV1iCpqILEcWJL7HF6zxCi/view?usp=sharing",
    },
    {
      //cogs127
      image: require("./assets/images/big_image.png"),
      subtitle: "click on the image",
      link: "https://kexindesign.squarespace.com/", //改！！加链接
    },
  ],
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: "My Big Projects",
  subtitle: "Machine Learning Projects & Data Prediction, Visualization",

  achivementsCards: [
    {
      title: "Convolutional Neural Networks for CIFAR-10 Classifications",
      subtitle:
        "Compared three convolutional neural networks' performance using PyTorch: ResNets18, VGG and RegNet.",
      image: require("./assets/images/cnn3.jpg"),
      footerLink: [
        {
          name: "View Paper",
          url:
            "https://drive.google.com/file/d/1sb368QopYInwAZhH7qEWdq09uIVMi23k/view?usp=sharing",
        },
      ],
    },
    {
      title:
        "Prediction for Future Terrorist Attack based on GDP and population",
      subtitle:
        "Analyzed terrorist attacks from Kaggle dataset, and calculate terrorism incidents’ correlation of GDP and population.",
      image: require("./assets/images/terroristmap1.jpeg"),
      footerLink: [
        {
          name: "View Project",
          url:
            "https://github.com/kexinquan/COGS108/blob/master/ClassProject_terroristsCrime.ipynb",
        },
      ],
    },

    {
      title:
        "An Empirical Study with the Comparison among Three Supervised Learning Models",
      subtitle:
        "Compared supervised models among Random Forest Classifier, Support Vector Classifier, and Logistic Regression.",
      image: require("./assets/images/1181.png"),
      footerLink: [
        {
          name: "View Project",
          url:
            "https://drive.google.com/file/d/1DsdYYRsCxGEAIYZP_iSM51kQFMzHeiAK/view?usp=sharing",
        },
      ],
    },
  ],
};

// Blogs Section

const blogSection = {
  title: emoji("My Competitions and Activities✏️"),
  subtitle: "How my afterclass experience goes?",

  blogs: [
    {
      url: "https://cogsci.ucsd.edu/",
      title: "Instructional Assistant @ UCSD Dept. Cognitive Science (COGS14A)",
      description:
        "Lead and instruct∼30 undergraduates each week in reviewing course materials.  Responsible for gradings.",
    },
    {
      url: "http://www.ucsdcssa.com/",
      title:
        "Event Planning Manager @ Chinese Students and Scholars Association",
      description:
        "Lead a group of 5 professional undergraduates to design themes for school’s large-scale activities.",
    },
    {
      url: "http://cssa.ucsd.edu/",
      title:
        "Executive Member, Volunteer @ Cognitive Science Students Association",
      description:
        "Coordinate with marketing team in planning activities, creating social media campaigns and banners.",
    },
    {
      url: "https://bigideascontest.org/",
      title: "Team Leader @ Big Idea Contest 2020",
      description:
        "Lead a team in building NLP algorithm based platform to better allocate and scaffold communities.",
    },
  ],
};

// Talks Sections

// const talkSection = {
//   title: "My Educations",
//   subtitle: emoji("Know more about me😊"),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/",
//     },
//   ],
// };

// const podcastSection = {
//   title: emoji("About Me 🎙️"),
//   subtitle: "Who am I",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     // "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
//   ],
// };

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project, an intern, or just want to say hi? My Inbox is open for all.",
  number: "(+1) 954-888-8762",
  email_address: "kequan@ucsd.edu",
};

//Twitter Section

const twitterDetails = {
  //   userName: "twitter", //Replace "twitter" with your twitter username without @
};
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  // talkSection,
  // podcastSection,
  contactInfo,
  twitterDetails,
};
