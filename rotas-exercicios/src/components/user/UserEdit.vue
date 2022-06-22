<template>
  <div class="user-edit">
    <h3> User Edit </h3>
    <p><strong> ID code: </strong> {{ id }}</p>
    <p><strong> Completo: </strong> {{ $route.query.completo ? 'Sim' : 'Não' }} </p>
    <p><strong> Linguagem: </strong> {{ $route.query.lingua }} </p>
    <hr>
    <button primario @click="confirmed = true"> Confirmar </button>
  </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
      return { 
        confirmed: false
      }
    },
    beforeRouteLeave(to, from ,next) {
      if(this.confirmed) {
        next();
      } else {
        if(confirm('Tem certeza?')) {
          next();
        } else {
          next(false);
        }
      }
    }
}
</script>