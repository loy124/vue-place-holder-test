<template>
  <div class="list-detail-container">
    <div class>
      <div>{{listDetail}}</div>
    </div>
  </div>
</template>

<script>
import { board } from "../util/axios";
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["listDetail"])
  },
  mounted() {
    this.fetchDetail();
  },
  beforeDestroy() {
    this.SET_LIST_DETAIL("");
  },
  methods: {
    ...mapMutations(["SET_LOADING", "SET_LIST_DETAIL"]),
    fetchDetail() {
      board.fetchDetail(this.$route.params.postId);
    }
  }
};
</script>

<style lang="scss">
.list-detail-container {
  width: 1100px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.3);
}
</style>