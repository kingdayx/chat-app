<template>
  <Page class="page">
    <StackLayout>
      <StackLayout orientation="horizontal" class="page-title">
        <Button
          text.decode="&#xf00d;"
          class="close-icon fas"
          @tap="$modal.close"
        >
        </Button>
        <Label class="title-text" text="Your Account Balance"></Label>
      </StackLayout>
      <StackLayout class="middle-content">
        <Label class="amount fas" text.decode="&#xf153; 5.50"></Label>
        <Label
          class="amount-info fas"
          text.decode="&#xf153; 5.50 + &#xf153; 0.00 Bonus"
        ></Label>
        <StackLayout class="info">
          <TextView
            class="fas"
            editable="false"
            textWrap="true"
            text.decode="Minimum credit for one ride is 3 &#xf153;. After PayPal payment it can take a few minutes until the credit is credited"
          ></TextView>
        </StackLayout>
        <StackLayout class="hr"></StackLayout>

        <StackLayout class="pakg">
          <Label class="rech-select" text="Select Recharge Amount:"></Label>
          <ScrollView
            class="slide-container"
            orientation="horizontal"
            scrollBarIndicatorVisible="false"
          >
            <StackLayout
              ref="stack"
              orientation="horizontal"
              textAlign="center"
            >
              <Button
                id="sl1"
                class="slide fas"
                text.decode="&#xf153; 3"
                @tap="selectedAmt"
              ></Button>
              <Button
                id="sl2"
                class="fas slide selected-balance"
                text.decode="&#xf153; 10"
                @tap="selectedAmt"
              ></Button>
              <Button
                id="sl3"
                class="slide fas"
                text.decode="&#xf153; 23"
                @tap="selectedAmt"
              ></Button>
              <Button
                id="sl4"
                class="slide fas"
                text.decode="&#xf153; 35"
                @tap="selectedAmt"
              ></Button>
              <Button
                id="sl5"
                class="slide fas"
                text.decode="&#xf153; 45"
                @tap="selectedAmt"
              ></Button>
            </StackLayout>
          </ScrollView>
        </StackLayout>

        <Button
          class="credit-btn btn fas"
          text.decode="Add credit: &#xf153; 10"
        ></Button>
        <StackLayout class="add-voucher">
          <Label>
            <FormattedString>
              <Label text="Do you have a voucher code? "></Label>
              <Label class="text-danger" text="Add Here"></Label>
            </FormattedString>
          </Label>
        </StackLayout>
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<script>
import { Button } from "@nativescript/core";
import * as utils from "~/shared/utils";
import SelectedPageService from "~/shared/selected-page-service";
export default {
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("MyCredit");
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
    selectedAmt(args) {
      var btn = args.object;
      var stack = btn.parent;
      var btnIndex = stack.getChildIndex(btn);
      btn.className += " selected-balance";

      for (var i = 0; i < stack.getChildrenCount(); i++) {
        if (i != btnIndex) {
          var notS = stack.getChildAt(i);
          notS.className = " slide fas";
        }
      }

      //  console.log(stack.getChildren());
      //  console.log(stack.getChildIndex(btn));
    },
  },
};
</script>

<style scoped lang="scss">
// Start custom common variables
// @import "~@nativescript/theme/scss/variables/ruby";
// End custom common variables
// Custom styles
@import "~/app";

.middle-content {
  margin-top: 18%;
}

.page {
  padding-top: 50;
  // padding-left: 15;
  // padding-right: 15;
  // background-color: floralwhite;
  .page-title {
    // font-size: 18;
    // display: inline-block;
    .title-text {
      // text-align: center;
      // display: block;
      vertical-align: middle;
      font-size: 13;
      font-weight: bold;
    }
    .close-icon {
      border-radius: 70;
      width: 40;
      height: 40;
      margin-right: 20%;
      font-size: 15;
    }
  }
  .amount {
    font-size: 30;
    font-weight: bold;
    text-align: center;
  }
  .amount-info {
    margin-top: 20;
    text-align: center;
    font-size: 12;
    color: gray;
  }
  .info {
    TextView {
      text-align: center;
      height: 60;
      font-size: 13;
      margin-bottom: 10;
      color: gray;
      // border-width: 1;
    }
  }
  .pakg {
    text-align: center;
    margin-bottom: 8%;
    // margin-top: 15;
    .rech-select {
      font-size: 13;
      font-weight: bold;
      margin: 15;
    }
    .slide-container {
      width: 290;
      // border-color: #eb0800;
      // border-width: 1;
      .slide {
        display: block;
        border-color: gray;
        text-align: center;
        vertical-align: middle;
        border-width: 1;
        // padding-top: 30;
        width: 80;
        font-size: 18;
        font-weight: bold;
        height: 80;
        margin: 8;
        border-radius: 15;
        color: gray;
      }
    }
  }
  .credit-btn {
    background-color: $secondarycolor;
    border-radius: 40;
    color: $primarycolor;
    height: 40;
  }
  .add-voucher {
    text-align: center;
  }
  .selected-balance {
    border-color: #eb0080;
    // border-width: 1;
    background-color: #fadbec;
    color: #eb0080;
    // opacity: 0;
    // display: block;
    // border-color: gray;
    // text-align: center;
    // vertical-align: middle;
    // // border-width: 1;
    // padding-top: 30;
    // width: 80;
    // font-size: 18;
    // font-weight: bold;
    // height: 80;
    // margin: 8;
    // border-radius: 15;
    // color: gray;
  }
}

.btn {
  background-color: $secondarycolor;
}
</style>