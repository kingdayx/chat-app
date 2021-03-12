<template>
  <Page>
    <GridLayout>
      <AR
        trackingMode="IMAGE"
        debugLevel="FEATURE_POINTS"
        :planeMaterial="planeMaterial"
        planeOpacity="0.4"
        planeDetection="HORIZONTAL"
        showStatistics="false"
        @arLoaded="arLoaded"
        @sceneTapped="sceneTapped"
        @planeTapped="planeTapped"
        @planeDetected="planeDetected"
      >
      </AR>
      <GridLayout rows="auto" columns="*, auto" verticalAlignment="top">
        <Label
          row="0"
          col="0"
          text="Tap on a plane to start!"
          class="ar-text"
          textWrap="true"
        />
        <Label
          row="0"
          col="1"
          text="Clear"
          class="ar-button"
          @tap="clearModels()"
        />
      </GridLayout>
    </GridLayout>
  </Page>
</template>
<script>
import { Color } from "tns-core-modules/color";
import { isIOS, isAndroid } from "tns-core-modules/platform";
export default {
  data() {
    return {
      planeMaterial: new Color("white"),
      objects: [],
    };
  },
  methods: {
    arLoaded(ARLoadedEventData) {
      console.log(">> AR Loaded!");
      this.isLoaded = true;
    },
    planeDetected(ARPlaneDetectedEventData) {
      console.log(">> plane Detected!");
    },
    clearModels() {
      this.objects.forEach((model) => {
        model.remove();
      });
    },
    planeTapped(ARPlaneTappedEventData) {
      console.log(">> plane Tapped!");
      const arPlane = ARPlaneTappedEventData.object;
      const position = ARPlaneTappedEventData.position;
      console.log(position);
      const sphereRadius = 0.1;
      arPlane
        .addSphere({
          radius: sphereRadius,
          position: {
            x: position.x,
            y: position.y + sphereRadius,
            z: position.z - 0.5, //show it further away from camera
          },
          rotation: isIOS ? { x: -20, y: 0, z: 0 } : { x: 0, y: 100, z: -20 },
          materials: [
            {
              diffuse: { contents: "SevenStar.fw.png", wrapMode: "Clamp" },
            },
          ],
          onLongPress: (interaction) => {
            console.log("Sphere was longpressed");
            this.objects.splice(this.objects.indexOf(interaction.node), 1);
            interaction.node.remove();
          },
          onTap: (interaction) => {
            console.log(
              "Sphere was tapped at coordinates " +
                interaction.touchPosition.x +
                " x " +
                interaction.touchPosition.y
            );
            const rotateDegree = 1;
            const radius = 1;
            const fps = 120;
            if (!interaction.node.animTimer) {
              //start the animation
              interaction.node.animTimer = setInterval(() => {
                interaction.node.walkDegrees += 1 / fps;
                if (interaction.node.walkDegrees <= 10) {
                  interaction.node.newX =
                    interaction.node.position.x -
                    (Math.cos(interaction.node.walkDegrees) *
                      radius *
                      interaction.node.walkDegrees) /
                      10;
                  interaction.node.newY = interaction.node.position.y;
                  interaction.node.newZ =
                    interaction.node.position.z -
                    (Math.sin(interaction.node.walkDegrees) *
                      radius *
                      interaction.node.walkDegrees) /
                      10;
                } else {
                  interaction.node.newX =
                    interaction.node.position.x -
                    Math.cos(interaction.node.walkDegrees) * radius;
                  interaction.node.newY = interaction.node.position.y;
                  interaction.node.newZ =
                    interaction.node.position.z -
                    Math.sin(interaction.node.walkDegrees) * radius;
                }
                interaction.node.moveTo({
                  x: interaction.node.newX,
                  y: interaction.node.newY,
                  z: interaction.node.newZ,
                });
                interaction.node.rotateBy({
                  x: 0,
                  y: rotateDegree,
                  z: 0,
                });
              }, 1000 / fps);
            } else {
              //stop the animation
              clearInterval(interaction.node.animTimer);
              interaction.node.animTimer = null;
            }
          },
          draggingEnabled: false, //Android only
          rotatingEnabled: false, //Android only
          scalingEnabled: false, //Android only
          segmentCount: 100,
          mass: 0, //iOS only
        })
        .then((arNode) => {
          console.log("Sphere successfully added");
          arNode.walkDegrees = 0;
          this.objects.push(arNode);
        });
    },
    sceneTapped(ARSceneTappedEventData) {
      console.log(">> scene Tapped!");
      const arScene = ARSceneTappedEventData.object;
      const position = ARSceneTappedEventData.position;
      console.log(position);
    },
  },
};
</script>

<style scoped lang="scss">
@import "~@nativescript/theme/scss/variables/blue";
.ar-text {
  margin: 10;
  color: red;
  background-color: transparent;
  font-size: 20;
}

.ar-button {
  margin: 10;
  background-color: dodgerblue;
  color: white;
  border-radius: 5;
  padding: 5;
  font-size: 20;
}
</style>
