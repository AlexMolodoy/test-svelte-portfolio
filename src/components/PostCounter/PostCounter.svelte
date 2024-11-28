<script>
  export let postCount;
</script>
  
<style>
  .postCounterContainer {
    display: flex;
    justify-content: space-between;
    padding: 0 8px;
  }

  .postCounterContainer p{
    margin: 0;
    opacity: 0.7;
  }
</style>
  
<div class='postCounterContainer'>
  <p>Опубликованных постов :</p>
  <p>{postCount}</p>
</div>