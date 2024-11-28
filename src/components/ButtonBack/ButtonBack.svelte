<script>
    function goBack() {
      window.history.back();
    }
  </script>
  
  <style>
    .backButton {
      display: inline-block;
      padding: 15px 24px;
      font-size: 1rem;
      font-weight: bold;
      color: #333333;
      background-color: #f9d57f;
      border: none;
      border-radius: 24px;
      cursor: pointer;
      text-align: center;
      text-decoration: none;
      transition: background-color 0.3s ease;
    }
  
    .backButton:hover {
      background-color: #f3c76e;
    }
  
    .backButton:active {
      background-color: #eab459;
    }
  </style>
  
  <button class="backButton" on:click={goBack}>
    Назад
  </button>
  