/**
 * @type {Project[]}
 */
export const projects = [
    {
        name: 'App 1',
        imageUrl: '/images/portfolio-1.jpg',
        type: 'app',
    },
    {
        name: 'Web 3',
        imageUrl: '/images/portfolio-2.jpg',
        type: 'web',
    },
    {
        name: 'App 2',
        imageUrl: '/images/portfolio-3.jpg',
        type: 'app',
    },
    {
        name: 'Card 2',
        imageUrl: '/images/portfolio-4.jpg',
        type: 'card',
    },
    {
        name: 'Web 2',
        imageUrl: '/images/portfolio-5.jpg',
        type: 'web',
    },
    {
        name: 'App 3',
        imageUrl: '/images/portfolio-6.jpg',
        type: 'app',
    },
    {
        name: 'Card 1',
        imageUrl: '/images/portfolio-7.jpg',
        type: 'card',
    },
    {
        name: 'Card 3',
        imageUrl: '/images/portfolio-8.jpg',
        type: 'card',
    },
    {
        name: 'Web 3',
        imageUrl: '/images/portfolio-9.jpg',
        type: 'web',
    }
];

export const prefixFilter = 'show-case';

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