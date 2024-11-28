<script lang="ts">
    import formatDate from "../../utils.ts";
    export let body = "Текст поста отсутствует"; 
    export let title = "Заголовок не указан"; 
  </script>
  
  <style>
    .post {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
      background-color: #f9f9f9;
      font-family: Arial, sans-serif;
    }
  
    .post h1 {
      font-size: 1.5rem;
      margin-bottom: 20px;
      color: #333;
    }
  
    .post p {
      font-size: 1.1rem;
      line-height: 1.6;
      color: #555;
    }
  
    .post .userId {
      margin-top: 20px;
      font-style: italic;
      color: #666;
    }
  </style>
  
  <div class="post">
    <h1>{title}</h1>
    <p>{body}</p>
    <p class="userId">Дата публикации: {formatDate(new Date())}</p>
  </div>
  