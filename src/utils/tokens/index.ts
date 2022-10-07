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

export { getFooterSocialIcons };
