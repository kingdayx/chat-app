<template>
  <Page class="page">
    <StackLayout>
      <StackLayout orientation="horizontal">
        <Label text="English" class="lang-label"></Label>
        <check-box
          :checked="isChecked"
          @checkedChange="isChecked = $event.value"
          boxType="circle"
        />
      </StackLayout>
      <Label class="hr"></Label>
      <StackLayout orientation="horizontal">
        <Label text="English" class="lang-label"></Label>
        <check-box
          :checked="isChecked"
          @checkedChange="isChecked = $event.value"
          boxType="circle"
        />
      </StackLayout>
      <Button clas="btn" text="Close" @tap="$modal.close"></Button>
    </StackLayout>
  </Page>
</template>
<script>
export default {
  data() {
    return {
      isChecked: true,
    };
  },
};
</script>
<style lang="scss" scoped>
.page {
  padding: 25;
  //   height: 150;
}
.lang-label {
  width: 80%;
  vertical-align: middle;
}
</style>