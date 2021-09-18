  import firebase from 'firebase'

  export const firebaseConfig = {
    apiKey: "AIzaSyDItExOW9P86yD7bZdNMFp3gczWdd3DjEY",
    authDomain: "story-telling-app-a6818.firebaseapp.com",
    databaseURL: "https://story-telling-app-a6818-default-rtdb.firebaseio.com",
    projectId: "story-telling-app-a6818",
    storageBucket: "story-telling-app-a6818.appspot.com",
    messagingSenderId: "914957532312",
    appId: "1:914957532312:web:216ee4c630d8be49f224ed"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase.database();
