<script>
  export let postCount;
</script>
  
<style>
  .postCounterContainer {
    display: flex;
    justify-content: space-between;
  }
</style>
  
<div class='postCounterContainer'>
  <p>Опубликованных постов :</p>
  <p>{postCount}</p>
</div>