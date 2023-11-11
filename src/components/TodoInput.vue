<template>
  <form action="" class="todo__form">
    <input type="text" placeholder="Write your task..." required class="todo__input" v-model="taskName">
    <button class="todo__btn" type="submit" @click.prevent="onAdd">
      Add task
    </button>
  </form>
</template>
<script>
  import { ref } from 'vue'
  import { useStore } from 'vuex';

  export default {
    setup() {
      const store = useStore()
      const taskName = ref("")

      const onAdd = () => {
        console.log("add task")
        store.commit("createTodo", taskName.value)
        taskName.value = ""
      }

      return { taskName, onAdd }
    }
  }
</script>
<style scoped>
  .todo__form {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .todo__input {
    width: 90%;
    background: #305252;
    color: #B7D5D4;
    border: none;
    outline: none;
    padding: 10px 15px;
    margin-left: 0;
  }
  .todo__btn {
    width: 10%;
    background: #305252;
    color: #B7D5D4;
    font-weight: bold;
    cursor: pointer;
    border: none;
    border-left: 2px solid #488286;
    padding: 10px 0;
    transition: 0.3s;
    margin-right: 0;
  }
  .todo__btn:hover {
    background: #488286;
  }
</style>