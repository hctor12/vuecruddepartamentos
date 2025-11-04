<script setup>
import ServiceDepartamentos from "@/services/ServiceDepartamentos";
import Swal from "sweetalert2";
import { defineProps, defineEmits } from "vue";

// recibir id como prop y emitir evento 'deleted' al padre
const props = defineProps(["id"]);
const emit = defineEmits(["deleted"]);

// deleteDep devuelve la promesa para poder encadenarla
const deleteDep = () => {
  return ServiceDepartamentos.deleteDep(props.id).then(() => {
    // emitir al padre que se eliminó este id
    emit("deleted", props.id);
  });
};

const mostrarAlert = () => {
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
      deleteDep()
        .then(() => {
          Swal.fire({
            title: "¡Eliminado!",
            text: "El departamento ha sido eliminado.",
            icon: "success",
          });
        })
        .catch(() => {
          Swal.fire({
            title: "Error",
            text: "No se pudo eliminar el departamento.",
            icon: "error",
          });
        });
    }
  });
};
</script>

<template>
  <button @click="mostrarAlert" class="btn btn-danger">Delete</button>
</template>
