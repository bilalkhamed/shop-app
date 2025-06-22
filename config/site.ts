export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'ShopEase',
  description: 'An AI-powered shopping app that streamlines your shopping experience with smart recommendations and seamless navigation.',
  navItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Categories',
      href: '/categories',
    },
    {
      label: 'Cart',
      href: '/cart',
    },
    {
      label: 'About',
      href: '/about',
    }
  ]
};
