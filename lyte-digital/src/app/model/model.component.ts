import { Component } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent {
  successModel:boolean=false;
  showModal: boolean = false;
  saveMOdel(){
   this.successModel=true;
  }
  openModel(){
    this.showModal=true
  }
  closeModal(event: Event) {
    
    if ((event.target as HTMLElement).id === 'waitlistModal') {
      this.successModel = false;
      this.showModal = false;
    }
  }
  saveSuccessModel(){
    this.successModel = false;
    this.showModal=false;
  }
}