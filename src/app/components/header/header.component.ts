import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StorageServiceService } from '../../storage-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [StorageServiceService]
})
export class HeaderComponent implements OnInit {
  constructor(private storageServiceService: StorageServiceService) { }

  ngOnInit() {
  }

  findName(text) {
    this.storageServiceService.setItem('searchText', text);
  }
}
