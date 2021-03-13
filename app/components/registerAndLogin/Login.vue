<template>
  <Page class="page" actionBarHidden="true">
    <StackLayout>
      <StackLayout>
        <Image width="230" class="logo" src="res://skooty_logo"></Image>
      </StackLayout>
      <StackLayout>
        <Label class="header" text="Login"></Label>
      </StackLayout>
      <StackLayout orientation="horizontal" marginTop="20">
        <Image src="res://germany" width="50" class="flag"></Image>
        <TextField
          width="60"
          text="+49"
          hint=""
          keyboardType="number"
          editable="false"
        />
        <TextField text="" width="100%" hint="00000000" keyboardType="number" />
      </StackLayout>
      <StackLayout marginTop="200">
        <Button
          :isEnabled="enabled"
          text="Continue"
          class="btn"
          @tap="onTapSignIn"
        ></Button>
        <Label class="text-center signup" @tap="onTapSignup">
          <FormattedString>
            <Label text="You do not have account yet? "></Label>
            <Label class="text-danger" text="Sign Up Here"></Label>
          </FormattedString>
        </Label>
      </StackLayout>
    </StackLayout>
  </Page>
</template>
<script>
import SignUp from "./SignUp";
import Confirmation from "./Confirmation";
var firebase = require("@nativescript/firebase");
export default {
  components: [SignUp, Confirmation],
  data() {
    return {
      items: [],
      signUp: SignUp,
      Confirmation: Confirmation,
      enabled: true
    };
  },
  mounted() {},
  methods: {
    onTapSignIn() {
      // this.$showModal(Confirmation, {
      //   fullscreen: true,
      //   animated: true,
      //   clearhistory: true,
      // });
      console.log("you click signin button");
      firebase.firebase
        .login({
          type: firebase.firebase.LoginType.PHONE,
          phoneOptions: {
            phoneNumber: "+923457941246",
            verificationPrompt: "The received verification code",
            // Optional
            android: {
              timeout: 30 // The maximum amount of time you are willing to wait for SMS auto-retrieval to be completed by the library
            }
          }
        })
        .then(
          function(result) {
            JSON.stringify(result);
          },
          function(errorMessage) {
            console.log(errorMessage);
          }
        );
    },
    onTapSignup() {
      this.$showModal(SignUp, {
        fullscreen: true,
        animated: true,
        clearhistory: true
      });
      console.log("you click signup");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~/app";
.page {
  // padding-top: 150;
  padding-left: 20;
  padding-right: 20;
  .header {
    width: 100%;
    text-align: center;
    margin-top: 8%;
    font-size: 40;
    font-weight: bold;
    font-family: "Rubik", "Rubik-Bold";
  }
  .logo {
    margin-top: 20%;
  }
  TextField {
    // height: 50;
    font-size: 20;
    padding: 8;
    margin: 2;
    placeholder-color: gray;
  }
  .btn {
    background-color: $secondarycolor;
    color: $primarycolor;
    border-radius: 25;
    font-weight: 500;
    font-size: 18;
    height: 40;
    width: 100%;
  }
  .signup {
    margin-top: 5;
    // font-weight: bold;
    font-size: 15;
    font-family: "Rubik" "Rubik-Regular";
  }
  .flag {
    border-bottom-width: 1;
    border-bottom-color: #ccc8c8;
    margin-bottom: 2;
    margin-right: 2;
  }
}
</style>
