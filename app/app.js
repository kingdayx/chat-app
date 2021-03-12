import Vue from "nativescript-vue";
import App from "./components/App";
import Home from "./components/Home";
import DrawerContent from "./components/menu/DrawerContent";

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

new Vue({
    render(h) {
        return h(App, [
            h(DrawerContent, { slot: 'drawerContent' }),
            h(Home, { slot: 'mainContent' }),
        ])
    }
}).$start();