<template>
  <div class="select-list-type-cotainer">
    <div
      class="select-list"
      :class="{'select-active':!gridView}"
      @click="SET_GRID_VIEW(false)"
    >리스트로 보기</div>
    <div
      class="select-grid"
      :class="{'select-active':gridView}"
      @click="SET_GRID_VIEW(true)"
    >그리드로 보기</div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["gridView"])
  },
  methods: {
    ...mapMutations(["SET_GRID_VIEW"])
  }
};
</script>

<style lang="scss">
.select-list-type-cotainer {
  display: flex;
  justify-content: center;
  .select-grid {
    margin-left: 30px;
    cursor: pointer;
  }
  .select-active {
    font-weight: bold;
    cursor: pointer;
  }
}
</style>
