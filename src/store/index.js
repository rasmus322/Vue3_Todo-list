import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'

export default createStore({
  state: {
    todoList: [
      {
        id: uuidv4(),
        name: 'Wash the dishes',
        done: false,
      },
      {
        id: uuidv4(),
        name: 'Clean the appartment',
        done: false,
      },
      {
        id: uuidv4(),
        name: 'Do homework',
        done: false,
      },
    ]
  },
  getters: {
    activeTodos(state) {
      return state.todoList.filter(item => item.done === false)
    },
    doneTodos(state) {
      return state.todoList.filter(item => item.done === true)
    }
  },
  mutations: {
    createTodo(state, name) {
      state.todoList.push({
        id: uuidv4(),
        name: name,
        done: false
      })
    },
    toggleStatus(state, todoId) {
      const thisTodo = state.todoList.find(item => item.id === todoId)
      thisTodo.done = !thisTodo.done
    },
    deleteTodo(state, todoId) {
      state.todoList = state.todoList.filter(item => item.id !== todoId)
    },
    clearDone(state) {
      state.todoList = state.todoList.filter(item => item.done === false)
    }
  },
  actions: {
  },
  modules: {
  }
})
