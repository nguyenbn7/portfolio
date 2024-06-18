export const filterPrefix = 'project';
/**
 * @param {Project[]} projects
 */
export function createProjectFilters(projects, prefix = filterPrefix) {
	const temp = projects.map((p) => p.type.trim().toLowerCase().split(/s+/).join('-'));
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
