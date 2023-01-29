<template>
    <div>
        <ValidationObserver v-slot="{ handleSubmit }">
            <form role="form" class="form-control" @click.prevent="handleSubmit(agregarProducto)">
                <div class=" mb-3">
                <!-- nombre del producto -->
                    <ValidationProvider name="nombre" rules="alpha|required" v-slot="{ errors }">
                        <label class="form-label">Nombre:</label>
                        <input v-model="newProdNombre" type="text" class="form-control">
                        <span class="text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
                <div class="mb-3">
                <!-- precio -->
                    <ValidationProvider name="precio" rules="numeric|required" v-slot="{ errors }">
                        <label class="form-label">Precio:</label>
                        <input v-model="newProdPrecio" type="number" class="form-control">
                        <span class="text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
                <div class="mb-3">
                <!-- descripcion -->
                    <ValidationProvider name="descripcion" rules="required" v-slot="{ errors }">
                        <label class="form-check-label" for="exampleCheck1">Descripcion:</label>
                        <input v-model="newProdDescripcion" type="text" class="form-control">
                        <span class="text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
                <div class="mb-3">
                <!-- link de la imagen -->
                    <ValidationProvider name="link" rules="required" v-slot="{ errors }">
                        <label class="form-check-label" for="exampleCheck1">Link de la imagen:</label>
                        <input v-model="newProdImg" type="text" class="form-control">
                        <span class="text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
                <div class="mb-3">
                <!-- cantidad inicial -->
                    <ValidationProvider name="cantidad" rules="numeric|required|between:1,1" v-slot="{ errors }">
                        <label class="form-check-label" for="exampleCheck1">Cantidad inicial:</label>
                        <input v-model="newProdCantidad" type="number" class="form-control" placeholder="Ingresar 1">
                        <span class="text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
                <button type="submit" class="btn btn-outline-dark">Agregar</button>
            </form>
        </ValidationObserver>
    </div>
</template>

<script>
import axios from 'axios';
import $ from 'jquery/src/jquery.js';
import 'bootstrap';
import { ValidationObserver, ValidationProvider  } from 'vee-validate';
import { extend } from 'vee-validate';
import { required, alpha, numeric, between } from 'vee-validate/dist/rules';


extend('required', {
    ...required,
    message: 'Este campo es obligatorio.',
});

extend('alpha', {
    ...alpha,
    message: 'El campo {_field_} solo puede contener letras.'
});

extend('numeric', {
    ...numeric,
    message: 'El campo {_field_} solo puede contener numeros.'
});
extend('between', {
    ...between,
    message: 'El campo {_field_} solo puede contener el numero 1.'
});

export default {
    name: 'FormNewProd',
    components: {
        ValidationProvider,
        ValidationObserver,
    },
    data() {
        return {
            newProdNombre: '',
            newProdPrecio: '',
            newProdDescripcion: '',
            newProdImg: '',
            newProdCantidad: ''
        }
    },
    methods: {
        // Post del producto a la api
        agregarProducto() {
            const nuevoProducto = {
                name: this.newProdNombre,
                precio: this.newProdPrecio,
                description: this.newProdDescripcion,
                img: this.newProdImg,
                cantidad: this.newProdCantidad
            }
            const URLPOST = "https://639f79eb5eb8889197fd60c9.mockapi.io/productos";
            const request = axios({
                method: "POST",
                url: URLPOST,
                data: nuevoProducto,
            })
            let thisComponente = this;
            request.then(function (response) {
                console.log(response);
                Object.assign(thisComponente.$data, thisComponente.$options.data())
                $("#offcanvasRight").offcanvas('hide');
                thisComponente.$emit("reloadNewItem")
            })
            this.$toastr.s("Nuevo producto agregado correctamente");
        }
    }
};
</script>
<style lang='' scoped>
</style>