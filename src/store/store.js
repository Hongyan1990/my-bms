import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default function createStore() {
	return new Vuex.Store({
		state: {
			username: '',
			userid: ''
		},
		actions: {
			saveUsername({commit}, name) {
				commit('setUsername', {name})
			},
			saveUserid({commit}, id) {
				commit('setUserid', {id})
			},
		},
		mutations: {
			setUsername(state, {name}) {
				state.username = name
			},
			setUserid(state, {id}) {
				state.userid = id
			},
		}
	})
}