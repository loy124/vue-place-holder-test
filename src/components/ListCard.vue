<template>
  <div :class="{'list-container-grid' : gridView}">
    <div @click="moveDetail(li.id)" v-for="(li,index) in list" :key="index" class="list-wrapper">
      <div class="list-title-header">
        <div class="list-title">{{li.title}}</div>
        <div class="list-writer-name">작성자: {{li.name}}</div>
      </div>
      <hr />
      <div class="list-content">
        <div class="list-content-image-wrapper">
          <img :src="li.image" />
        </div>
        <div class="list-content- body">{{li.body}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["gridView", "select8", "select16", "list"])
  },
  methods: {
    ...mapMutations(["SET_LOADING"]),
    moveDetail(id) {
      this.$router.push(`/list/${id}`);
    }
  }
};
</script>

<style lang="scss">
.list-container-grid {
  display: flex;
  flex-wrap: wrap;
}
.list-wrapper {
  width: 400px;
  border: 1px solid #dddddd;
  margin: 30px auto;
  padding: 0 0 30px 0;
  box-shadow: rgba(188, 196, 219, 0.77) 5px 5px 13px 0px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
  .list-title-header {
    padding: 20px 0;
    text-align: center;
  }
  .list-writer-name {
    margin-top: 10px;
    text-align: right;
    margin-right: 30px;
  }
  .list-content {
    padding: 10px 20px;
    .list-content-image-wrapper {
      width: 150px;
      height: 150px;
      margin: 0 auto;
    }
    .list-content-image-wrapper > img {
      width: 100%;
      height: 100%;
    }

    .list-content-body {
      margin-top: 30px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
</style>

