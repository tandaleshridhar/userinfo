import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StorageServiceService } from '../../storage-service.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [StorageServiceService]
})
export class CardComponent implements OnInit {
  @Input() cardArray: [];
  searchText;
  @Output() selectedCard = new EventEmitter();
  selectedContact: [];

  constructor(private storageServiceService: StorageServiceService) { }

  ngOnInit() {
  }

  editContact(card) {
    this.selectedContact = card;
    this.selectedCard.emit(card);
  }
}
