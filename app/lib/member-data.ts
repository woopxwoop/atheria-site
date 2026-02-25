import type { Member } from "@/app/lib/definitions";

//#region member definitions
const graceDelFrate: Member = {
  name: "Grace Del Frate",
  photo: "",
  roles: ["AI and dementia"],
  fieldsOfStudy: ["Neurobiology", "Psychology"],
  projects: [],
  links: [
    {
      type: "LinkedIn",
      url: "www.linkedin.com/in/grace-del-frate-394473300",
    },
  ],
  statement:
    "I am currently a student at UW-Madison majoring in neurobiology and psychology with certificates in global health and data science. I work on the AI and dementia project which aims to improve the quality of life for individuals with dementia. My goal is to get a PhD in Clinical Psychology with a neuroscience focus in the future. In my free time, I enjoy playing tennis, thrifting, and sailing.",
  isActive: true,
  isExec: false,
};
const camrynBlum: Member = {
  name: "Camryn Blum",
  photo: "",
  roles: [],
  fieldsOfStudy: ["Computer Science", "Data Science"],
  projects: [],
  links: [
    {
      type: "LinkedIn",
      url: "https://www.linkedin.com/mwlite/profile/in/camrynblum",
    },
  ],
  statement:
    "Hello I’m Camryn and I’m from Southern California. I love front end design whether it be creating apps, campaigns, short montages, and more! My future goals are to really explore how AI can shape user experiences and interfaces and that is why I chose the L’Oreal project which is working on creating a social agent to model a real human retail assistant for personalized luxury fragrances. ",
  isActive: true,
  isExec: false,
};
const winstonLa: Member = {
  name: "Winston La",
  photo: "",
  roles: ["Software"],
  fieldsOfStudy: ["Computer Science", "Data Science"],
  projects: [],
  links: [{ type: "LinkedIn", url: "https://www.linkedin.com/in/winston-la" }],
  statement:
    "I really love technology and want to see how modern machine learning techniques can be used across all fields. In my free time, I like to watch movies, read (sci-fi), and play video games. ",
  isActive: true,
  isExec: false,
};
const annieZhao: Member = {
  name: "Annie Zhao",
  photo: "",
  roles: [],
  fieldsOfStudy: ["Computer Science", "Statistics"],
  projects: [],
  links: [{ type: "LinkedIn", url: "https://www.linkedin.com/in/-annie-zhao" }],
  statement:
    "Some hobbies I spend my free time on are running (especially by/around the Madison lakes), reading classics, listening or playing music, and baking. \nI have always been interested in the intersection of computer science and healthcare, and chose this project to be in the forefront of that combination in research. I'm excited to work and learn with the team!",
  isActive: true,
  isExec: false,
};
const vivianTrach: Member = {
  name: "Vivian Trach",
  photo: "",
  roles: ["Project Lead"],
  fieldsOfStudy: ["Molecular and Cell Biology", "Data Science"],
  projects: [],
  links: [{ type: "LinkedIn", url: "https://www.linkedin.com/in/vtrach/" }],
  statement:
    "Hi! I'm a junior studying Molecular and Cell Biology and Data Science and am passionate about topics in sexual health education, bioinformatics, and wellness. For fun, I love to read, cook, and travel in my free time!",
  isActive: true,
  isExec: true,
};
const aviannaMeder: Member = {
  name: "Avianna Meder",
  photo: "/Aviannameder.PNG",
  roles: ["CBO"],
  fieldsOfStudy: ["Consumer Behavior and Marketplace Studies"],
  projects: [],
  links: [{ type: "LinkedIn", url: "https://www.linkedin.com/in/vtrach/" }],
  statement:
    "Hi! I'm a junior studying Molecular and Cell Biology and Data Science and am passionate about topics in sexual health education, bioinformatics, and wellness. For fun, I love to read, cook, and travel in my free time!",
  isActive: true,
  isExec: true,
};
//#endregion
export const execMembers: Member[] = [vivianTrach, aviannaMeder];
export const members: Member[] = [
  {
    name: "Andrew Lou",
    photo: "/andrew-lou.jpg",
    roles: ["Developer"],
    fieldsOfStudy: ["Computer Science", "Computer Engineering"],
    projects: [],
    links: [
      { type: "LinkedIn", url: "https://www.linkedin.com/in/andrew-lou-uw/" },
      { type: "GitHub", url: "https://github.com/woopxwoop" },
    ],
    statement:
      "Yahallo. I am a second-year undergraduate interested in the intersection between artificial intelligence and human-computer interaction. I like to read, play video games and program random stuff in my free time.",
    isActive: true,
    isExec: false,
  },
  annieZhao,
  camrynBlum,
  graceDelFrate,
  vivianTrach,
  winstonLa,
  aviannaMeder,
];

/*
  {
    name: "",
    photo: "",
    roles: [],
    fieldsOfStudy: [],
    projects: [],
    links: [],
    statement: "",
    isActive: true,
    isExec: false,
  },
  {
    name: "",
    photo: "",
    roles: [],
    fieldsOfStudy: [],
    projects: [],
    links: [],
    statement: "",
    isActive: true,
    isExec: false,
  },
*/

// sort by name (remove if not needed)
members.sort((a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});
