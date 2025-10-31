<template>
  <MenuComponent />
  <router-view />
</template>

<script>
import MenuComponent from "./components/MenuComponent.vue";

export default {
  name: "App",
  components: {
    MenuComponent,
  },
};
</script>
