import { Component, Input, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalContentComponent } from '../../modal-content/modal-content.component';
import { NgForOf } from '@angular/common';
import { DateTimeService } from '../../services/date-time.service';
import {ToastrService} from 'ngx-toastr'


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ModalContentComponent, NgForOf],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent implements OnInit {
  @Input() data!: { number: number, month: number, image: string, description: string, video: string };
  currentDay!: number;
  currentMonth!: number;
  
  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService, private dateTimeService: DateTimeService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getCurrentDay();
  }

  openModal() {
    if(this.data.month == this.currentMonth)
    {
      if(this.data.number <= this.currentDay){
        const initialState = { 
          data: this.data 
        };
        this.modalRef = this.modalService.show(ModalContentComponent, { initialState, class: 'modal-lg' });
      }else{
        this.showWarning('Please be patient till the day arrives! :) Day today ->' + this.currentDay);
      }
    } else{
      this.showError('Its still not the advents month :| Current month is: ' + this.currentMonth);
    }  
  }

  getCurrentDay(){
    this.dateTimeService.getCurrentDateTime().subscribe((data) => {
      this.currentDay = data.day;
      this.currentMonth = data.month;
      console.log(this.currentDay);
    });
  }

  showError(message: string){
    this.toastr.error(message);
  }

  showWarning(message: string){
    this.toastr.warning(message);
  }
}