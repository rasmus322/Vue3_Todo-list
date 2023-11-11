<template>
  <ul class="todo__list">
    <TodoItem v-for="todo in todos" :key="todo.id" :task="todo"/>
  </ul>
</template>
<script>
  import TodoItem from './TodoItem.vue';

  export default {
    props: {
      todos: {
        type: Array,
        required: true
      }
    },
    components: { TodoItem }
  }
</script>
<style scoped>
  .todo__list {
    outline: 2px solid #488286;
  }
</style>