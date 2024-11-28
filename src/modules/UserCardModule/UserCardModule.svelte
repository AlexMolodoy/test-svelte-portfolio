<script>
  import PostCounter from "../../components/PostCounter/PostCounter.svelte";
  import User from "../../components/User/User.svelte";

  export let id;
  export let postCount;
</script>

<style>
  .userCard {
    background-color: white;
    border-radius: 24px;
    padding: 16px;
    text-align: center;
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.01);;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .userCard:hover{
    padding: 12px;
    border: 4px solid #f9d57f;
  }

  .userCard:active{
    box-shadow: 0 0 6px rgba(249, 213, 127, 0.8);
  }

  a{
    color: #333
  }

</style>

<a href="#/user/{id}" class="userCard">
  <User name={id}/>
  <PostCounter postCount={postCount}/>
</a>