/**
 * @type {Project[]}
 */
export const projects = [
	{
		name: 'Music Player',
		imageUrl: '/images/music-player.png',
		type: 'web',
		demoLink: 'https://nguyen-project-music-player.onrender.com'
	},
	{
		name: 'Gradient Generator',
		imageUrl: '/images/gradient-generator.png',
		type: 'web',
		demoLink: 'https://nguyen-project-gradient-generator.onrender.com'
	},
	{
		name: 'Calculator',
		imageUrl: '/images/calculator.png',
		type: 'web',
		demoLink: 'https://nguyen-project-calculator.onrender.com'
	},
	{
		name: 'Delivery driver',
		imageUrl: '/images/delivery-driver.png',
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
