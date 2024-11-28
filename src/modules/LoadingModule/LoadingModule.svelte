<script>
    export let message = "Загрузка..."; 
  </script>
  
  <style>
    .loadingContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      text-align: center;
    }
  
    .spinner {
      width: 40px;
      height: 40px;
      border: 4px solid rgba(0, 0, 0, 0.1);
      border-top-color: #007bff;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
  
    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  
    .message {
      margin-top: 16px;
      font-size: 1.2rem;
      color: #555;
    }
  </style>
  
  <div class="loadingContainer">
    <div class="spinner"></div>
    <div class="message">{message}</div>
  </div>
  