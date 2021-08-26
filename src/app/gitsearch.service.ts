import { Injectable } from '@angular/core';
import { Repos } from './repos';
import { Users } from './users';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

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
	searchUsers(user: string) {
		let userInput=user
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
		// // let searchPoint = 'https://api.github.com/users/' + user + '?access_token=' + environment.apiKey;
		// let promise = new Promise((resolve, reject) => {
		// 	this.http.get<ApiResponse>('https://api.github.com/users/' + user).toPromise().then(results => {
		// 			// this.user = results.user;
		// 			this.user.avatar_url = results.avatar_url;
		// 			this.user.bio = results.bio;
		// 			this.user.login = results.login
		// 			this.user.company = results.company
		// 			this.user.location = results.location
		// 			this.user.name = results.name
		// 			this.user.followers = results.followers
		// 			this.user.following = results.following
		// 			this.user.created_at = new Date(results.created_at)
		// 			this.user.public_repos = results.public_repos
		// 			this.user.html_url = results.html_url
		// 			this.user.email = results.email
		// 			this.user.public_gists = results.public_gists
		// 			resolve(user);
		// 		},
		let promise =new Promise<void>((resolve,reject)=>{
    this.http.get<ApiResponse>("https://api.github.com/users/" + userInput + "?access_token=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").toPromise().then(response=>{
      this.user.avatar_url=response.avatar_url
      this.user.name=response.name
      this.user.public_repos=response.public_repos
      this.user.followers=response.followers
      this.user.following=response.following
      this.user.html_url=response.html_url
      resolve()
 

    },
				(error) => {
					this.user.avatar_url = "./assets/Fai.jpeg";
					this.user.bio = "A student at Moringa School studying Full-stack development.";
					this.user.login = "Muturi403";
					this.user.company = "Moringa School";
					this.user.location = "Nairobi";
					this.user.name = "Faith Muturi";
					this.user.followers = 11;
					this.user.following = 21;
					// this.user.created_at = ;
					this.user.public_repos = 21;
					this.user.html_url = "";
					this.user.email = "faith.muturi@student.moringaschool.com";
					this.user.public_gists = 0;
					console.log(error);
					reject(error);
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
		let searchPoint = 'https://api.github.com/users/' + term + '/repos?access_token=  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';
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
