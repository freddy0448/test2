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

  updateContact(id:string, newName:string, newLastname:string, newEmail:string)
  {
    this.firestoreCollection.doc(id).update({name:newName, lastname:newLastname, email:newEmail});
  }

  deleteContact(id:string){
    this.firestoreCollection.doc(id).delete();
  }

}
