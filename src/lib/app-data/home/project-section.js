/**
 * @type {Project[]}
 */
export const projects = [
	{
		name: 'Music Player',
		image: '/projects/music-player.png',
		type: 'web',
		demoLink: 'https://nguyen-project-music-player.onrender.com'
	},
	{
		name: 'Gradient Generator',
		image: '/projects/gradient-generator.png',
		type: 'web',
		demoLink: 'https://nguyen-project-gradient-generator.onrender.com'
	},
	{
		name: 'Calculator',
		image: '/projects/calculator.png',
		type: 'web',
		demoLink: 'https://nguyen-project-calculator.onrender.com'
	},
	{
		name: 'Delivery driver',
		image: '/projects/delivery-driver.png',
		type: 'game',
		demoLink: 'https://delivery-driver.onrender.com'
	}
];

export const prefixFilter = 'project';

/**
 * @type {ProjectFilter[]}
 */
export const projectFilters = [
	{
		name: 'all',
		by: '*'
	},
	...[...new Set(projects.map((p) => p.type.toLowerCase()))].map((pTypeName) => ({
		name: pTypeName,
		by: `.${prefixFilter}-${pTypeName.toLowerCase()}`
	}))
];
