<template>
    <div>
        <h3>Carrito {{ numeroCarrito }}</h3> 
        <!-- vincular titulo con usuario -->
        <table class="table table-responsive table-bordered border-dark">
            <thead>
                <tr>
                    <th scope="col">Producto</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr v-for="(element , index) of lista" :key="index">
                    <td>{{ element.name  }}</td>
                    <td>{{ element.cantidad  }}</td>
                    <td>${{ element.precio }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>

export default {
    name: 'CarritoAdmin',
    props: {
        lista: Array,
        numeroCarrito: String
    },
    data() {
        return {
           
        }
    },
    methods: {

        }
    }
</script>
<style  scoped>

</style>