import Vue from "nativescript-vue";
import App from "./components/App";
import Home from "./components/Home";
import DrawerContent from "./components/menu/DrawerContent";
var firebase = require("@nativescript/firebase");

Vue.config.silent = false;
Vue.registerElement("AR", () => require("nativescript-ar").AR);
Vue.registerElement('Fab', () => require('@nstudio/nativescript-floatingactionbutton').Fab);
Vue.registerElement("RadSideDrawer", () => require("nativescript-ui-sidedrawer").RadSideDrawer);
Vue.registerElement("RadDataForm", () => require("nativescript-ui-dataform").RadDataForm);
Vue.registerElement('Carousel', () => require('nativescript-carousel').Carousel);
Vue.registerElement('CarouselItem', () => require('nativescript-carousel').CarouselItem);
Vue.registerElement(
    'CheckBox',
    () => require('@nstudio/nativescript-checkbox').CheckBox,
    {
        model: {
            prop: 'checked',
            event: 'checkedChange'
        }
    }
);
// init firebase
firebase.firebase.init({
    onAuthStateChanged: function (data) { // optional but useful to immediately re-logon the user when they re-visit your app
        console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
        if (data.loggedIn) {
            console.log("user's email address: " + (data.user.email ? data.user.email : "N/A"));
        }
    }
}).then(data => {
    console.log('firebase.init done')
}).catch(err => {
    console.log("firebase.init error");
});

new Vue({
    render(h) {
        return h(App, [
            h(DrawerContent, { slot: 'drawerContent' }),
            h(Home, { slot: 'mainContent' }),
        ])
    }
}).$start();
