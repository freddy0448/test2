import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //singinArray: Singin[] =[{user: "freddy", password: "1234"},]  
  value:number = 0;
  model:any={};
  model2:any={};


  addContact() : void{
    this.contacts.push(this.model);

  }

  contacts = [
    {name : 'freddy', lastname: 'villar', email: '20211800@itla.edu.do'},
    {name : 'alfonso', lastname: 'cruz', email: 'acruz@itla.edu.do'},
    {name : 'chris', lastname: 'olivieri', email: 'olivieri@itla.edu.do'}
  ]; 
  
  
  deleteContact(i: number) : void{
    var answer = confirm('Está seguro que quiere borrar este contacto?')
    if(answer)
    {
      this.contacts.splice(i,1);
    }
  }
  
  updateContact() : void{
    let i = this.value;
    for (let j = 0; j < this.contacts.length; j++) {
      if (i == j) {
        this.contacts[i] = this.model2;
        this.model2= {};
      }
      
    }
  }
  
  editContact(i: number) : void{
    this.model2.name =  this.contacts[i].name;
    this.model2.lastname =  this.contacts[i].lastname;
    this.model2.email =  this.contacts[i].email;
    this.value=i;
  }

}

//type model = {no: number, name: string, lastname: string, email: string};


