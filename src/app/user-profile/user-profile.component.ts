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
  repo! : Repos;
  term: any;
  gitsearchService: GitsearchService;
  constructor(gitsearchService: GitsearchService)
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
    // this.user = this.gitsearchService.user;
    this.searchUser('Muturi403')
  }
  }
