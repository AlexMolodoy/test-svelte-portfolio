<script>
  import ButtonBack from "../../components/ButtonBack/ButtonBack.svelte";
  import ButtonGoHome from "../../components/ButtonGoHome/ButtonGoHome.svelte";
  </script>
  
  <style>
    .navigationBar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 16px;
    }

    @media (min-width: 2560px)  {
    .navigationBar {
      padding: 8px 30px;
    }
  }
  
  </style>
  
  <div class="navigationBar">
    <ButtonBack />
  
    <ButtonGoHome />
  </div>
  