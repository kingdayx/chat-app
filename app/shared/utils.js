import { Application } from "@nativescript/core"

var app = require("application");
var platform = require("platform");
var color = require("color");

export const showDrawer = () => {
    let drawerNativeView = Application.getRootView();
    if (drawerNativeView && drawerNativeView.showDrawer) {
        drawerNativeView.showDrawer();
    }
}

export const closeDrawer = () => {
    let drawerNativeView = Application.getRootView();
    if (drawerNativeView && drawerNativeView.showDrawer) {
        drawerNativeView.closeDrawer();
    }
}

export const onPageLoaded =  function(args) {
    let controller = args.object.frame.ios.controller;
    controller.navigationBar.barStyle = 1; // `0` for Black or `1` for Light
  }

// Event handler for Page "loaded" event attached in main-page.xml
export const pageLoaded = function (args) {
    // Get the event sender
    var page = args.object;
    page.bindingContext = data;

    var View = android.view.View;

    if (app.android && platform.device.sdkVersion >= '21') {
        var window = app.android.startActivity.getWindow();
        // set the status bar to Color.Transparent
        window.setStatusBarColor(0x000000);

        var decorView = window.getDecorView();
        decorView.setSystemUiVisibility(
            View.SYSTEM_UI_FLAG_LAYOUT_STABLE
            | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
            | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
            // | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION // hide nav bar
            // | View.SYSTEM_UI_FLAG_FULLSCREEN // hide status bar
            | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
    }

    var statusHeight = getStatusBarHeight();
    // // Need to add some padding to whatever your first View(widget)
    // var actionbar = page.actionBar._toolbar;
    // // Set the padding to match the Status Bar height
    // actionbar.setPadding(0, statusHeight, 0, 0);

    var lab = page.getViewById('home-page').android;
    lab.setPadding(0, statusHeight, 0, 0);

}
// exports.pageLoaded = pageLoaded;

// A method to find height of the status bar
function getStatusBarHeight() {
    var result = 0;
    var resourceId = app.android.currentContext.getResources().getIdentifier('status_bar_height', 'dimen', 'android');
    if (resourceId) {
        result = app.android.currentContext.getResources().getDimensionPixelSize(resourceId);
    }
    return result;
}