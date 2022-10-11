const getFooterSocialIcons = (icons: [string, string, string, string]) => {
  return [
    {
      icon: icons[0],
      altText: "Facebook",
      background: "bg-[#f1c75b]",
      link: "https://www.facebook.com/a7m3dmohmd/",
      border: "border-[#f1c75b]/90",
    },
    {
      icon: icons[1],
      altText: "Twitter",
      background: "bg-[#ff5e7d]",
      link: "https://twitter.com/a7m3D_000",
      border: "border-[#ff5e7d]/90",
    },
    {
      icon: icons[2],
      altText: "Linked In",
      background: "bg-[#56c2e6]",
      link: "https://www.linkedin.com/in/ahmedmohmd/",
      border: "border-[#56c2e6]/90",
    },
    {
      icon: icons[1],
      altText: "Github",
      background: "bg-[#4acf84]",
      link: "https://github.com/ahmedmohmd",
      border: "border-[#4acf84]/90",
    },
  ];
};

const getSkills = () => {
  return [
    {
      skillName: "Git",
      progress: 40,
      width: "w-[40%]",
    },
    {
      skillName: "HTML",
      progress: 90,
      width: "w-[90%]",
    },
    {
      skillName: "CSS",
      progress: 80,
      width: "w-[80%]",
    },
    {
      skillName: "JavaScript",
      progress: 80,
      width: "w-[80%]",
    },
    {
      skillName: "Pug JS",
      progress: 70,
      width: "w-[70%]",
    },
    {
      skillName: "Sass",
      progress: 80,
      width: "w-[70%]",
    },
    {
      skillName: "Tailwind",
      progress: 80,
      width: "w-[80%]",
    },
    {
      skillName: "React JS",
      progress: 90,
      width: "w-[90%]",
    },
    {
      skillName: "Next JS",
      progress: 90,
      width: "w-[90%]",
    },
    {
      skillName: "TypeScript",
      progress: 80,
      width: "w-[80%]",
    },
    {
      skillName: "Astro",
      progress: 80,
      width: "w-[80%]",
    },
    {
      skillName: "Jest",
      progress: 80,
      width: "w-[80%]",
    },
    {
      skillName: "React Testing Library",
      progress: 70,
      width: "w-[70%]",
    },
    {
      skillName: "Cypress",
      progress: 65,
      width: "w-[65%]",
    },
  ];
};

const getTags = () => {
  return {
    reactjs: {
      background: "bg-blue-500",
      color: "text-white",
    },
    javascript: {
      background: "bg-yellow-500",
      color: "text-slate-800",
    },
    nextjs: {
      background: "bg-black",
      color: "text-white",
    },
    tools: {
      background: "bg-orange-500",
      color: "text-slate-800",
    },
  };
};

export { getFooterSocialIcons, getSkills, getTags };
