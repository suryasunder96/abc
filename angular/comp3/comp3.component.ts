import { Component, OnInit } from '@angular/core';
import {student} from '../student';
import {NgForm} from '@angular/forms';
import {NewserviceService} from '../newservice.service';
 
@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
  student = new student();
  isRegistered=false;
  constructor(private applyservice:NewserviceService) { }

  ngOnInit() {
  
  }
  registration(f:NgForm){
   this.applyservice.store(this.student).subscribe(
     data=>{
       this.isRegistered=true;
       console.log("Registered Successfully");
       f.reset();
     },
     (err)=>{
       this.isRegistered=false;
       console.log("Registered not Successful");
     }
     );
  }
}
