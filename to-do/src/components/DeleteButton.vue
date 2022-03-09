<script setup>

</script>

<template>
  <button class="delete"  @click="$emit('delete')">
    <img style="height: 24px" src="/bin.png" />
  </button >
</template>

<style>
.delete {
  display: flex;
  justify-content: flex-end;
  background-color: aliceblue;
}
</style>
