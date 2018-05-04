// store.js
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      musicList:[],
      lang:'EN',
    },
      mutations:{
      changeItemIs(state,payload){
          this.state.messages.head.txt[payload].is = true
          let obj = Object.assign({},this.state.messages)
          this.state.messages=obj
          // this.$set(this.state.messages.head.txt,payload,true)
      }
      }
  })
}
