import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';
export default createStore({
    state:{
    logged : false,
    id: '',
    },
    plugins:[createPersistedState()],
    getter:{
        getLogged(state){
            return state.logged
        },

        getUser(state){
            return state.id
        }

    },
    mutations:{
        setLogged(state, value){
            state.logged = value
        },
        setUser(state, value){
            state.id = value
        },

    },
    actions:{

    },
    modules:{

    }

})