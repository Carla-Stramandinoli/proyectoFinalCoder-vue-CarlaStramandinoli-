<template>
    <div>
        <form>
            <div class="mb-3">
                <label class="form-label">Nombre:</label>
                <input v-model="newProdNombre" type="text" class="form-control">
            </div>
            <div class="mb-3">
                <label class="form-label">Precio:</label>
                <input v-model="newProdPrecio" type="number" class="form-control">
            </div>
            <div class="mb-3">
                <label class="form-check-label" for="exampleCheck1">Descripcion:</label>
                <input v-model="newProdDescripcion" type="text" class="form-control">
            </div>
            <div class="mb-3">
                <label class="form-check-label" for="exampleCheck1">Link de la imagen:</label>
                <input v-model="newProdImg" type="text" class="form-control">
            </div>
            <div class="mb-3">
                <label class="form-check-label" for="exampleCheck1">Cantidad inicial:</label>
                <input v-model="newProdCantidad" type="number" class="form-control" placeholder="Ingresar 1">
            </div>
            <button @click.prevent="agregarProducto()" type="submit" class="btn btn-outline-dark">Agregar</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios';
import $ from 'jquery/src/jquery.js';
import 'bootstrap'

export default {
    name: 'FormNewProd',
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
            this.$toastr.s("Producto agregado correctamente");
        }
    }
};
</script>
<style lang='' scoped>
</style>