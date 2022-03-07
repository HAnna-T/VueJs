<script setup>
import TodoList from "./components/TodoList.vue";
import TodoItem from "./components/TodoItem.vue";
import { ref } from "vue";

const tasks = ref([]);
</script>

<template>
  <form>
    <h1>To Do List</h1>
  </form>
  <TodoList />
</template>

<style></style>
