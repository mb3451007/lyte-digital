import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ModelComponent } from '../model/model.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild(ModelComponent) modelComponent!:ModelComponent;
  ngAfterViewInit(){
  }

  openModal(){
    this.modelComponent.openModel();
    }
}
