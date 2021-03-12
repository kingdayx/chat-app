<template>
  <Page
    class="page"
    backgroundSpanUnderStatusBar="true"
    actionBarHidden="false"
    androidStatusBarBackground="#ffffff"
    statusBarStyle="dark"
  >
    <StackLayout>
      <StackLayout class="page-title" orientation="horizontal">
        <Button
          class="close-icon fas"
          @tap="$modal.close"
          text.decode="&#xf00d;"
        >
        </Button>
        <Label class="title-text" text="Contact Support"></Label>
      </StackLayout>
      <StackLayout class="support-image">
        <Image src="res://support" width="250"></Image>
      </StackLayout>
      <StackLayout>
        <Label
          class="menu"
          text="Problem and Solutions"
          @tap="onTap(Faq)"
        ></Label>
        <Label class="hr" text=""></Label>
        <Label
          class="menu"
          text="Write us An E-Mail"
          @tap="onTap(SendEmail)"
        ></Label>
        <Label class="hr" text=""></Label>
        <Label
          class="menu"
          text="Emergency Number"
          @tap="onTap(ContactUs)"
        ></Label>
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<script>
import * as utils from "~/shared/utils";
import SelectedPageService from "~/shared/selected-page-service";
import SendEmail from "./SendEmail";
import Faq from "./Faq";
import ContactUs from "./ContactUs";

export default {
  components: [Faq],
  data() {
    return {
      Faq: Faq,
      ContactUs: ContactUs,
      SendEmail: SendEmail,
    };
  },
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("Support");
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
    onTap(component) {
      this.$showModal(component, {
        fullscreen: true,
        clearhistory: true,
        animated: true,
      });
      // console.log("Button taped ");
      // this.$modal.close();
      // this.$navigateTo(component,{clearHistory:true});
    },
  },
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import "~@nativescript/theme/scss/variables/blue";
// End custom common variables
// Custom styles

.page {
  padding-top: 50;
  // padding-left: 20;
  // padding-right: 20;
  .page-title {
    .title-text {
      vertical-align: middle;
      font-size: 15;
      font-weight: bold;
    }
    .close-icon {
      // background-color: #ffaaff;
      // padding: 20;
      border-radius: 70;
      width: 40;
      height: 40;
      font-size: 15;
      margin-right: 20%;
    }
  }
  .menu {
    text-align: center;
    font-weight: bold;
    font-size: 15;
    margin-top: 10;
    margin-bottom: 8;
  }
  .support-image {
    margin-top: 5%;
    margin-bottom: 8%;
  }
}
</style>