<script>
  import ButtonGoHome from '../../components/ButtonGoHome/ButtonGoHome.svelte';

</script>

<style>
  .notFound {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    font-family: Arial, sans-serif;
    color: #333333;
  }

  .notFound h1 {
    font-size: 5rem;
    color: #ff5555;
    margin-bottom: 16px;
  }

  .notFound p {
    font-size: 1.5rem;
    margin-bottom: 24px;
    color: #555;
  }
</style>

<div class="notFound">
  <h1>404</h1>
  <p>Страница не найдена</p>
  <ButtonGoHome />
</div>
