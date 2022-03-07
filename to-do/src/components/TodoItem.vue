<script setup>
import DeleteButton from "./DeleteButton.vue";
import DoneButton from "./DoneButton.vue"
</script>

<template>
  <div class="container">
    <slot :class="{ 'completedClass': item.completed }"></slot>
    <DeleteButton />
    <DoneButton @complete="$emit('complete', index)" />
  </div>
</template>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
</style>
