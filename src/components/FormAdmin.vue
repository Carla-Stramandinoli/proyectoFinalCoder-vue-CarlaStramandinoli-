<template>
    <div class="modal" v-bind:id="(id)" data-backdrop="no" role="dialog" backdrdattabindex="-1">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Registrarse:</h5>
                </div>
                <ValidationObserver v-slot="{ handleSubmit }">
                    <div class="modal-body" id="modal-body">
                        <form role="form" class="form-control" @subtmit.prevent="newCliente()"
                            @submit.prevent="handleSubmit(validarFormulario)" id="formulario">
                            <!-- nombre -->
                            <ValidationProvider name="nombre" rules="alpha|required" v-slot="{ errors }">
                                <label for="exampleInputName" class="form-label">Nombre:</label>
                                <input v-model="newAdminName" type="text" class="form-control" placeholder="Pepe"
                                    id="exampleInputName">
                                <span>{{ errors[0] }}</span>
                                <br>
                            </ValidationProvider>
                            <!-- apellido -->
                            <ValidationProvider name="apellido" rules="alpha|required" v-slot="{ errors }">
                                <label for="exampleInputLastName" class="form-label">Apellido:</label>
                                <input v-model="newAdminLastName" type="text" class="form-control" placeholder="Lopez"
                                    id="exampleInputLastName">
                                <span>{{ errors[0] }}</span>
                                <br>
                            </ValidationProvider>
                            <!-- nombreEmpresa -->
                            <ValidationProvider name="empresa" rules="alpha_spaces|required" v-slot="{ errors }">
                                <label for="exampleInputEmpresa" class="form-label">Empresa:</label>
                                <input v-model="newAdminEmpresa" type="text" class="form-control"
                                    placeholder="Deli Munchies" id="exampleInputEmpresa">
                                <span>{{ errors[0] }}</span>
                                <br>
                            </ValidationProvider>
                            <!-- barrio -->
                            <ValidationProvider name="barrio" rules="alpha_spaces|required" v-slot="{ errors }">
                                <label for="exampleInputBarrio" class="form-label">Barrio:</label>
                                <input v-model="newAdminBarrio" type="text" class="form-control"
                                    placeholder="Ramos Mejia" id="exampleInputBarrio">
                                <span>{{ errors[0] }}</span>
                                <br>
                            </ValidationProvider>
                            <!-- email -->
                            <ValidationProvider name="email" rules="email|required" v-slot="{ errors }">
                                <label for="exampleInputEmail1" class="form-label">Email:</label>
                                <input v-model="newAdminEmail" type="email" class="form-control"
                                    placeholder="pepeLopez@hola.com" id="exampleInputEmail1"
                                    aria-describedby="emailHelp">
                                <span>{{ errors[0] }}</span>
                                <br>
                            </ValidationProvider>
                            <!-- password -->
                            <ValidationProvider name="password" rules="alpha_num|required" v-slot="{ errors }">
                                <label for="exampleInputPassword1" class="form-label">Contraseña:</label>
                                <input v-model="newAdminPass" type="password" class="form-control"
                                    placeholder="Debe contener letras y numeros" id="exampleInputPassword1">
                                <span>{{ errors[0] }}</span>
                                <br>
                            </ValidationProvider>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button @submit.prevent="validarFormulario()" type="submit"
                                    class="btn btn-success add-cliente">
                                    Registrarse
                                </button>
                            </div>
                        </form>
                    </div>
                </ValidationObserver>
            </div>
        </div>
    </div>
</template>
  
<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { extend } from 'vee-validate';
import { required, alpha, email, alpha_num, alpha_spaces } from 'vee-validate/dist/rules';
import axios from 'axios';
import { mapMutations } from 'vuex';

extend('required', {
    ...required,
    message: 'Este campo es obligatorio.',
});

extend('alpha', {
    ...alpha,
    message: 'El campo {_field_} solo puede contener letras.'
});

extend('alpha_spaces', {
    ...alpha_spaces,
    message: 'El campo {_field_} puede contener letras, numeros y espacios.'
});

extend('email', email);

extend('alpha_num', {
    ...alpha_num,
    message: 'El campo {_field_} debe contener letras y numeros.'
});

export default {
    name: 'FormAdmin',
    components: {
        ValidationProvider,
        ValidationObserver,
    },
    props: {
        titulo: String,
        id: String
    },
    data() {
        return {
            newAdminName: "",
            newAdminLastName: "",
            newAdminEmpresa: "",
            newAdminBarrio: "",
            newAdminEmail: "",
            newAdminPass: "",
        }
    },
    methods: {
        ...mapMutations('moduloClientes',['guardarUsuPost']),
        validarFormulario() {
            const newAdmin = {
                name: this.newAdminName,
                lastName: this.newAdminLastName,
                empresa: this.newAdminEmpresa,
                barrio: this.newAdminBarrio,
                email: this.newAdminEmail,
                password: this.newAdminPass,
            }
            const URLPOST = "https://639f79eb5eb8889197fd60c9.mockapi.io/administrador";
            const request = axios({
                method: "POST",
                url: URLPOST,
                data: newAdmin,
            })
            let thisComponente = this;
            request.then(function (response) {
                console.log(response);
                thisComponente.guardarUsuPost(newAdmin.name);
                thisComponente.$emit("enviar", { response, view: thisComponente.titulo });
            })
        }
    }
}
</script>