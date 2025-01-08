import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDMUlnN6UcecAgmLWrH1j4wdWP2ksxk3KU",
    authDomain: "park-planner-f2f46.firebaseapp.com",
    projectId: "park-planner-f2f46",
    storageBucket: "park-planner-f2f46.firebasestorage.app",
    messagingSenderId: "847141306065",
    appId: "1:847141306065:web:323cfea32f824535010ff0",
    measurementId: "G-N6L7Q8RSG3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();

