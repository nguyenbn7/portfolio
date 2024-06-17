/**
 * @type {import("@tsparticles/engine").RecursivePartial<import("@tsparticles/engine").IOptions>}
 */
export const particlesOptions = {
	particles: {
		number: {
			value: 175
		},
		color: {
			value: ['#f6a823', '#ccc']
		},
		shape: {
			type: 'circle'
		},
		opacity: {
			value: {
				min: 0.5,
				max: 0.75
			},
			animation: {
				enable: true,
				speed: 1,
				sync: false,
				mode: 'random',
				startValue: 'random'
			}
		},
		size: {
			value: {
				min: 0.001,
				max: 4
			},
			animation: {
				enable: true,
				speed: 2.5,
				sync: false,
				mode: 'random',
				startValue: 'random'
			}
		},
		move: {
			enable: true,
			speed: 0.15,
			direction: 'none',
			random: true,
			straight: false,
			outModes: 'out',
			attract: {
				enable: false,
				rotate: {
					x: 600,
					y: 1200
				}
			}
		}
	},
	interactivity: {
		detect_on: 'canvas',
		events: {
			onHover: {
				enable: true,
				mode: 'bubble'
			},
			onClick: {
				enable: true,
				mode: 'push'
			},
			resize: {
				enable: true
			}
		},
		modes: {
			grab: {
				distance: 400,
				line_linked: {
					opacity: 1
				}
			},
			bubble: {
				distance: 83.91608391608392,
				size: 1,
				duration: 3,
				opacity: 1,
				speed: 3
			},
			repulse: {
				distance: 200,
				duration: 0.4
			},
			push: {
				particles_nb: 2
			},
			remove: {
				particles_nb: 2
			}
		}
	}
};
