/**
 * External Dependencies
 */
import GithubIcon from 'react-icons/lib/fa/github';
import InstagramIcon from 'react-icons/lib/fa/instagram';
import LinkedinIcon from 'react-icons/lib/fa/linkedin';
import TwitterIcon from 'react-icons/lib/fa/twitter';

export const twitterUrl = 'https://twitter.com/Spen_Taylor';
export const githubUrl = 'https://github.com/Spen';
export const linkedinUrl = 'https://www.linkedin.com/in/spentaylor';
export const instagramUrl = 'https://www.instagram.com/spentaylor/';

export const twitter = {
	url: twitterUrl,
	title: 'Twitter',
	icon: TwitterIcon,
	mainColor: '#00aced',
	darkColor: '#0087ba',
};

export const github = {
	url: githubUrl,
	title: 'Github',
	icon: GithubIcon,
	mainColor: '#666666',
	darkColor: '#4d4d4d',
};

export const linkedin = {
	url: linkedinUrl,
	title: 'LinkedIn',
	icon: LinkedinIcon,
	mainColor: '#007bb6',
	darkColor: '#005983',
};

export const instagram = {
	url: instagramUrl,
	title: 'Instagram',
	icon: InstagramIcon,
	mainColor: '#3f729b',
	darkColor: '#305777',
};

export default [ twitter, github, linkedin, instagram ];
