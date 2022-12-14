import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

user: any[] = [];
  constructor(private userService: UserService) {}

  ngOnInit():void{
this.userService.firestoreCollection.valueChanges({idField : 'id' }).subscribe(item=>{this.user = item;})
  }

  onClick (nameInput: HTMLInputElement, lastnameInput: HTMLInputElement, emailInput: HTMLInputElement,)
  {
    if (nameInput.value && lastnameInput.value && emailInput.value) {
      this.userService.addContact(nameInput.value, lastnameInput.value, emailInput.value);
      nameInput.value="";
      lastnameInput.value="";
      emailInput.value = ""; 
    }
    else
    {
      alert('Debe de completar los campos');
    }
    
  }

  

  contacts = [
    {name : 'freddy', lastname: 'villar', email: '20211800@itla.edu.do'},
    {name : 'alfonso', lastname: 'cruz', email: 'acruz@itla.edu.do'},
    {name : 'chris', lastname: 'olivieri', email: 'olivieri@itla.edu.do'}
  ]; 
  
  
  deleteContact(i: number) : void{
  }
  
  updateContact() : void{
  }
  
  editContact(i: number) : void{
  }

}

//type model = {no: number, name: string, lastname: string, email: string};


