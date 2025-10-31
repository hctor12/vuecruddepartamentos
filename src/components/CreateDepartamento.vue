<script setup>
import ServiceDepartamentos from "@/services/ServiceDepartamentos";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
let departamento = ref({
  numero: 0,
  nombre: "",
  localidad: "",
});
let mensaje = ref("");

const insertDepartamento = () => {
  ServiceDepartamentos.insertDepartamento(departamento.value).then((result) => {
    mensaje.value = "Insertado!! " + result;
    router.push("/");
  });
};
</script>
<template>
  <div>
    <h3>Create Departamento</h3>
    <form v-on:submit.prevent="insertDepartamento">
      <label>ID Departamento</label>
      <input type="number" v-model="departamento.numero" class="form-control" />
      <label>Nombre</label>
      <input type="text" v-model="departamento.nombre" class="form-control" />
      <label>Localidad</label>
      <input
        type="text"
        v-model="departamento.localidad"
        class="form-control"
      />
      <button class="btn btn-info mt-2">Create</button>
    </form>
    <h4 style="color: red">{{ mensaje }}</h4>
  </div>
</template>
