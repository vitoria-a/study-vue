<template>
  <div class="user-list">
    <h3> List of user </h3>
    <ul class="list">
      <router-link tag="li" to="/user/1" class="item-list"> User 1 </router-link>
      <router-link tag="li" to="/user/2" class="item-list"> User 2 </router-link>
      <router-link tag="li" to="/user/3" class="item-list"> User 3 </router-link>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>