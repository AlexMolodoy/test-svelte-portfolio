<script lang="ts">
  import Router from 'svelte-spa-router';
  import { routes } from './routes';

</script>

<Router {routes}/>
<p>Produced by AlexMolodoy 2024</p>

<style>
  p{
    color: #333;
    position: absolute;
    bottom: 10px;
    left: calc(50% - 115px);
  }
</style>
