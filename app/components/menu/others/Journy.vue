<template>
  <Page
    class="page"
    backgroundSpanUnderStatusBar="true"
    actionBarHidden="false"
    androidStatusBarBackground="#ffffff"
    statusBarStyle="dark"
  >
    <!-- <ActionBar class="action-bar">            
            <NavigationButton ios:visibility="collapsed" icon="res://menu" @tap="onDrawerButtonTap"/>
            
            <ActionItem icon="res://menu"
                        android:visibility="collapsed"
                        @tap="onDrawerButtonTap"
                        ios.position="left"/>
            <Label class="action-bar-title" text="Journy"/>
        </ActionBar>

        <GridLayout class="page__content">
            <Label class="page__content-icon fas" text.decode="&#xf002;"/>
            <Label class="page__content-placeholder" :text="message"/>
        </GridLayout> -->
    <StackLayout>
      <StackLayout class="page-title" orientation="horizontal">
        <Button text.decode="&#xf00d;" class="close-icon fas" @tap="$modal.close">
          <!-- <FormattedString>
            <Span text.decode="&#xf00d;" class="fas"> </Span>
          </FormattedString> -->
        </Button>
        <Label class="title-text" text="Journy"></Label>
      </StackLayout>
      <StackLayout class="support-image">
        <Image src="res://skooty_logo" width="250"></Image>
      </StackLayout>
      <StackLayout>
        <Label class="menu  big-text" text="No Ride So Far"></Label>
        <Label class="menu  mt-20" text="what were you waiting for"></Label>
        <Label class="menu" text="Try it"></Label>
        <!-- <Label class="hr" text=""></Label>
        <Label class="menu" text="Emergency Number"></Label> -->
      </StackLayout>
      <StackLayout>
        <Button
          class="credit-btn btn"
          text="Find Your SKOOTY in your near"
        ></Button>
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<script>
import * as utils from "~/shared/utils";
import SelectedPageService from "~/shared/selected-page-service";
export default {
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("Journy");
  },
  computed: {
    message() {
      return "<!-- Page content goes here -->";
    },
  },
  methods: {
    onDrawerButtonTap() {
      utils.showDrawer();
    },
  },
};
</script>

<style scoped lang="scss">
// Start custom common variables
// @import "~@nativescript/theme/scss/variables/blue";
// End custom common variables
// Custom styles
@import "~/app";

.page {
  padding-top: 50;
  // padding-left: 20;
  // padding-right: 20;
  .page-title {
    .title-text {
      vertical-align: middle;
      text-align: center;
      font-size: 15;
      font-weight: bold;
    }
    .close-icon {
      // background-color: #ffffff;
      // padding: 20;
      border-radius: 70;
      font-size: 15;
      width: 40;
      height: 40;
      margin-right: 28%;
      // box-shadow: 1 grey;
    }
  }
  .menu {
    text-align: center;
    font-weight: bold;
    font-size: 15;
    // margin-top: 10;
    // margin-bottom: 10;
  }
  .support-image {
    margin-top: 20%;
    margin-bottom: 8%;
  }
  .credit-btn {
    // background-color: #eb0080;
    border-radius: 40;
    color: $primarycolor;
    height: 40;
    margin-top: 67%;
  }
  .btn {
      background-color:$secondarycolor;
  }
  .big-text{
    font-weight: 500;
    font-size: 30;
  }

  .mt-20{
    margin-top: 20;
  }
}
</style>