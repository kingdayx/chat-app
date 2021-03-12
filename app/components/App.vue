<template>
  <RadSideDrawer
    ref="drawer"
    drawerLocation="Left"
    gesturesEnabled="true"
    :drawerTransition="transition"
  >
    <StackLayout ~drawerContent backgroundColor="#ffffff">
      <slot name="drawerContent" />
    </StackLayout>
    <Frame ~mainContent ref="drawerMainContent">
      <slot name="mainContent" />      
    </Frame>
  </RadSideDrawer>
  <!-- <Page>
        <StackLayout >
            <Label
            text="Input the Code you get"
            textWrap="true"
            @tap="onTap"
            />
            <Label
            text="Scan the Image"
            textWrap="true"
            @tap="onTap"
            />
            <Label
            text="History - List of all past Models"
            textWrap="true"
            @tap="onTap"
            />
        </StackLayout>
    </Page> -->
</template>

<script>
import ARViewer from "./ar/ARViewer";
import { SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
export default {
  components: { ARViewer },
  data() {
    return {
      transition: new SlideInOnTopTransition(),
    };
  },
  methods: {
    // onTap() {
    //   this.$navigateTo(ARViewer, {
    //     animated: true,
    //     transition: {
    //       name: "slide",
    //       duration: 200,
    //       curve: "ease",
    //     },
    //   });
    // },
  },
};
</script>

<style lang="scss">
// @import "~@nativescript/theme/scss/variables/blue";
</style>
