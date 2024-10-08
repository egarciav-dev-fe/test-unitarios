<script setup>
import { ref } from 'vue'

const textoIngresado = ref('')
const emit = defineEmits(['envia-texto'])

function enviarTexto() {
  emit('envia-texto', textoIngresado.value)
}
</script>
<template>
  <form @submit.prevent="enviarTexto">
    <label for="texto">Ingresar Texto</label>
    <input type="text" id="texto" v-model="textoIngresado" />
    <button type="submit">Enviar texto</button>
  </form>
</template>
