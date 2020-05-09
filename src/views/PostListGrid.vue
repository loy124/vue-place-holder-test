<template>
  <div>
    <!-- <SelectType /> -->
    <div class="select-list-count">총 글의 갯수: {{list.length}}</div>
    <ListCard />
    <!-- <div v-for="(li,index) in list" :key="index" class="list-wrapper">
      <div class="list-title-header">
        <div class="list-title">{{li.title}}</div>
        <div class="list-writer-name">작성자: {{li.name}}</div>
      </div>
      <hr />
      <div class="list-content">
        <div class="list-content-image-wrapper">
          <img :src="li.image" />
        </div>
        <div class="list-content-body">{{li.body}}</div>
      </div>
    </div>-->
  </div>
</template>

<script>
import SelectType from "../components/SelectType";
import ListType from "../components/ListType";
import ListCard from "../components/ListCard";
import { board } from "../util/axios";
import { mapState } from "vuex";
export default {
  components: {
    SelectType,
    ListType,
    ListCard
  },
  data() {
    return {
      // select: { select8: true, select16: false }
    };
  },
  computed: {
    ...mapState(["select8", "select16", "list"])
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    // if (sessionStorage.getItem("listSelect")) {
    //   this.select = JSON.parse(sessionStorage.getItem("listSelect"));
    // }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 4
      ) {
        //리스트 보기 기능, 포스트갯수는 세션에 저장하기
        let count = 8;
        if (this.select16) count = 16;
        if (sessionStorage.getItem("postCount")) {
          if (this.select8) {
            count = Number(sessionStorage.getItem("postCount")) + 8;
          } else if (this.select16) {
            count = Number(sessionStorage.getItem("postCount")) + 16;
          }
          board.fetchList(0, count).then(async res => {
            await sessionStorage.setItem("postCount", count);
          });
        }
      }
    }
  }
};
</script>

<style lang="scss">
</style>

