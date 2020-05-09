<template>
  <div class="lds-facebook" v-if="loading">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["loading"])
  }
};
</script>

<style lang="scss">
.lds-facebook {
  display: inline-block;
  position: fixed;
  z-index: 999;
  width: 64px;
  height: 64px;
  top: 47%;
  left: 47%;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 6px;
  width: 13px;
  background: #d9454d;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  &:nth-child(1) {
    left: 6px;
    animation-delay: -0.24s;
  }
  &:nth-child(2) {
    left: 26px;
    animation-delay: -0.12s;
  }
  &:nth-child(3) {
    left: 45px;
    animation-delay: 0;
  }
}

@keyframes lds-facebook {
  0% {
    top: 6px;
    height: 51px;
  }
  50%,
  100% {
    top: 19px;
    height: 26px;
  }
}
</style>