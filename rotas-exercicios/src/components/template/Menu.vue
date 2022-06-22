<template>
  <nav class="menu">
    <ul>
        <router-link to="/" tag="li" active-class="active" exact>
            <a> Home </a>
        </router-link>
        <router-link to="/user" tag="li" active-class="active">
            <a> User </a>
        </router-link>

    </ul>
  </nav>
</template>

<script>
export default {

}
</script>