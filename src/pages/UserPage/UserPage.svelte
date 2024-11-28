<script lang="ts">
  import ButtonGoHome from "../../components/ButtonGoHome/ButtonGoHome.svelte";
  import LoadingModule from "../../modules/LoadingModule/LoadingModule.svelte";
  import NavigationModule from "../../modules/NavigationModule/NavigationModule.svelte";
  import PostCardModule from "../../modules/PostCardModule/PostCardModule.svelte";
  import type { Post } from "../../types";

  const path: string = window.location.hash;
  const userId = Number(path.split("/").pop()) || 0; 

  let getPost = async (): Promise<Post[]> => {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
    return res.json();
  };

  let posts = $state(getPost());
</script>

<style>

  h1{
    color: #333;
  }
  
  .postList {
    display: grid;
    gap: 16px;
    padding: 16px;
    border-radius: 8px;
  }

  @media (max-width: 425px) {
    .postList {
      grid-template-columns: 1fr; 
    }
  }

  @media (min-width: 426px) and (max-width: 768px) {
    .postList {
      grid-template-columns: repeat(2, 1fr); 
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    .postList {
      grid-template-columns: repeat(3, 1fr); 
    }
  }

  @media (min-width: 1025px)  {
    .postList {
      grid-template-columns: repeat(4, 1fr); 
    }
  }

  @media (min-width: 2560px)  {
    .postList {
      padding: 30px;
    }
  }

</style>

  {#await posts}
    <LoadingModule message="Загружаем данные, пожалуйста, подождите..." />
  {:then res}
    <h1>Пользователь {userId}</h1>
    
    <NavigationModule />

    <div class="postList">

    {#each res as post}
      {#if post.userId === userId}
        <PostCardModule title={post.title} id={post.id} />
      {/if}
    {/each}
  </div>

  {:catch error}
    <p>Произошла ошибка: {error.message}</p>
    <ButtonGoHome />
  {/await}
