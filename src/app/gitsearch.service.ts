import { Injectable } from '@angular/core';
import { Repos } from './repos'
import { Users } from './users'
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { from } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class GitsearchService {
	repo: Repos;
	user: Users;
	constructor(public http: HttpClient) {
		this.user = new Users('', '', '', '', '', '', 0, 0, new Date, 0, '', '', '');
		this.repo = new Repos('', '', '', '', 0, 0, '');
	}
	searchUsers(term: string) {
		interface ApiResponse {
			avatar_url: string;
			bio: string;
			login: string;
			company: string;
			location: string;
			name: string;
			followers: number;
			following: number;
			created_at: Date;
			public_repos: number;
			html_url: string;
			email: string;
			public_gists: string
		}
		let searchPoint = 'https://api.github.com/users/' + term + '?access_token=' + environment.apiKey;
		let promise = new Promise((resolve, reject) => {
			this.http.get<ApiResponse>(searchPoint).toPromise().then(
				(results) => {
					this.user = results;
					resolve(term);
				},
				(error) => {
					console.log(error);
					reject();
				}
			);
		});
		return promise;
	}
	getRepos(term :string) {
		interface ApiResponse {
			name: string;
			description: string;
			html_url: string;
			updated_at: string;
			stargazers_count: number;
			watchers_count: number;
			language: string;
		}
		let searchPoint = 'https://api.github.com/users/' + term + '/repos?access_token=' + environment.apiKey;
		let promise = new Promise((resolve, reject) => {
			this.http.get<ApiResponse>(searchPoint).toPromise().then(
				(repoResults) => {
					this.repo = repoResults;
					resolve(term);
				},
				(error) => {
					console.log(error);
					reject();
				}
			);
		});
		return promise;
	}

}
