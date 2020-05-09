<template>
  <div class="select-type-container">
    <div
      @click="selectActive(true,false)"
      class="select-8"
      :class="{'select-active' : select8}"
    >8개씩 불러오기</div>

    <div
      @click="selectActive(false,true)"
      class="select-16"
      :class="{'select-active' : select16}"
    >16개씩 불러오기</div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["select8", "select16"])
  },
  methods: {
    ...mapMutations(["SET_SELECT8", "SET_SELECT16"]),
    selectActive(select8, select16) {
      this.SET_SELECT8(select8);
      this.SET_SELECT16(select16);
    }
  }
};
</script>
<style lang="scss">
.select-type-container {
  width: 100%;
  display: flex;
  justify-content: center;
  .select-active {
    font-weight: bold;
  }
  .select-8 {
    cursor: pointer;
  }
  .select-16 {
    margin-left: 30px;
    cursor: pointer;
  }
  .select-zero {
    margin-left: 30px;
  }
}
</style>