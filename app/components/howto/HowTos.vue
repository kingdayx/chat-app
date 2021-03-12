<template>
  <Page class="page">
    <StackLayout>
      <StackLayout class="page-title" orientation="horizontal">
        <Button text.decode="&#xf00d;" class="close-icon fas" @tap="$modal.close">
          <!-- <FormattedString>
            <Span text.decode="&#xf00d;" class="fas"> </Span>
          </FormattedString> -->
        </Button>
        <Label class="title-text" text="Instructions"></Label>
      </StackLayout>
      <StackLayout>
        <TabView
          height="85%"
          :selectedIndex="selectedIndex"
          @selectedIndexChange="indexChange"
        >
          <TabViewItem title="How To Drive">
            <GridLayout class="carousel-layout-fix">
              <Carousel
                id="carousel"
                @pageChanged="myChangeEvent"
                ios:indicatorOffset="0,-30"
                ios:finite="true"
                ios:bounce="false"
                showIndicator="true"
                indicatorAnimation="SWAP"
                indicatorColor="#66ccff"
                indicatorColorUnselected="#cceeff"
                marginTop="25"
                width="100%"
                debug="true"
              >
                <CarouselItem id="slide1" verticalAlignment="middle">
                  <Image src="res://slide1"></Image>
                  <Label
                    class="slide-caption"
                    text="Unlock"
                    marginTop="30"
                    horizontalAlignment="center"
                  ></Label>
                  <Label
                    class="slide-detail"
                    text="Scan the QR-code for the skooty and unlock it - alternatively you can also select a skooty in your area"
                    textWrap="true"
                    margin="20"
                    ios:visibility="collapsed"
                  />
                </CarouselItem>
                <CarouselItem id="slide2" verticalAlignment="middle">
                  <Image src="res://slide2"></Image>
                  <Label
                    class="slide-caption"
                    text="Off You Go"
                    marginTop="30"
                    horizontalAlignment="center"
                  ></Label>
                  <Label
                    class="slide-detail"
                    text="Push yourself with a fub - use the right Go lever to accelerate and hand brakes on both sides for braking"
                    textWrap="true"
                    margin="20"
                  ></Label>
                </CarouselItem>

                <CarouselItem id="slide3" verticalAlignment="middle">
                  <Image src="res://slide3"></Image>
                  <Label
                    class="slide-caption"
                    text="Traffic Rules"
                    textWrap="true"
                    horizontalAlignment="center"
                    marginTop="30"
                  />
                  <Label
                    class="slide-detail"
                    text="Ride only on bike paths or on the road, never on footpaths or dangerous areas"
                    textWrap="true"
                    margin="20"
                    horizontalAlignment="center"
                  ></Label>
                </CarouselItem>
              </Carousel>
            </GridLayout>
          </TabViewItem>
          <TabViewItem title="How To Park">
            <GridLayout class="carousel-layout-fix">
              <Carousel
                id="carousel"
                @pageChanged="myChangeEvent"
                ios:indicatorOffset="0,-30"
                ios:finite="true"
                ios:bounce="false"
                showIndicator="true"
                indicatorAnimation="SWAP"
                indicatorColor="#66ccff"
                indicatorColorUnselected="#cceeff"
                marginTop="25"
                width="100%"
                debug="true"
              >
                <CarouselItem id="slide1" verticalAlignment="middle">
                  <Image src="res://slide4"></Image>
                  <Label
                    class="slide-caption"
                    text="Rules"
                    marginTop="30"
                    horizontalAlignment="center"
                  ></Label>
                  <Label
                    class="slide-detail"
                    text="Stick to the rules"
                    textWrap="true"
                    margin="20"
                    horizontalAlignment="center"
                    ios:visibility="collapsed"
                  />
                </CarouselItem>
                <CarouselItem id="slide2" verticalAlignment="middle">
                  <Image src="res://slide5"></Image>
                  <Label
                    class="slide-caption"
                    text="Park Consciously!"
                    marginTop="30"
                    horizontalAlignment="center"
                  ></Label>
                  <Label
                    class="slide-detail"
                    text="If possible, park only at one Bicycle stand. If not park on edge of the walkway on the road, do NOT block Walkways, doors or ramps."
                    textWrap="true"
                    horizontalAlignment="center"
                    margin="20"
                  ></Label>
                </CarouselItem>

                <CarouselItem id="slide3" verticalAlignment="middle">
                  <!-- <Image src="res://slide3"></Image>   -->
                  <Label
                    class="slide-caption"
                    text="Missing Information"
                    textWrap="true"
                    horizontalAlignment="center"
                    marginTop="30"
                  />
                  <Label
                    class="slide-detail"
                    text="No Information Fond From Video"
                    textWrap="true"
                    margin="20"
                    horizontalAlignment="center"
                  ></Label>
                </CarouselItem>
              </Carousel>
            </GridLayout>
          </TabViewItem>
        </TabView>
      </StackLayout>
      <Button text="Continue" class="btn"></Button>
    </StackLayout>
  </Page>
</template>
<script>
export default {
  data() {
    return {
      selectedIndex: 0,
    };
  },
  methods: {
    indexChange: function (args) {
      let newIndex = args.value;
      console.log("Current tab index: " + newIndex);
    },

    onTextRecognitionResult() {
      console.log("onTextRecognitionResult");
    },
    myChangeEvent: function (args) {
      var changeEventText = "Page changed to index: " + args.index;
      console.log(changeEventText);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../app";

.btn {
  background-color: $secondarycolor;
  color: $primarycolor;
  border-radius: 25;
  font-weight: 500;
  top: 550;
  left: 80;
  height: 40;
  width: 90%;
}

.slide-detail {
  font-weight: 500;
  font-size: 14;
}
.slide-caption {
  font-weight: 500;
  font-size: 20;
}
#slide1 {
  //   background: linear-gradient(45deg, #f06f7e, #f34a30);
  vertical-align: center;
}

#slide2 {
  //   background: linear-gradient(-45deg, #1d976c, #93f9b9);
  vertical-align: center;
}

#slide3 {
  //   background: linear-gradient(45deg, #1d2b64, #f8cdda);
  vertical-align: center;
}

#slide4 {
  //   background: linear-gradient(tobottom, #003973, #e5e5be);
  vertical-align: center;
}
.carousel-layout-fix {
  padding: 0.1 0;
  margin: -0.1 0;
}

.page {
  padding-top: 50;
  //   padding-left: 25;
  //   padding-right: 25;
  .slide {
    width: 350;
  }
  .page-title {
    .title-text {
      vertical-align: middle;
      //   horizontal-align: center;
      font-size: 15;
      font-weight: bold;
    }
    .close-icon {
      // background-color: #fafafa;
      margin-left: 15;
      border-radius: 70;
      font-size: 15;
      width: 40;
      height: 40;
      margin-right: 100;
    }
  }
  .menu {
    text-align: center;
    font-weight: bold;
    font-size: 15;
    margin-top: 10;
    margin-bottom: 10;
  }
  .support-image {
    margin-top: 50;
    margin-bottom: 80;
  }
}
</style>