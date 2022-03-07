<script setup></script>

<template>
  <button class="done" @click="$emit('complete')">
    <img style="height: 24px" src="/tick.png" />
  </button>
</template>

<style>
.done {
  display: flex;
  justify-content: flex-end;
  background-color: aliceblue;
}
</style>
