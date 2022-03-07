<script setup>
import DeleteButton from "./DeleteButton.vue";

import TodoItem from "./TodoItem.vue";

import { ref } from "vue";

let newTodoTitle = ref("");
const list = ref([
    {
        title: 'Football',
        completed: false,
    },
    {
        title: 'Basketball',
        completed: true,
    },
]);

const handleInput = () => {
  if (newTodoTitle) {
    list.value.push({
        title: newTodoTitle.value,
        completed: false,
    });
  }
};

const complete = (e) => {
    console.log(e);
}
</script>

<template>
{{ list }}
  <input type="text" placeholder="Add your  Task" v-model="newTodoTitle" />
  <button @click="handleInput">Add</button>

  <ul>
    <li class="list" v-for="(task, index) in list" :key="index">
      <TodoItem @complete="complete">{{ task }}</TodoItem>
    </li>
  </ul>
</template>

<style>
input {
  border: 2px solid;
  border-radius: 4px;
  font-size: 1rem;
  margin: 0.25rem;
  min-width: 125px;
  padding: 0.5rem;
  transition: background-color 0.5s ease-out;
  text-align: center;
}

button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
.list {
  margin: 1rem 0;
  font-size: 1.25rem;
  font-weight: bold;
  background-color: #ffb6e8;
  padding: 0.5rem;
  color: #1f1f1f;
  border-radius: 25px;
  width: 400px;
}
</style>
