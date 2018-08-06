import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:InfoService) { }

  ngOnInit() {
  }

  get(){
    var res=this.service.getInfo().subscribe(Response => console.log(Response)) 
    console.log(res);   
  }

}
