import { Component, OnInit, Input } from '@angular/core';
import { UserInfoService } from '../../services/UserInfo/user-info.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserInfoService]
})
export class HomeComponent implements OnInit {
  cardData: object;
  selectedCards: any;
  searchTerm: any;

  constructor(private userInfoService: UserInfoService, private route: ActivatedRoute) {}

  ngOnInit() {
    // console.logthis.route.snapshot.queryParamMap.get('firstName'));
    // console.log(this.route.snapshot.paramMap.get('firstName'));
    // console.log(this.route.snapshot.params.firstName);
    this.route.queryParams.subscribe(params => { this.searchTerm = params.firstName; });
    // this.searchTerm = this.route.queryParams.subscribe(params => params.firstName);
    console.log(this.searchTerm);
    this.userInfoService
      .getUserData()
      .subscribe(User => (this.cardData = User));
  }

  selectedCard(card) {
    this.selectedCards = card;
  }
}
