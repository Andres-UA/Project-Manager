import firebase from 'firebase/app';
import 'firebase/auth';

const db_config = {
	apiKey: 'AIzaSyAE5dRyerbY6kHJ5cLE5MJipPJARk5HnUM',
	authDomain: 'project-manager-f82f4.firebaseapp.com',
	databaseURL: 'https://project-manager-f82f4.firebaseio.com',
	projectId: 'project-manager-f82f4',
	storageBucket: 'project-manager-f82f4.appspot.com',
	messagingSenderId: '711743292773'
};

firebase.initializeApp(db_config);

const auth = firebase.auth();

export {
	auth,
	firebase
};
