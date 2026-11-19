// Site-wide settings: contact details, links, navigation.
// Page text lives in src/content/.

export const site = {
  name: 'Thang Pham',
  nativeName: 'Phạm Nam Thắng',
  role: 'Laravel & Vue.js Developer',
  url: 'https://thangpham.nz',
  location: 'Based in Vietnam. Working NZ and AU hours.',

  // TODO: set up this mailbox before going live.
  email: 'hello@thangpham.nz',

  // TODO: paste your Calendly link, e.g. https://calendly.com/your-name/30min
  bookingUrl: '',

  // TODO: create a form at formspree.io and paste its ID (the part after /f/).
  formspreeId: '',

  links: {
    upwork: 'https://www.upwork.com/freelancers/~01f580487fd162c402',
    linkedin: 'https://www.linkedin.com/in/thangpham21/',
    github: 'https://github.com/mrnamthang',
  },

  nav: [
    { label: 'Services', href: '/services/' },
    { label: 'Case studies', href: '/case-studies/' },
    { label: 'About', href: '/about/' },
    { label: 'Contact', href: '/contact/' },
  ],
};
