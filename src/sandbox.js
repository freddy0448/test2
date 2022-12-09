import {} from 'firebase/firestore';

const db = firebase.firestore();
db.collection('contacts').get()
    .then(snapshot => {console.log(snapshot);})
.catch(err => console.log(err));

