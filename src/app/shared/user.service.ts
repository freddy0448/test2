import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  firestoreCollection : AngularFirestoreCollection;


  constructor(private firestore: AngularFirestore)
  {
    this.firestoreCollection = firestore.collection('user');
  }
  
  addContact(name : string, lastname : string, email : string){
    this.firestoreCollection.add({name, lastname, email});
  }

}
