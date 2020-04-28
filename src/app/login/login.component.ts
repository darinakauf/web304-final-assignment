import {Component, OnInit } from  '@angular/core';
import {Router} from '@angular/router';




@Component({

    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})





export class LoginComponent implements OnInit {

   
   
    public show:boolean = false;
    public buttonName:any = 'LOGIN';
  
   // ngOnInit () {  }
  
   // toggle() {
   //  this.show = !this.show;
  
    //CHANGE THE NAME OF THE BUTTON.
   // if(this.show)  
   // this.buttonName = "Hide";
 //else
  // this.buttonName = "Show";
 //  }
// }
    user:string;
    password:string;

   

       wrongLoginAlert():void {
           alert ("Username or password does not exist in the system. Please try again!")
             
          }


       //goodLoginAlert():void {
        //    alert ("Username or password correct!")
      //  }
      toggle() {
          
        this.show = !this.show;
      }
       ngOnInit() {

        }

      LogInUser()
       {
           if(this.user == "admin" && this.password == "1234")
           {
                this.toggle();
            }
            else {
                this.wrongLoginAlert();
           }
       }

}