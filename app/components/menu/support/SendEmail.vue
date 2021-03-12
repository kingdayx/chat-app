<template>
  <Page class="page">
    <StackLayout>
      <StackLayout class="page-title" orientation="horizontal">
        <Button
          class="close-icon fas"
          @tap="$modal.close"
          text.decode="&#xf00d;"
        >
        </Button>
        <Label class="title-text" text="Write Email"></Label>
      </StackLayout>
    </StackLayout>
  </Page>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "~/app";
.page {
  padding-top: 50;
  padding-left: 20;
  padding-right: 20;
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
}
</style>