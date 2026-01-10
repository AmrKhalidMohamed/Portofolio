import projectOne from "../assets/project1.png"
import projectTwo from "../assets/project2.png"
import projectThree from "../assets/project3.svg"

const projects = [
  {
    id: 1,
    title: "Madrid Tours",
    description:
      "Madrid Tours demo landing page featuring hero benefits and bookings.",
    image: projectOne,
    demoUrl: "https://madrid-app.vercel.app/",
    githubUrl: "https://github.com/AmrKhalidMohamed/madrid-app",
  },
  {
    id: 2,
    title: "Al Malaab",
    description:
      "Al Malaab mobile app your premier destination for booking gaming and movie rooms in the heart of Nasr City.",
    image: projectTwo,
    playstoreUrl:
      "https://play.google.com/store/apps/details?id=com.amrkfawzy.AwesomeProject&pcampaignid=web_share",
    appStoreUrl: "https://apps.apple.com/us/app/al-malaab/id6736920852",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Project Three",
    description: "A short summary of project three.",
    image: projectThree,
    demoUrl: "#",
    githubUrl: "#",
  },
];

export default projects