<template>
  <Page class="page" actionBarHidden="true">
    <StackLayout>
      <StackLayout orientation="horizontal" class="page-title">
        <Button
          text.decode="&#xf00d;"
          class="close-icon fas"
          @tap="$modal.close"
        >
        </Button>
        <Label class="text-center h3" text="Profile"></Label>
        <!-- <Label
          class="text-right h3 text-primary"
          @tap="onTapLang"
          text="Language"
        ></Label> -->
      </StackLayout>
      <StackLayout class="page-content">
        <StackLayout class="profile-items">
          <Label class="h3" text="Gerhard"></Label>
          <Label class="hr" text="Profile"></Label>
          <Label class="h3" text="gerhard@mail.com"></Label>
          <Label class="hr" text="Profile"></Label>
          <Label class="h3 text-muted" text="+47-14545445"></Label>
          <Label class="hr" text="Profile"></Label>
        </StackLayout>

        <StackLayout class="profile-menu">
          <StackLayout orientation="horizontal" @tap="$modal.close">
            <Label class="h3 item-l" text="Language"></Label>
            <Label class="h3 fas item-r" text.decode="&#xf105;"></Label>
          </StackLayout>
          <Label class="hr"></Label>
          <StackLayout orientation="horizontal" @tap="$modal.close">
            <Label class="h3 item-l" text="Documents"></Label>
            <Label class="h3 fas item-r" text.decode="&#xf105;"></Label>
          </StackLayout>
        </StackLayout>
        <StackLayout class="profile-footer">
          <Label text="Choose Payment Method" fontSize="15"></Label>
          <Label class="hr"></Label>
          <Label text="Logout" fontSize="15" @tap="onLogoutTap"></Label>
        </StackLayout>
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<script>
import * as utils from "~/shared/utils";
import SelectedPageService from "~/shared/selected-page-service";
import LangSelector from "~/components/menu/profile/LangSelector";

export default {
  components: [LangSelector],
  data() {
    return {
      LangSelector: LangSelector,
    };
  },
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("Profile");
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
    onTapLang() {
      action("Language", "Close", ["English", "German"]).then((result) => {
        console.log(result);
      });
    },

    onLogoutTap() {},
  },
};
</script>

<style scoped lang="scss">
// Start custom common variables
// @import "~@nativescript/theme/scss/variables";
// End custom common variables
// Custom styles
@import "~/app";

.page {
  padding-top: 50;
  // padding-left: 20;
  // padding-right: 20;
}
.page-content{
   padding-left: 15;
   padding-right: 15;
}
.profile-items {
  margin-top: 8%;
}
.profile-menu {
  margin-top: 8%;
  .item-l {
    vertical-align: middle;
    width: 50%;
  }
  .item-r {
    width: 50%;
    vertical-align: middle;
    text-align: right;
  }
}
.profile-footer {
  margin-top: 19%;
  color: $secondarycolor;
}
.text-primary {
  color: $secondarycolor;
}
.page-title {
  // font-size: 13;
  // font-weight: bold;
  .text-center {
    vertical-align: middle;
  }
  .text-right {
    vertical-align: middle;
    margin-left: 23%;
    // color: red;
  }
  .close-icon {
    border-radius: 70;
    width: 40;
    height: 40;
    margin-right: 25%;
    font-size: 15;
  }
}
</style>