import router from '../router';
import HTTP from '../http';

export default {
    namespaced: true,
    state: {
        // keep track of any change that made within the :
        registerEmail: 'hello',
        registerPassword: 'WORLD',
        token: null,
    },
    // in order to make affect on the elements in the Register.vue file
    // we need to create musations
    // add ->   'no-param-reassign': 'off',   <- in the .eslintrc.js file
    actions: {
        register({ commit, state }) {
            return HTTP().post('/auth/register', {
                    email: state.registerEmail,
                    password: state.registerPassword,
                })
                .then(({ data }) => {
                    commit('setToken', data.token);
                    router.push('/');
                });
        },
    },
    // in order to bind email,pass and to make changes
    // in the state...we defined few functions that affect the state
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        // taked a state and email as a payload
        setRegisterEmail(state, email) {
            state.registerEmail = email;
        },
        setRegisterPassword(state, password) {
            state.registerPassword = password;
        },
    },
};