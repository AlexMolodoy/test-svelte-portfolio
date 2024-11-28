<script>
    import UserImage from './assets/userIcon.png';
    export let name;
  </script>
  
  <style>
    .userCard {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 16px;
      padding: 0 8px;
      max-width: 400px;
      margin: auto;
    }
  
    .userCard img {
      margin-top: 14px;
      width: 36px;
      height: 36px;
      object-fit: cover;
      position: relative;
    }
  
    .userCard h3 {
      margin: 0;
      font-size: 1.25rem;
      color: #333;
    }

    .icon{
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background-color: #f9d57f;
    }

  </style>
  
  <div class="userCard">
    <div  class="icon">
      <img src={UserImage} alt={name}/>
    </div>
    <h3>Пользователь {name}</h3>
  </div>
  