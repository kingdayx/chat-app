<template>
  <Page class="page" actionBarHidden="true">
    <StackLayout>
      <StackLayout>
        <Image width="180" src="res://skooty_logo"></Image>
      </StackLayout>
      <StackLayout class="page-title">
        <Label text="Signup" class="text-center"></Label>
      </StackLayout>
      <StackLayout class="form-items">
        <TextField class="input" hint="Enter Your Name"></TextField>
        <TextField class="input" hint="E-mail"></TextField>
        <StackLayout orientation="horizontal">
          <Image src="res://germany" width="50" class="flag"></Image>
          <TextField
            width="60"
            text="+49"
            class="input"
            hint=""
            keyboardType="number"
            editable="false"
          />
          <TextField
            text=""
            width="100%"
            class="input"
            hint="00000000"
            keyboardType="number"
          />
        </StackLayout>
        <Label textWrap="true" class="text-center signup">
          <FormattedString>
            <Label text="By registering, you give your consent to our "></Label>
            <Label text="terms of business " color="#ff008e"></Label>
            <Label text="and "></Label>
            <Label text="data protection regulations" color="#ff008e"></Label>
          </FormattedString>
        </Label>
      </StackLayout>
      <StackLayout class="signup-footer">
        <Button
          class="btn"
          text="Continue"
          @tap="onTapSignup"
          :isEnabled="enabled"
        ></Button>
        <Label class="text-center signup" @tap="onTapSignIn">
          <FormattedString>
            <Label text="You already have and Account ? "></Label>
            <Label text="Login " color="#ff008e"></Label>
          </FormattedString>
        </Label>
      </StackLayout>
    </StackLayout>
  </Page>
</template>
<script>
import Login from "./Login";
import Confirmation from "./Confirmation";
export default {
  components: [Login, Confirmation],
  data() {
    return {
      enabled: false,
      Login: Login,
      Confirmation: Confirmation,
    };
  },
  mounted() {},
  methods: {
    onTapSignIn() {
      this.$showModal(Login, {
        fullscreen: true,
        clearhistory: true,
        animated: true,
      });
      console.log("you click signin button");
    },
    onTapSignup() {
      this.$showModal(Confirmation, {
        fullscreen: true,
        clearhistory: true,
        animated: true,
      });
      console.log("you click signup");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~/app";
.page {
  padding-top: 85%;
  padding-left: 15;
  padding-right: 15;
  .page-title {
    font-size: 35;
    font-weight: bold;
    font-family: 'Rubik' 'Rubik-Bold';
    margin-top: 7%;

  }
  .input {
    // height: 50;
    font-size: 16;
    font-family: 'Rubik' 'Rubik-Light';
    padding: 8;
    margin: 2;
    placeholder-color: gray;
  }
  .flag {
    border-bottom-width: 1;
    border-bottom-color: #ccc8c8;
    margin-bottom: 2;
    // margin-right: 2;
  }
  .signup {
    margin-top: 3%;
    font-family: 'Rubik' 'Rubik-Regular';
    font-weight: bold;
    font-size: 15;
  }
  .signup-footer{
      margin-top:11%;
  }
  .form-items{
      margin-top: 5%;
  }
  .btn {
    font-family: 'Rubik' 'Rubik-Bold';
    background-color: $secondarycolor;
    color: $primarycolor;
    border-radius: 25;
    // font-weight: bold;
    font-size: 18;
    height: 40;
    width: 100%;
  }
}
</style>