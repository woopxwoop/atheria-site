export type Project = {
  title: string;
  codename?: string;
  members: ProjectMember[];
  timeline: Event[];
  isActive: boolean;
  description: string;
};

export type ProjectMember = {
  name: string;
  role: string;
};

export type Member = {
  name: string;
  photo: string;
  roles: string[];
  fieldsOfStudy: string[];
  projects: Project[];
  links: Link[];
  statement: string;
  isActive: boolean;
  isExec: boolean;
};

type Link = {
  type: string;
  url: string;
};

type Event = {
  name: string;
  description: string;
  date: Date;
  picture?: string;
};
