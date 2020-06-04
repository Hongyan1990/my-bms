import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default function createStore() {
	return new Vuex.Store({
		state: {
			username: ''
		},
		actions: {
			saveUsername({commit}, name) {
				commit('setUsername', {name})
			}
		},
		mutations: {
			setUsername(state, {name}) {
				state.username = name
			}
		}
	})
}