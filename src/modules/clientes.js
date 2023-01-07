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
        getListaAdmin(state) {
            return state.listaAdmin;
        }
    },
    mutations: {
        cargarUsuarios(state, usuariosApiCli) {
            state.listaUsuCli = usuariosApiCli;
        },
        cargarAdmin(state, usuariosApiAdmin) {
            state.listaAdmin = usuariosApiAdmin;
        },
        guardarUsuActivo(state, usuarioActivo) {
            state.usuarioActivo = usuarioActivo;
        },
        guardarUsuPost(state, usuarioActivo){
            state.usuarioActivo = usuarioActivo
        },
        desloguearUsuario(state) {
            state.usuarioActivo = null;
        }
    },
    actions: {
        obtenerUsuariosApi: async function ({ commit }) {
            const datos = await fetch("https://639f79eb5eb8889197fd60c9.mockapi.io/usuario");
            const clientes = await datos.json();
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
            const admin = await datos.json();
            const adminMapeados = admin.map((usu) => {
                return {
                    email: usu.email,
                    password: usu.password
                }
            });
            commit('cargarAdmin', adminMapeados)
        }
    }
}