<script setup>
import { ref } from 'vue'
import ComponenteHijo from './ComponenteHijo.vue'

const textoRecibido = ref('')

function recibirTexto(texto) {
  textoRecibido.value = texto
}
</script>

<template>
  <div>
    <h1>Componente Padre</h1>
    <ComponenteHijo @envia-texto="recibirTexto" />
    <p>Texto Recibido: {{ textoRecibido }}</p>
  </div>
</template>
