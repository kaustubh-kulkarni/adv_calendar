import { NgForOf, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CardComponent } from './card/card/card.component';
import { DateTimeService } from './services/date-time.service';

interface Day {
  number: number;
  month: number;
  image: string;
  description: string;
  video: string;
}

@Component({
  selector: 'app-main-grid',
  standalone: true,
  imports: [NgOptimizedImage, CardComponent, NgForOf],
  templateUrl: './main-grid.component.html',
  providers:[BsModalService],
  styleUrl: './main-grid.component.css'
})
export class MainGridComponent implements OnInit {
  currentDate : any;
  currentDay!: number;
  currentMonth!: number;
  days: Day[] = [
    { number: 1, month: 12, image: './assets/content/images/cards/day_1.png', description: 'This is the first day of Advent!', video: './assets/content/clips/test_clip.mp4' },
    { number: 2, month: 12, image: './assets/content/images/cards/day_2.png', description: 'This is the second day of Advent!', video: './assets/content/clips/test_clip_2.mp4' },
    { number: 3, month: 12, image: './assets/content/images/cards/day_3.png', description: 'This is the third day of Advent!', video: './assets/content/clips/test_clip.mp4' },
    { number: 4, month: 12, image: './assets/content/images/cards/day_4.png', description: 'This is the fourth day of Advent!', video: './assets/content/clips/test_clip.mp4' },
    { number: 5, month: 12, image: './assets/content/images/cards/day_5.png', description: 'This is the fifth day of Advent!', video: '../assets/content/clips/test_clip.mp4' },
    { number: 6, month: 12, image: './assets/content/images/cards/day_6.png', description: 'This is the sixth day of Advent!', video: './assets/content/clips/test_clip.mp4' },
    { number: 7, month: 12, image: './assets/content/images/cards/day_7.png', description: 'This is the seventh day of Advent!', video: './assets/content/clips/test_clip.mp4' },
    { number: 8, month: 12, image: './assets/content/images/cards/day_8.png', description: 'This is the eighth day of Advent!', video: './assets/content/clips/test_clip.mp4' },
    { number: 9, month: 12, image: './assets/content/images/cards/day_9.png', description: 'This is the ninth day of Advent!', video: './assets/content/clips/test_clip.mp4' },
    { number: 10, month: 12, image: './assets/content/images/cards/day_10.png', description: 'This is the tenth day of Advent!', video: './assets/content/clips/test_clip.mp4' },
    { number: 11, month: 12, image: './assets/content/images/cards/day_11.png', description: 'This is the eleventh day of Advent!', video: './assets/content/clips/test_clip_2.mp4' },
    { number: 12, month: 12, image: './assets/content/images/cards/day_12.png', description: 'This is the twelfth day of Advent!', video: './assets/content/clips/test_clip_2.mp4' },
    { number: 13, month: 12, image: './assets/content/images/cards/day_13.png', description: 'This is the thirteenth day of Advent!', video: './assets/content/clips/test_clip_2.mp4' },
    { number: 14, month: 12, image: './assets/content/images/cards/day_14.png', description: 'This is the fourteenth day of Advent!', video: './assets/content/clips/test_clip_2.mp4' },
    { number: 15, month: 12, image: './assets/content/images/cards/day_15.png', description: 'This is the fifteenth day of Advent!', video: './assets/content/clips/test_clip_2.mp4' },
    { number: 16, month: 12, image: './assets/content/images/cards/day_16.png', description: 'This is the sixteenth day of Advent!', video: './assets/content/clips/test_clip_2.mp4' },
    { number: 17, month: 12, image: './assets/content/images/cards/day_17.png', description: 'This is the seventeenth day of Advent!', video: './assets/content/clips/test_clip_2.mp4' },
    { number: 18, month: 12, image: './assets/content/images/cards/day_18.png', description: 'This is the eighteenth day of Advent!', video: './assets/content/clips/test_clip_2.mp4' },
    { number: 19, month: 12, image: './assets/content/images/cards/day_19.png', description: 'This is the nineteenth day of Advent!', video: './assets/content/clips/test_clip_2.mp4' },
    { number: 20, month: 12, image: './assets/content/images/cards/day_20.png', description: 'This is the twentieth day of Advent!', video: './assets/content/clips/test_clip_2.mp4' },
    { number: 21, month: 12, image: './assets/content/images/cards/day_21.png', description: 'This is the twenty-first day of Advent!', video: './assets/content/clips/test_clip_2.mp4' },
    { number: 22, month: 12, image: './assets/content/images/cards/day_22.png', description: 'This is the twenty-second day of Advent!', video: './assets/content/clips/test_clip_2.mp4' },
    { number: 23, month: 12, image: './assets/content/images/cards/day_23.png', description: 'This is the twenty-third day of Advent!', video: './assets/content/clips/test_clip_2.mp4' },
    { number: 24, month: 12, image: './assets/content/images/cards/day_24.png', description: 'This is the twenty-fourth day of Advent!', video: './assets/content/clips/test_clip_2.mp4' }
  ];

  
  /**
   *
   */
  constructor(private dateTimeService: DateTimeService) {}

  ngOnInit(): void{
    this.dateTimeService.getCurrentDateTime().subscribe((data) => {
      this.currentDate = new Date(data.dateTime);
      this.currentDay = data.day;
      this.currentMonth = data.month;
      console.log(this.currentDate);
      this.checkDate();
    });
  }

  checkDate(): void{
    const currentDay = this.currentDay;
    const currentMonth = this.currentMonth;
    console.log(currentDay, currentMonth);
    //Logic would go here to check the month and then the date
    //December logic will be added
  }
  //Method to get click events on cards
  onCardClick(day: number): void {
    console.log('Card for the day ' + day + ' clicked');
  }
}
