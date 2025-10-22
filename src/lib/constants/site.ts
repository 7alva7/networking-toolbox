import { SITE_TITLE, SITE_DESCRIPTION } from '$lib/config/customizable-settings';

export const site = {
  name: SITE_TITLE || 'Networking Toolbox',
  title: SITE_TITLE || 'Networking Toolbox',
  description: 'A free set of online tools to help with IP addressing and subnetting.',
  longDescription:
    'Comprehensive IP address calculator with subnet calculations, CIDR conversion, IP format conversion, and network reference tools.',
  heroDescription: SITE_DESCRIPTION || 'Your companion for all-things networking',
  keywords:
    'IP calculator, subnet calculator, CIDR converter, DHCP tools, network tools, DNS tools, networking utilities',
  url: 'https://networkingtoolbox.net',
  image: 'https://networkingtoolbox.net/banner.png',
  repo: 'https://github.com/lissy93/networking-toolbox',
  mirror: 'https://codeberg.org/alicia/networking-toolbox',
  docker: 'https://hub.docker.com/r/lissy93/networking-toolbox',
};

export const about = {
  line1: 'The all-in-one offline-first networking toolbox for sysadmins',
  line2: 'IP address calculators, convertors, validators and visualisers',
};

export const license = {
  name: 'MIT',
  date: '2025',
  holder: 'Alicia Sykes',
  ref: 'https://opensource.org/licenses/MIT',
  url: 'https://github.com/Lissy93/networking-toolbox/blob/main/LICENSE',
  tldr: 'https://www.tldrlegal.com/license/mit-license',
};

export const author = {
  name: 'Alicia Sykes',
  github: 'lissy93',
  githubUrl: 'https://github.com/lissy93',
  url: 'https://aliciasykes.com',
  portfolio: 'https://as93.net',
  sponsor: 'https://github.com/sponsors/lissy93',
  avatar: 'https://i.ibb.co/Q7XTgybB/DSC-0444-2.jpg',
};

export default { site, license, author };
