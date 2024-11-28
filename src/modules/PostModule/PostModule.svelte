<script lang="ts">
    import formatDate from "../../utils.ts";
    export let body = "Текст поста отсутствует"; 
    export let title = "Заголовок не указан"; 
  </script>
  
  <style>
    .post {
      padding: 20px;
      border-radius: 24px;
      background-color: #f9f9f9;
      box-shadow: 0 4px 25px rgba(0, 0, 0, 0.01);;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
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
  