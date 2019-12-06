import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup} from '@angular/forms';
import { LoginComponent } from '../login/login.component';




@Component({
  selector: 'app-home',
  providers:[LoginComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  

  constructor() { }

  ngOnInit() {

  }


}
