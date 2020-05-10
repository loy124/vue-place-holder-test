<template>
  <div class="nav-bar">
    <div>{{$route.name}}</div>
    <ListType v-if="$route.name === 'Main'" />
    <SelectType v-if="$route.name === 'Main'" />
  </div>
</template>

<script>
import SelectType from "./SelectType";
import ListType from "./ListType";
export default {
  components: {
    SelectType,
    ListType
  }
};
</script>

<style lang="scss">
.nav-bar {
  height: 50px;
  padding: 20px 30px;
  position: fixed;
  z-index: 99;
  top: 0;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #dddddd;

  .nav-link-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 10px;
    .nav-link {
      color: #222222;
    }

    .nav-link2 {
      margin-left: 40px;
    }
  }
}
</style>