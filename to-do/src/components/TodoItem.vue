<script setup>
import DeleteButton from "./DeleteButton.vue";
import DoneButton from "./DoneButton.vue"
</script>

<template>
  <div class="container">
    <slot ></slot>
    <DeleteButton @delete ="$emit('delete', index)" />
    <DoneButton @complete="$emit('complete', index)" />
  </div>
</template>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
</style>
