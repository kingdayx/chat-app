<template lang="html">
    <GridLayout rows="auto, *" class="nt-drawer__content">
        <StackLayout row="0" class="nt-drawer__header" >
          <Image class="nt-drawer-image" src="res://skooty_logo"></Image>
          <Label class="nt-drawer-footnote" text="Powered By ATOM Mobility"/>
        </StackLayout>

        <ScrollView row="1" class="nt-drawer__body">
            <StackLayout>
                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'HwItWorks' ? ' -selected': '')"
                            @tap="onNavigationItemTap(HwItWorks)">
                    <Label col="0" text.decode="&#xf128;" class="nt-icon fas"/>
                    <Label col="1" text="How to use the App?" class="p-r-10"/>
                </GridLayout>
                 <!-- <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'MyCredit' ? ' -selected': '')"
                            @tap="onNavigationItemTap(MyCredit)">
                    <Label col="0" text.decode="&#xf09d;" class="nt-icon far"/>
                    <Label col="1" text="My Credit" class="p-r-10"/>
                    <Label col="2" color="#89efce" text.decode="&#xf153; 5.50" class="pull-right fas p-r-10"/>
                </GridLayout> -->
                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'Journy' ? ' -selected': '')"
                            @tap="onNavigationItemTap(Journy)">
                    <Label col="0" text.decode="&#xf1da;" class="nt-icon fas"/>
                    <Label col="1" text="Model libary" class="p-r-10"/>
                </GridLayout>
                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'Profile' ? ' -selected': '')"
                            @tap="onNavigationItemTap(Profile)">
                    <Label col="0" text.decode="&#xf2bd;" class="nt-icon fas"/>
                    <Label col="1" text="Profile" class="p-r-10" background-color='red'/>
                </GridLayout>
                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'Support' ? ' -selected': '')"
                            @tap="onNavigationItemTap(Support)">
                    <Label col="0" text.decode="&#xf590;" class="nt-icon fas"/>
                    <Label col="1" text="Support" class="p-r-10"/>
                </GridLayout>
            </StackLayout>
        </ScrollView>
    </GridLayout>
</template>

<script>
import Home from "~/components/Home";
import MyCredit from "~/components/menu/others/MyCredit";
import HwItWorks from "~/components/howto/HowTos";
import Journy from "~/components/menu/others/Journy";
import Support from "~/components/menu/support/Support";
import Profile from "~/components/menu/profile/Profile";
import * as utils from "~/shared/utils";
import SelectedPageService from "~/shared/selected-page-service";
export default {
  mounted() {
    SelectedPageService.getInstance().selectedPage$.subscribe(
      (selectedPage) => (this.selectedPage = selectedPage)
    );
  },
  data() {
    return {
      Home: Home,
      MyCredit: MyCredit,
      HwItWorks,
      Journy: Journy,
      Support: Support,
      Profile: Profile,
      selectedPage: "",
    };
  },
  components: {
    Home,
    MyCredit,
    HwItWorks,
    Journy,
    Support,
    Profile,
  },
  methods: {
    onNavigationItemTap(component) {
      this.$showModal(component, {
        // transition: {
        //   name: "slideLeft", //slideLeft, fade, slideRight, flip
        //   duration: 1000,
        // },
        clearHistory: true,
        fullscreen: true,
        animated: true,
        stretched: true,
      });
      utils.closeDrawer();
    },
    onCloseBtnTap() {
      utils.closeDrawer();
    },
  },
};
</script>

<style scoped lang="scss">
// Start custom common variables
// @import '~@nativescript/theme/scss/variables/blue';
// End custom common variables
// Custom styles
.nt-drawer__header {
  background-color: #ffffff;
  margin-top: 40;
}
.nt-drawer-footnote {
  margin-top: 5;
  color: gray;
  font-size: 10;
}
.nt-drawer__list-item {
  font-weight: 500;
  font-size: 15;
}
.nt-icon {
  font-size: 18;
}
.-selected {
  background-color: inherit;
}
.close-icon {
  // background-color: #ffaaff;
  // padding: 20;
  horizontal-align: left;
  border-radius: 70;
  width: 40;
  height: 40;
  font-size: 15;
  // margin-right: 90;
}
</style>