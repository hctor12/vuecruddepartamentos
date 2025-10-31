<script setup>
import ServiceDepartamentos from "@/services/ServiceDepartamentos";
import { onMounted, ref } from "vue";
import Swal from "sweetalert2";

const departamentos = ref([]);
let status = ref(false);

const deleteDep = (id) => {
  ServiceDepartamentos.deleteDep(id).then(() => {
    ServiceDepartamentos.getDepartamentos().then((result) => {
      (departamentos.value = result), (status.value = true);
    });
  });
};

const mostrarAlert = (id) => {
  Swal.fire({
    title: "¿Está seguro?",
    text: "Esta acción no se puede revertir.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminarlo!",
  }).then((result) => {
    if (result.isConfirmed) {
      deleteDep(id);
      Swal.fire({
        title: "¡Eliminado!",
        text: "El departamento ha sido eliminado.",
        icon: "success",
      });
    }
  });
};

onMounted(() => {
  ServiceDepartamentos.getDepartamentos().then((result) => {
    (departamentos.value = result), (status.value = true);
  });
});
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
      <tr v-for="dep in departamentos" :key="dep">
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
          <button @click="mostrarAlert(dep.numero)" class="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
