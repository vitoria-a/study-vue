<template>
  <div class="user-details">
    <h3> User Details </h3>
    <p><strong> ID code: </strong> {{ id }}</p>
    <button success @click="goToList"> Back to Users List </button>
    <!-- <router-link tag="button" primario :to="`/user/${id}/edit`"> Edit </router-link> -->
    <router-link tag="button" primario
        :to="{
            name: 'editUser',
            params: { id },
            query: { completo: true, lingua: 'pt' }
        }">
        Edit
    </router-link>
  </div>
</template>

<script>
export default {
    props: ['id'], //passando o id por props
    beforeRouteEnter(to, from ,next) {
        const autenticado = true;
        autenticado ? next() : next(false);
    },
    methods: {
        goToList() {
            this.$router.push( { name: 'list'});
        }
    }
    /* usando parâmetros nas rotas
    data() {
        return {
            id: this.$route.params.id
        }
    },
    watch: {
        $route(to) {
            this.id = to.params.id;
        }
    }, */
}
</script>