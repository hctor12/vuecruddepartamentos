<script setup>
import ServiceDepartamentos from "@/services/ServiceDepartamentos";
import { onMounted, ref } from "vue";
import DeleteDepartamento from "./DeleteDepartamento.vue";

const departamentos = ref([]);
let status = ref(false);

onMounted(() => {
  ServiceDepartamentos.getDepartamentos().then((result) => {
    (departamentos.value = result), (status.value = true);
  });
});

// manejar evento 'deleted' emitido por el componente hijo
const onDeleted = (id) => {
  departamentos.value = departamentos.value.filter((d) => d.numero !== id);
};
</script>
<template>
  <h1>Departamentos</h1>
  <img
    src="../assets/images/loading.png"
    alt="imgLoading"
    v-if="status == false"
  />
  <table class="table table-bordered" v-else>
    <thead>
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Localidad</th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="dep in departamentos" :key="dep.numero">
        <td>{{ dep.numero }}</td>
        <td>{{ dep.nombre }}</td>
        <td>{{ dep.localidad }}</td>
        <td>
          <router-link
            class="btn btn-warning"
            :to="
              '/details/' + dep.numero + '/' + dep.nombre + '/' + dep.localidad
            "
            >Detalles</router-link
          >
        </td>
        <td>
          <router-link class="btn btn-primary" :to="'/update/' + dep.numero"
            >Update</router-link
          >
        </td>
        <td>
          <DeleteDepartamento :id="dep.numero" @deleted="onDeleted" />
        </td>
      </tr>
    </tbody>
  </table>
</template>
