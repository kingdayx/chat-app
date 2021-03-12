<template>
  <Page class="page" actionBarHidden="true">
    <StackLayout>
      <StackLayout marginTop="50">
        <Label class="header" text="Telephone Confirmation"></Label>
      </StackLayout>
      <StackLayout class="message">
        <Label
          class="text-center"
          fontSize="16"
          textWrap="true"
          text="Enter the code sent by SMS on +49 12345678901"
        ></Label>
      </StackLayout>

      <StackLayout orientation="horizontal" marginTop="10">
        <TextField
          text=""
          hint="0"
          keyboardType="number"
          maxLength="1"
          returnKeyType="next"
        />
        <TextField
          text=""
          hint="0"
          keyboardType="number"
          maxLength="1"
          returnKeyType="next"
        />
        <TextField
          text=""
          hint="0"
          keyboardType="number"
          maxLength="1"
          returnKeyType="next"
        />
        <TextField
          text=""
          hint="0"
          keyboardType="number"
          maxLength="1"
          returnKeyType="next"
        />
        <TextField
          text=""
          hint="0"
          keyboardType="number"
          maxLength="1"
          returnKeyType="next"
        />
        <TextField
          text=""
          hint="0"
          keyboardType="number"
          maxLength="1"
          returnKeyType="done"
        />
      </StackLayout>
      <StackLayout marginTop="10">
        <Label
          fontSize="16"
          text="Resend Code : 54"
          class="text-center"
        ></Label>
      </StackLayout>
      <StackLayout class="bottom-bar">
        <Button text="Confirm" class="btn" @tap="onTapConfirm"></Button>
      </StackLayout>
    </StackLayout>
  </Page>
</template>
<script>
export default {
  methods: {
    onTapConfirm() {
      console.log("you click confirm button");
    },
    onTapSignup() {
      console.log("you click signup");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~/app";
.bottom-bar {
  margin-top: 28%;
}
.message {
  margin-top: 15%;
}
.page {
  padding-top: 50;
  padding-left: 20;
  padding-right: 20;
  .header {
    width: 100%;
    text-align: center;
    font-size: 15;
    font-weight: 500;
  }
  TextField {
    background-color: lightgray;
    font-size: 25;
    padding-left: 17;
    padding-right: 17;
    padding-top: 28;
    padding-bottom: 28;
    margin: 0.5%;
    border-width: 1;
    border-radius: 10;
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
    font-weight: bold;
    font-size: 15;
  }
}
</style>