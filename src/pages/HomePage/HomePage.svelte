<script lang="ts">
   import ButtonGoHome from '../../components/ButtonGoHome/ButtonGoHome.svelte';
   import LoadingModule from '../../modules/LoadingModule/LoadingModule.svelte';
   import UserCardModule from '../../modules/UserCardModule/UserCardModule.svelte';
   import type { Post } from '../../types';

  type UserPostCount = {
    id: number;
    postCount: number;
  };

  let getPosts = async (): Promise<UserPostCount[]> => {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts');
    let posts: Post[] = await res.json();

    const userPostCounts = posts.reduce<Record<number, number>>((acc, post) => {
      acc[post.userId] = (acc[post.userId] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(userPostCounts).map(([userId, postCount]) => ({
      id: parseInt(userId),
      postCount,
    }));
  };
  let data = $state(getPosts())
</script>

<main>
  {#await data}
    <LoadingModule message="Загружаем данные, пожалуйста, подождите..." />
  {:then res}
    <h1>Пользователи</h1>
    <div class="grid">
      {#each res as user}
       <UserCardModule id={user.id} postCount={user.postCount}/>
      {/each}
    </div>
  {:catch error}
    {alert(error)}
    <ButtonGoHome />
  {/await}
</main>

<style>
  h1{
    color: #333333;
  }

  .grid {
    display: grid;
    gap: 16px;
    padding: 16px;
  }

  @media (max-width: 425px) {
    .grid {
      grid-template-columns: 1fr; 
    }
  }

  @media (min-width: 426px) and (max-width: 768px) {
    .grid {
      grid-template-columns: repeat(2, 1fr); 
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 1025px) {
    .grid {
      grid-template-columns: repeat(4, 1fr); 
    }
  }


</style>
