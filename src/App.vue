<template>
  <div class="container text-blue-500">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: "This is a really simple Vue app!"
    };
  }
};
</script>

<style lang="scss" scoped>
$width: 400px;
.container {
  width: $width;
  margin: 50px auto;
  text-align: center;
}
</style>