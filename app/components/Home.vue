<template>
  <Page
    class="page home"
    actionBarHidden="true"
    backgroundSpanUnderStatusBar="true"
    androidStatusBarBackground="#ffaa22"
    statusBarStyle="dark"
  >
    <AbsoluteLayout width="*" height="*" backgroundColor="lightgray">
      <Label text="10, 10" width="100%" height="100%" backgroundColor="white" />
      <GridLayout
        columns="*, *, *, *"
        rows="auto, *, *, auto"
        width="100%"
        height="100%"
      >
        <Button
          @tap="onHowToTap"
          class="btn-top"
          text="How to use the App?"
          row="0"
          col="1"
          colSpan="2"
        ></Button>
        <Fab
          text.decode="&#xf0c9;"
          class="fab-button-one fas"
          @tap="onDrawerButtonTap"
          row="1"
          col="3"
        />
        <Fab
          text.decode="&#xf124;"
          class="fab-button-two fas"
          @tap="onRegisterTap"
          row="2"
          col="3"
        />
        <Button
          class="btn-bottom"
          text="Tap to place"
          row="3"
          col="1"
          colSpan="2"
        ></Button>
      </GridLayout>
    </AbsoluteLayout>
  </Page>
</template>

<script>
import * as utils from "~/shared/utils";
import SelectedPageService from "~/shared/selected-page-service";
import HowTos from "~/components/howto/HowTos";
import Login from "~/components/registerAndLogin/Login";
import Confirmation from "~/components/registerAndLogin/Confirmation";
import SignUp from "~/components/registerAndLogin/SignUp";

export default {
  components: [HowTos, Login, Confirmation, SignUp],
  date() {
    return {
      HowTos,
      Login: Login,
      Confirmation: Confirmation,
      SignUp: SignUp,
    };
  },
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("Home");
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

    onHowToTap() {
      this.$showModal(HowTos, {
        fullscreen: true,
        clearHistory: true,
        animated: true,
        stretched: true,
      });
    },
    onRegisterTap() {
      this.$showModal(SignUp, {
        fullscreen: true,
        clearHistory: true,
        animated: true,
        stretched: true,
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "~/app";
// test
.page {
  background-color: gray;
}

.btn-container {
  border-width: 1;
}

.btn-top {
  border-radius: 25;
  color: $secondarycolor;
  font-weight: 500;
  margin-top: 40;
  height: 40;
  width: 200;
  android-elevation: 5;
}

.btn-bottom {
  background-color: $secondarycolor;
  color: $primarycolor;
  border-radius: 25;
  font-weight: 500;
  margin-bottom: 15;
}

.fab-button-one {
  height: 50;
  width: 50;
  font-size: 5;
  margin-bottom: 5;
  color: $secondarycolor;
  background-color: $primarycolor;
  vertical-align: bottom;
}

.fab-button-two {
  height: 50;
  width: 50;
  font-size: 5;
  margin-top: 5;
  color: $secondarycolor;
  background-color: $primarycolor;
  vertical-align: top;
}
</style>
