export default {
    namespaced: true,
    state: {
        usuarioActivo: null,
        listaUsuCli: [],
        listaAdmin: []
    },
    getters: {
        getUsuActivo(state) {
            return state.usuarioActivo;
        },
        getListaUsuCli(state) {
            return state.listaUsuCli;
        },
        getCli(state) {
            if (state.listaUsuCli !== undefined)
                return state.listaUsuCli;
            else{
                return [];
            }
        },
        getListaAdmin(state) {
            return state.listaAdmin;
        }
    },
    mutations: {
        cargarUsuarios(state, usuariosApiCli) {
            state.listaUsuCli = usuariosApiCli;
        },
        cargarAdmin(state, usuariosApiCli) {
            state.listaUsuCli = usuariosApiCli;
        },
        guardarNombreCliLog(state, usuarioActivo) {
            state.usuarioActivo = usuarioActivo;
        }
    },
    actions: {
        obtenerUsuariosApi: async function ({ commit }) {
            const datos = await fetch("https://639f79eb5eb8889197fd60c9.mockapi.io/usuario");
            const clientes = await datos.json();
            console.log(clientes);
            const usuMapeados = clientes.map((usu) => {
                return {
                    email: usu.email,
                    password: usu.password
                }
            });
            commit('cargarUsuarios', usuMapeados)
        },
        obtenerAdminApi: async function ({ commit }) {
            const datos = await fetch("https://639f79eb5eb8889197fd60c9.mockapi.io/administrador");
            const clientes = await datos.json();
            console.log(clientes);
            const adminMapeados = clientes.map((usu) => {
                return {
                    email: usu.email,
                    password: usu.password
                }
            });
            commit('cargarAdmin', adminMapeados)
        }
    }
}