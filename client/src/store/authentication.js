import router from '../router';
import HTTP from '../http';

export default {
    namespaced: true,
    state: {
        registerEmail: 'hello or',
        registerPassword: 'yoyo',
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
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        setRegisterEmail(state, email) {
            state.registerEmail = email;
        },
        setRegisterPassword(state, password) {
            state.registerPassword = password;
        },
    },
};