import { NavLink } from '@/types';

export const navLinks: NavLink[] = [
  {
    label: 'Home',
    route: '/',
    icon: 'Home',
  },
  {
    label: 'About',
    route: '/about',
    icon: 'User',
  },
  {
    label: 'Skills',
    route: '/skills',
    icon: 'Code2',
  },
  {
    label: 'Projects',
    route: '/projects',
    icon: 'FolderGit2',
  },
  {
    label: 'Contact',
    route: '/contact',
    icon: 'Mail',
  },
];

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/ChibuezeWilly',
    icon: 'Github',
  },
  {
    name: 'Email',
    url: 'mailto:pricelesswilliams1234@gmail.com',
    icon: 'Mail',
  },
];

export const cvDownloadConfig = {
  filePath: '/Main-Resume.pdf',
  fileName: 'Chibueze-Williams-Obodo-CV.pdf',
  label: 'Download CV',
};
