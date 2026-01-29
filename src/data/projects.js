import projectOne from "../assets/project1.png"
import projectOne2 from "../assets/project1-2.png"
import projectTwo from "../assets/project2.png"
import projectThree from "../assets/project3.png"
import projectThree2 from "../assets/project3-2.png"

const projects = [
  {
    id: 1,
    title: "Madrid Tours Website",
    description:
      "Full-stack tourism booking platform built with React & Laravel, featuring tour browsing, online booking, and an admin dashboard. Developed as a graduation project for exploring domestic, international, and religious tours through a modern, responsive interface.",
    image: projectOne,
    hoverImage: projectOne2,
    imageTitle: "Tourism booking platform built with React & Laravel.",
    demoUrl: "https://madrid-app.vercel.app/",
    githubUrl: "https://github.com/AmrKhalidMohamed/madrid-app",
    techStack: ["react", "vitejs", "tailwindcss", "laravel", "mysql"],
    accentGradient:
      "135deg, rgba(120, 220, 100, 0.2) 0%, rgba(80, 180, 100, 0.1) 100%",
    accentColor: "rgba(80, 180, 100, 1)",
  },
  {
    id: 2,
    title: "Al Malaab mobile app",
    description:
      "Al Malaab mobile app your premier destination for booking gaming and movie rooms in the heart of Nasr City.",
    image: projectTwo,
    hoverImage: projectTwo,
    imageTitle: "Destination for booking gaming and movie rooms.",
    playstoreUrl:
      "https://play.google.com/store/apps/details?id=com.amrkfawzy.AwesomeProject&pcampaignid=web_share",
    appStoreUrl: "https://apps.apple.com/us/app/al-malaab/id6736920852",
    githubUrl: "#",
    techStack: ["react", "expo"],
    accentGradient:
      "135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.1) 100%",
    accentColor: "rgba(139, 92, 246, 1)",
  },
  {
    id: 3,
    title: "Project Three",
    description: "A short summary of project three.",
    image: projectThree,
    imageTitle: "Short summary of project three.",
    hoverImage: projectThree2,
    demoUrl: "#",
    githubUrl: "#",
    techStack: ["js", "nodejs"],
    accentGradient:
      "135deg, rgba(56, 189, 248, 0.2) 0%, rgba(34, 211, 238, 0.2) 100%",
    accentColor: "rgba(34, 211, 238, 1)",
  },
];

export default projects
