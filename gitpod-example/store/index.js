import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    strict: true,
    state: {
      name: ""
    },
    mutations: {
      mutateName (state,newName) {
        state.name = newName;
      }
    },
    actions: {
        setName (context,newName) {
            context.commit('mutateName',newName);
        }
    }
  })
  
  export default store