<script>
  import PostCounter from "../../components/PostCounter/PostCounter.svelte";
  import User from "../../components/User/User.svelte";

  export let id;
  export let postCount;
</script>

<style>
  .userCard {
    background-color: #fafbfd;
    border: 2px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .userCard:hover{
    padding: 14px;
    border: 4px solid #f9d57f;
    box-shadow: 0 4px 6px rgba(249, 213, 127, 0.6);
  }

  .userCard:active{
    padding: 17px;
    border: 1px solid #f9d57f;
    box-shadow: 0 4px 6px rgba(249, 213, 127, 0.8);
  }

  a{
    color: #333
  }

</style>

<a href="#/user/{id}" class="userCard">
  <User name={id}/>
  <PostCounter postCount={postCount}/>
</a>