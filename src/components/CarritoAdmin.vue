<template>
    <div>
        <div class="d-flex justify-content-center">
            <h5><strong>Carrito:</strong>{{ emailCarrito }}</h5>
            |
            <h5><strong>Fecha de creacion:</strong>{{ dateFormat }}</h5>
        </div>
        <table class="table table-responsive table-bordered border-dark">
            <thead>
                <tr>
                    <th scope="col">Producto</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio</th>
                    <th>
                        <button type="button" @click="borrarCarrito(idCarrito)" class="btn btn-dark">
                            <font-awesome-icon icon="fas-solid fa-trash" />
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr v-for="(element, index) of lista" :key="index">
                    <td>{{ element.name }}</td>
                    <td>{{ element.cantidad }}</td>
                    <td>${{ element.precio }}</td>
                    <td></td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th colspan="4" class="text-primary">Barrio: {{ $props.zona }}</th>
                </tr>
            </tfoot>
        </table>
    </div>
</template>
<script>
import axios from "axios";
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

export default {
    name: "CarritoAdmin",
    component: {
        FontAwesomeIcon
    },
    props: {
        lista: Array,
        emailCarrito: String,
        idCarrito: String,
        date: Number,
        zona: String
    },
    data() {
        return {
            id: this.$props.idCarrito,
        };
    },
    computed: {
        dateFormat() {
            let dateObject = new Date(this.$props.date);
            return dateObject.toDateString();
        }
    },
    methods: {
        borrarCarrito(idElemento) {
            let resultadoConfirm = confirm("Estas seguro que deseas eliminar este producto?");
            if (resultadoConfirm == true) {
                const request = axios({
                    method: "DELETE",
                    url: "https://639f79eb5eb8889197fd60c9.mockapi.io/carrito/" + idElemento,
                });
                let thisComponente = this;
                request.then(function (response) {
                    console.log(response);
                    thisComponente.$emit("reloadCart");
                })
            }
        },
    }
}
</script>
<style scoped>
th {
    width: 10%;
}
</style>
