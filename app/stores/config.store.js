import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyABUB6cXc8PeUSMSRmuPBzv2Q9rm1SspKM",
    authDomain: "dinner-e0f68.firebaseapp.com",
    databaseURL: "https://dinner-e0f68.firebaseio.com",
    projectId: "dinner-e0f68",
    storageBucket: "dinner-e0f68.appspot.com",
    messagingSenderId: "894353978352"
  };
export default class ConfigStore {
  constructor() {
    firebase.initializeApp(config)
    this.splashTime = 1000
    this.splashImg = require('../../images/splash.jpg')
    this.loginBG = require('../../images/login.jpg')
  }
  get SplashImg() {
    return this.splashImg
  }
  get SplashTime() {
    return this.splashTime
  }
  get LoginBG() {
    return this.loginBG
  }
}
