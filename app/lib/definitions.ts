export type Project = {
  title: string;
  members: Member[];
  timeline: Event[];
  isActive: boolean;
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
};
