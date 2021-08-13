import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { Repos } from '../repos';
import { GitsearchService } from '../gitsearch.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  repos: any = []
  user!: Users;
  repo!: Repos;
  term: any;
  gitsearchService: GitsearchService;
  constructor(gitsearchService: GitsearchService)
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  { this.gitsearchService = gitsearchService }

searchUser(term :string) {
  this.gitsearchService.searchUsers(term).then(
    (success) => {
      this.user = this.gitsearchService.user;
    },
    (error) => {
      console.log(error);
    }
  );
  this.gitsearchService.getRepos(term).then(
    (success) => {
      this.repo = this.gitsearchService.repo;
    },
    (error) => {
      console.log(error);
    }
  );
}

  ngOnInit(): void {
    this.searchUser('Muturi403');
  }
  }

// function searchUser(term: any) {
//   throw new Error('Function not implemented.');
// }

// function term(term: any) {
//   throw new Error('Function not implemented.');
// }

// function ngOnInit() {
//   throw new Error('Function not implemented.');
// }

