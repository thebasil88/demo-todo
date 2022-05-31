<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import { onMounted } from '@vue/runtime-core'
</script>
<script>
export default {
  data() {
    return {
      todos: [],
      todoText: '',
    }
  },
  mounted() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || []
  },
  methods: {
    addTodo() {
      this.todos = [...this.todos, this.todoText]
      localStorage.setItem('todos', JSON.stringify(this.todos))
      this.todoText = ''
    },
  },
}
</script>

<template>
  <div
    x-data="todos"
    class="flex flex-col justify-center h-screen bg-green-300"
  >
    <div>
      <div
        class="container mx-auto max-w-screen-sm bg-white p-4 rounded shadow-2xl"
      >
        <h1 class="text-3xl font-bold uppercase text-green-400 mb-4">
          Vue3 Todo
        </h1>
        <ul class="list-disc ml-5">
          <template v-for="(todo, index) in todos" v-bind:key="index">
            <li v-text="todo"></li>
          </template>
        </ul>
        <div class="py-4">
          <p>
            <input
              type="text"
              name="todo"
              id=""
              placeholder="Add todo here"
              v-model="todoText"
            />
          </p>

          <div class="flex flex-row space-x-2 mt-4">
            <button
              @click.preventDefault="addTodo()"
              class="bg-green-400 hover:bg-green-600 text-white uppercase px-4 py-2.5 rounded"
            >
              Add Todo
            </button>
            <button
              @click.preventDefault="clearAllTodos()"
              class="bg-green-600 hover:bg-green-400 text-white uppercase px-4 py-2.5 rounded"
            >
              Clear all todos
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
