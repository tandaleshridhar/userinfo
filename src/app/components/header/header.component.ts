import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StorageServiceService } from '../../storage-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [StorageServiceService]
})
export class HeaderComponent implements OnInit {
  constructor(private storageServiceService: StorageServiceService, private router: Router) { }
  searchtext: any;
  ngOnInit() {
  }

  findName(text) {
   this.searchtext = text.target.value;
   this.router.navigate([''], { queryParams: { firstName: this.searchtext}});
  }
}
