<script>
    import UserImage from './assets/user-icon.png';
    export let name;
  </script>
  
  <style>
    .userCard {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 8px;
      background-color: #f9f9f9;
      border: 1px solid #ddd;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0,0,0, 0.1);
      max-width: 400px;
      margin: auto;
      font-family: Arial, sans-serif;
    }
  
    .userCard img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      object-fit: cover;
    }
  
    .userCard h3 {
      margin: 0;
      font-size: 1.25rem;
      color: #333;
    }

    .userIcon{
      background-color: #f9d57f;
    }
  </style>
  
  <div class="userCard">
    <img src={UserImage} alt={name} class="userIcon"/>
    <h3>Пользователь {name}</h3>
  </div>
  