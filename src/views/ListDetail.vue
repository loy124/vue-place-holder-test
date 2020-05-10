<template>
  <div class="list-detail-container">
    <div class="list-detail-wrapper">
      <div class="list-detail-title">{{listDetail.title}}</div>
      <div class="list-detail-content">
        <div class="list-detail-image">
          <img v-if="listDetail.image" :src="listDetail.image" alt="이미지없음" />
        </div>
        <div class="list-detail-body">{{listDetail.body}}</div>
      </div>
    </div>
    <hr />
    <Comments v-if="listDetail.comments" :comments="listDetail.comments"></Comments>
  </div>
</template>

<script>
import Comments from "../components/Comments";
import { board } from "../util/axios";
import { mapState, mapMutations } from "vuex";
export default {
  components: {
    Comments
  },
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
  max-width: 1100px;
  margin: 91px auto 0 auto;
  padding: 10px 20px;
  .list-detail-wrapper {
    min-height: 400px;

    .list-detail-title {
      padding: 10px 0;
      text-align: center;
    }
    .list-detail-content {
      margin: 20px 0;
    }
    .list-detail-image {
      text-align: center;
    }

    .list-detail-body {
      margin-top: 50px;
      margin: 50px auto 0 auto;
      line-height: 20px;
      max-width: 600px;
    }
  }
}
@media screen and (max-width: 768px) {
  .list-detail-body {
    margin-top: 50px;
    padding: 0 20px;
    line-height: 20px;
  }
}
</style>