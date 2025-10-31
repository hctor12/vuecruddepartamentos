<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>
<template>
  <div>
    <h1>Details</h1>
    <router-link to="/">Back to list</router-link>
    <ul>
      <li>ID: {{ route.params.id }}</li>
      <li>Nombre: {{ route.params.nombre }}</li>
      <li>Localidad: {{ route.params.localidad }}</li>
    </ul>
  </div>
</template>
