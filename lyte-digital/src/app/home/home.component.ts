import { Component, ViewChild,AfterViewInit } from '@angular/core';
import { ModelComponent } from '../model/model.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit{
  @ViewChild(ModelComponent) modelComponent!:ModelComponent;


  ngAfterViewInit(){
  }
  openModal(){
  this.modelComponent.openModel();
  }

}
