import * as firebase from 'firebase';

const config = {
	apiKey: "",
	authDomain: "",
	databaseURL: "",
	projectId: "",
	storageBucket: "",
	messagingSenderId: ""
}

firebase.initializeApp(config);

const auth = firebase.auth();

export {
	auth
};
