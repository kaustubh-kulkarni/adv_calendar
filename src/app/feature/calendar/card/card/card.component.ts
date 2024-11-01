import { Component, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalContentComponent } from '../../modal-content/modal-content.component';
import { NgForOf } from '@angular/common';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ModalContentComponent, NgForOf],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {
  @Input() data!: { number: number, image: string, description: string, video: string };
  
  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}

  openModal() {
    const initialState = { 
      data: this.data 
    };
    this.modalRef = this.modalService.show(ModalContentComponent, { initialState, class: 'modal-lg' });
  }
}