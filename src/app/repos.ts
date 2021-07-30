export class Repos {
	constructor(
		public name: string,
		public html_url: string,
		public description: string,
		public updated_at: string,
		public stargazers_count: number,
		public watchers_count: number,
		public language: string,
	) {
	}
}
