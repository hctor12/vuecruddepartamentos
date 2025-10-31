<script setup>
import ServiceDepartamentos from "@/services/ServiceDepartamentos";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
let departamento = ref({
  numero: parseInt(route.params.id),
  nombre: "",
  localidad: "",
});

const updateDep = () => {
  ServiceDepartamentos.updateDepartamento(departamento.value).then(() => {
    router.push("/");
  });
};

onMounted(() => {
  ServiceDepartamentos.findDepartamento(departamento.value.numero).then(
    (result) => {
      departamento.value.nombre = result.nombre;
      departamento.value.localidad = result.localidad;
    }
  );
});
</script>
<template>
  <div>
    <h1>Update</h1>
    <form @submit.prevent="updateDep">
      <label>ID Departamento</label>
      <input
        type="number"
        disabled
        class="form-control"
        :value="departamento.numero"
      />
      <label>Nombre</label>
      <input type="text" class="form-control" v-model="departamento.nombre" />
      <label>Localidad</label>
      <input
        type="text"
        class="form-control"
        v-model="departamento.localidad"
      />
      <button type="submit" class="btn btn-primary mt-2">Update</button>
    </form>
  </div>
</template>
