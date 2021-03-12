<template>
  <Page class="page" actionBarHidden="true">
    <StackLayout>
      <StackLayout class="page-title" orientation="horizontal">
        <Button
          text.decode="&#xf00d;"
          class="close-icon fas"
          @tap="$modal.close"
        >
        </Button>
        <Label class="title-text" text="How It Works"></Label>
      </StackLayout>
      <StackLayout>
        <ListView for="item in listOfItems" @itemTap="onItemTap">
          <v-template>
            <GridLayout rows="auto,auto,*" columns="auto,*" class="items-list">
              <Label :text="item.miles" row="0" col="0" class="w-50 miles" />
              <Label
                :text="item.time"
                row="1"
                col="0"
                class="w-50 text-muted time"
              />
              <Label
                :text="'\uf153 '+ item.cost"
                row="0"
                col="1"
                class="w-50 text-right cost fas"
              />
              <Label text.decode="&#xf105;" row="1" col="1" class="fas w-50 text-right" fontSize="14" />
            </GridLayout>
            <!-- <StackLayout orientation="horizontal">
              <StackLayout>
                <Label :text="item.text" />
                <Label :text="item.id" />
              </StackLayout>
              <StackLayout>
                <Label :text="item.text" />
                <Label :text="item.id" />
              </StackLayout>
            </StackLayout> -->
          </v-template>

          <!-- <v-template if="$odd">
            <Label :text="item.text" color="red" />
          </v-template> -->
        </ListView>
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<script>
import * as utils from "~/shared/utils";
import SelectedPageService from "~/shared/selected-page-service";
export default {
  data() {
    return {
      listOfItems: [
        { id: 1, miles: "0.16 Km/2 min", time: "25.10.20 09:56", cost: "1.38" },
        { id: 2, miles: "0.18 Km/2 min", time: "26.10.20 09:56", cost: "2.36" },
        { id: 3, miles: "0.19 Km/2 min", time: "24.10.20 09:56", cost: "3.66" },
      ],
    };
  },
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("HwItWorks");
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
    onItemTap(event) {
      console.log(event.index);
      console.log(event.item);
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
      //   horizontal-align: center;
      font-size: 15;
      font-weight: bold;
    }
    .close-icon {
      // background-color: #fafafa;
      // margin-left: ;
      border-radius: 70;
      font-size: 15;
      width: 40;
      height: 40;
      margin-right: 25%;
    }
  }
  .items-list {
    .w-50 {
      width: 50%;
    }
    .cost{
      font-size: 18;
      font-weight: bold;
    }
    .time{
      font-size: 14;
    }
    .miles{
      font-size: 18;
    }

  }
}
</style>