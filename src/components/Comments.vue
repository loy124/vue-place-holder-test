<template>
  <div>
    <div class="comment-count">댓글수 {{comments.length}}</div>
    <div class="comment-container">
      <div v-for="(comment, index) in comments" :key="index" class="comment-wrapper">
        <div class="comment-header-wrapper">
          <div class="comment-header-name">{{comment.name}}</div>
          <div class="comment-header-email">{{comment.email}}</div>
        </div>
        <div class="comment-content-wrapper">
          <div class="comment-conent-body">{{comment.body}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["comments"]
};
</script>

<style lang="scss">
.comment-container {
  box-shadow: rgba(188, 196, 219, 0.77) 5px 5px 13px 0px;
  margin: 30px 0;
  .comment-count {
    margin-bottom: 20px;
  }
  .comment-wrapper {
    border: 1px solid #dddddd;
    padding: 15px 30px;
    .comment-header-wrapper {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      .comment-header-name {
        font-size: 18px;
      }
      .comment-header-email {
        margin-left: 40px;
        font-size: 14px;
      }
    }
    .comment-content-wrapper {
      padding: 10px 0;
      margin-top: 15px;
      font-size: 19px;
    }
  }
}

@media screen and (max-width: 768px) {
  .comment-header-email {
    margin-top: 20px;
  }
}
</style>