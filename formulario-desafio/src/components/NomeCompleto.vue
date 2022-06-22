<template>
  <div class="nome-completo">
    <Rotulo nome="Nome">
		<input type="text" :value="value.nome" @input="alterarNome">
	</Rotulo>
	<Rotulo nome="Sobrenome">
		<input type="text" :value="value.sobrenome" @input="alterarSobrenome">
	</Rotulo>
  </div>
</template>

<script>
import Rotulo from './Rotulo.vue';

export default {
    name: 'NomeCompleto',
    props: {
        value: {
            type: Object,
            required: true
        }
    },
    components: { Rotulo },
    methods: {
        alterarNome(event) {
            this.$emit('input', {nome: event.target.value, sobrenome: this.value.sobrenome});
        },
        alterarSobrenome(event) {
            this.$emit('input', {nome: this.value.nome, sobrenome: event.target.value});
        }
    }

}
</script>

<style>

</style>