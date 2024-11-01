import { Component, Input } from '@angular/core';
import { BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-content',
  standalone: true,
  imports: [],
  templateUrl: './modal-content.component.html',
  styleUrl: './modal-content.component.css'
})
export class ModalContentComponent {
  @Input() data!: { number: number, image: string, description: string, video: string };
  
  constructor(public modalRef: BsModalRef) {}
}
