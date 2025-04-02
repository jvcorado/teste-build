import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: ['class', 'class'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/components/(checkbox|input).js',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				border: 'hsl(var(--border))',
				'primary-light-green': {
					'50': 'var(--primary-light-green-50-x)',
					'100': 'var(--primary-light-green-100-x)',
					'200': 'var(--primary-light-green-200-x)',
					'300': 'var(--primary-light-green-300-x)',
					'400': 'var(--primary-light-green-400-x)',
					'500': 'var(--primary-light-green-500-x)'
				},
				'primary-brand': {
					'50': 'var(--primary-brand-50-x)',
					'100': 'var(--primary-brand-100-x)',
					'200': 'var(--primary-brand-200-x)',
					'300': 'var(--primary-brand-300-x)',
					'400': 'var(--primary-brand-400-x)',
					'401': 'var(--primary-brand-401-x)',
					'500': 'var(--primary-brand-500-x)',
					'600': 'var(--primary-brand-600-x)',
					'700': 'var(--primary-brand-700-x)',
					'800': 'var(--primary-brand-800-x)',
					'900': 'var(--primary-brand-900-x)'
				},
				'primary-yellow': {
					'50': 'var(--primary-yellow-50-x)',
					'100': 'var(--primary-yellow-100-x)',
					'200': 'var(--primary-yellow-200-x)',
					'300': 'var(--primary-yellow-300-x)',
					'400': 'var(--primary-yellow-400-x)'
				},
				'primary-light-blue': {
					'50': 'var(--primary-light-blue-50-x)',
					'100': 'var(--primary-light-blue-100-x)',
					'200': 'var(--primary-light-blue-200-x)',
					'300': 'var(--primary-light-blue-300-x)',
					'400': 'var(--primary-light-blue-400-x)',
					'500': 'var(--primary-light-blue-500-x)',
					'600': 'var(--primary-light-blue-600-x)',
					'700': 'var(--primary-light-blue-700-x)',
					'800': 'var(--primary-light-blue-800-x)'
				},
				'primary-blue': {
					'50': 'var(--primary-blue-50-x)',
					'100': 'var(--primary-blue-100-x)',
					'200': 'var(--primary-blue-200-x)',
					'300': 'var(--primary-blue-300-x)',
					'400': 'var(--primary-blue-400-x)',
					'500': 'var(--primary-blue-500-x)',
					'600': 'var(--primary-blue-600-x)',
					'700': 'var(--primary-blue-700-x)',
					'800': 'var(--primary-blue-800-x)',
					'900': 'var(--primary-blue-900-x)',
					'950': 'var(--primary-blue-950-x)'
				},
				'primary-black': {
					'50': 'var(--primary-black-50-x)',
					'100': 'var(--primary-black-100-x)',
					'200': 'var(--primary-black-200-x)',
					'300': 'var(--primary-black-300-x)',
					'400': 'var(--primary-black-400-x)',
					'500': 'var(--primary-black-500-x)',
					'600': 'var(--primary-black-600-x)',
					'700': 'var(--primary-black-700-x)',
					'800': 'var(--primary-black-800-x)',
					'900': 'var(--primary-black-900-x)',
					'950': 'var(--primary-black-950-x)'
				}
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			transformStyle: {
				'preserve-3d': 'preserve-3d',
			},
			backfaceVisibility: {
				hidden: 'hidden',
			},
			perspective: {
				1000: '1000px',
			},
			rotate: {
				'y-180': 'rotateY(180deg)',
			},
		}
	},
	plugins: [
	],
}
export default config;