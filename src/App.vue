<template>
  <nav class="nav">
    <button class="nav__btn" :class="{active: activeTab === 1}" @click.prevent="changeTab(1)">All</button>
    <button class="nav__btn" :class="{active: activeTab === 2}" @click.prevent="changeTab(2)">Active</button>
    <button class="nav__btn" :class="{active: activeTab === 3}" @click.prevent="changeTab(3)">Completed</button>
  </nav>
  <TodoInput class="todo__form"/>
  <TodoList v-if="activeTab === 1" :todos="store.state.todoList"/>
  <TodoList v-if="activeTab === 2" :todos="store.getters.activeTodos"/>
  <TodoList v-if="activeTab === 3" :todos="store.getters.doneTodos"/>
</template>
<script>
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  import TodoInput from './components/TodoInput.vue';
  import TodoList from './components/TodoList.vue';

  export default {
    components: { TodoInput, TodoList },
    setup() {
      const store = useStore()
      let activeTab = ref(1)

      function changeTab(tab) {
        activeTab.value = tab
        console.log('change', activeTab)
      }

      return { store, activeTab, changeTab }
    }
  }
</script>
<style scoped>
  .todo__form {
    margin-bottom: 50px;
  }
  .nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 10px;
    margin-left: 0;
  }
  .nav__btn {
    color: #B7D5D4;
    background: #305252;
    border: none;
    transition: 0.3s;
    cursor: pointer;
    margin-left: 0;
    padding: 10px 15px;
  }
  .nav__btn:hover,
  .nav__btn.active {
    background: #488286;
  }
  .nav__btn:not(:last-child) {
    border-right: 2px solid #488286;
    margin-right: 0;
  }
</style>
