export const filterPrefix = 'project';

/**
 * @param {string} projectType
 */
export function convertToFilterString(projectType) {
	return `${filterPrefix}-${normalizeString(projectType)}`;
}

/**
 * @param {string} str
 */
function normalizeString(str) {
	return str.trim().toLowerCase().split(/\s+/).join('-');
}

/**
 * @param {Project[]} projects
 */
export function createProjectFilters(projects, prefix = filterPrefix) {
	const temp = projects.map((p) => normalizeString(p.type));

	const final = [...new Set(temp)].map((p) => ({
		name: p,
		by: `.${prefix}-${p}`
	}));
	return [
		{
			name: 'all',
			by: '*'
		},
		...final
	];
}
