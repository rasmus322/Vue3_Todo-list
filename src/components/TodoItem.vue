<template>
  <li class="todo__item">
    <input type="checkbox" class="check" v-model="onCheck">
    <p class="todo__name" :class="{done: onCheck}"> {{ task.name }} </p>
    <button class="todo__btn-delete" @click="onDelete">
      Delete Task
    </button>
  </li>
</template>
<script>
  import { useStore } from 'vuex'
  import { computed } from 'vue'

  export default {
    props: {
      task: {
        type: Object,
        required: true
      }
    },
    setup(props) {
      const store = useStore()
      const onCheck = computed({
        get() {
          return props.task.done
        },
        set() {
          store.commit("toggleStatus", props.task.id)
        }
      })
      const onDelete = () => {
        store.commit("deleteTodo", props.task.id)
      }

      return { onCheck, onDelete }
    }
  }
</script>
<style scoped>
  .todo__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #305252;
    transition: 0.3s;
    padding: 10px 20px;
  }
  .todo__item:hover {
    background: #488286;
  }
  .check {
    margin-right: 0;
    margin-left: 0;
  }
  .todo__name {
    color: #B7D5D4;
    margin-left: 20px;
  }
  .done {
    text-decoration: line-through;
  }
  .todo__btn-delete {
    background: #E76A6A;
    color: #CEE5EA;
    border: none;
    cursor: pointer;
    padding: 10px 15px;
    margin-right: 0;
  }
</style>