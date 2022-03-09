<script setup>
import { ref, computed } from "vue";
import DeleteButton from "./DeleteButton.vue";
import TodoItem from "./TodoItem.vue";

let newTodoTitle = ref("");
const list = ref([]);

const handleInput = () => {
  if (newTodoTitle) {
    list.value.push({
      title: newTodoTitle.value,
      completed: false,
    });
    newTodoTitle.value = "";
  }
};

const complete = (e) => {
  list.value[e].completed = !list.value[e].completed;
};

const deletehandler = (index) => {
  list.value.splice(index, 1);
};
</script>

<template>
  <!-- {{ list }} -->

  <input
    @keyup.enter="handleInput"
    type="text"
    placeholder="Add your  Task"
    v-model="newTodoTitle"
  />
  <button @click="handleInput">Add</button>

  <ul>
    <li
      :class="[task.completed ? 'completed' : 'list']"
      v-for="(task, index) in list"
      :key="index"
    >
      <TodoItem @complete="complete(index)" @delete="deletehandler(index)">{{
        task.title
      }}</TodoItem>
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
.completed {
  text-decoration-line: line-through;
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
