// Site-wide settings: contact details, links, navigation.
// Page text lives in src/content/.

export const site = {
  name: 'Thang Pham',
  nativeName: 'Phạm Nam Thắng',
  role: 'Laravel & Vue.js Developer',
  url: 'https://thangpham.nz',
  location: 'Based in Vietnam. Working NZ and AU hours.',

  // Forwards to Gmail via Porkbun email forwarding.
  email: 'hello@thangpham.nz',

  bookingUrl: 'https://calendly.com/thangpham21/30min',

  // Formspree form "thangpham.nz contact", sends to hello@thangpham.nz.
  formspreeId: 'mnpdzeqz',

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
