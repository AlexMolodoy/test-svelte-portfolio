<script lang="ts">
  import Router from 'svelte-spa-router';
  import { routes } from './routes';

</script>


<div class="container">
  <Router {routes} />
  <p>Produced by AlexMolodoy 2024</p>
</div>
<style>
  .container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .container > :first-child {
    flex: 1;
  }

  p {
    color: #333;
    text-align: center;
    margin: auto 0 0 0;
  }
</style>

