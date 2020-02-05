import { Component, OnInit, Input } from "@angular/core";
import { UserInfoService } from "../../services/UserInfo/user-info.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  providers: [UserInfoService]
})
export class HomeComponent implements OnInit {
  cardData: object;
  selectedCards: any;
  searchText;

  constructor(private userInfoService: UserInfoService) {}

  ngOnInit() {
    this.userInfoService
      .getUserData()
      .subscribe(User => (this.cardData = User));
  }

  selectedCard(card) {
    this.selectedCards = card;
  }
}
