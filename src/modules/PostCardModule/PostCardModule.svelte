<script>
    export let id;
    export let title;
  </script>
  
  <style>
    .postCard {
      background-color: white;
      border-radius: 24px;
      padding: 16px;
      box-shadow: 0 4px 25px rgba(0, 0, 0, 0.01);;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      text-align: left;
    }

    .postCard:hover{
      padding: 12px;
      border: 4px solid #f9d57f;
    }
    .postCard:active{
      box-shadow: 0 0 6px rgba(249, 213, 127, 0.8);
    }

    .postCard h3 {
      font-size: 1.25rem;
      margin: 0 0 8px;
      color: #333;
    }
  
    .postCard p {
      font-size: 1rem;
      margin: 0;
      color: #555;
      opacity: 0.7;
    }

  </style>
  
  <a class="postCard" href='#/post/{id}'>
    <p>
        ID поста: {id}
    </p>
    <h3>{title}</h3>
</a>
  