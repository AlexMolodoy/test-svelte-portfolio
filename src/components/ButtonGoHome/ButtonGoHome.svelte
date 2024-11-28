<script lang="ts">
  import buttonGoHome from './assets/buttonGoHome.png';
   
    function goHome() {
      window.location.href = '/';
    }
  </script>
  
  <style>
    .homeButton {
      display: inline-block;
      padding: 12px;
      font-size: 1rem;
      color: 333333;
      background-color: #000;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      text-align: center;
      text-decoration: none;
      transition: background-color 0.3s ease;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  
    .homeButton:hover {
      background-color: #f3c76e;
    }
  
    .homeButton:active {
      background-color: #eab459;
    }

    .iconHome {
      width: 24px;
      height: 25px;
    }
  </style>
  
  <!-- svelte-ignore a11y_incorrect_aria_attribute_type -->
  <button class="homeButton" on:click={goHome} aria-label=''>
    <img src={buttonGoHome} class="iconHome" alt='GoHome'/>
  </button>
  