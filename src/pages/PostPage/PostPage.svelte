<script lang="ts">
  import ButtonGoHome from "../../components/ButtonGoHome/ButtonGoHome.svelte";
  import LoadingModule from "../../modules/LoadingModule/LoadingModule.svelte";
  import NavigationModule from "../../modules/NavigationModule/NavigationModule.svelte";
  import PostModule from "../../modules/PostModule/PostModule.svelte";
  import type { Post } from "../../types";

  let getPost = async (): Promise<Post> => {
    const path: string = window.location.hash;
    const postId = path.split("/").pop()
    console.log(path)
    console.log(postId)

    let res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    )

    return res.json()
  }
  let data = $state(getPost())

</script>

<style>
  .postContainer {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    border-radius: 8px;
    font-family: Arial, sans-serif;
  }
  .postTextContainer{
    padding: 0 16px;
  }
</style>

<div class="postContainer">

{#await data}
  <LoadingModule message="Загружаем данные, пожалуйста, подождите..." />
{:then res} 
  <NavigationModule />
  <div class="postTextContainer">
    <PostModule title={res.title} body={res.body} />
  </div>
{:catch error}
  {alert(error)}
  <ButtonGoHome/>
{/await}
</div>
