<template>
  <div>
    <div class="select-list-count">총 글의 갯수: {{list.length}}</div>
    <ListCard />
  </div>
</template>

<script>
import ListCard from "../components/ListCard";
import { board } from "../util/axios";
import { mapState, mapMutations } from "vuex";
export default {
  components: {
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
    ...mapMutations(["SET_LOADING"]),
    onScroll() {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 4
      ) {
        this.SET_LOADING(true);
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
            this.SET_LOADING(false);
          });
        }
      }
    }
  }
};
</script>

<style lang="scss">
.select-list-count {
  margin-top: 100px;
  text-align: center;
}
</style>

