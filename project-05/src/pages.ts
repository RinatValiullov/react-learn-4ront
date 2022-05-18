type pageType = {
  path: string;
  title: string;
  color: string;
}

const pages = [
  {
    path: '/page-1',
    title: 'Page 1',
    color: '#03a9f4'
  },
  {
    path: '/page-2',
    title: 'Page 2',
    color: '#ad9a45'
  }
];

export { pages };
export type { pageType };
