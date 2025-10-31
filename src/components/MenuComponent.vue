<script setup>
import { ref } from "vue";
const rutas = ref([
  { path: "/", name: "Departamentos" },
  { path: "/create", name: "Create" },
]);
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <span class="navbar-brand">CRUD Departamentos</span>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li v-for="ruta in rutas" :key="ruta" class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              :to="ruta.path"
              >{{ ruta.name }}</router-link
            >
          </li>
          <!-- <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Oficios
            </a>
            <ul class="dropdown-menu">
              <li v-for="ofi in oficios" :key="ofi">
                <router-link
                  :to="'/empleadosoficios/' + ofi"
                  class="dropdown-item"
                  >{{ ofi }}</router-link
                >
              </li>
            </ul>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>
