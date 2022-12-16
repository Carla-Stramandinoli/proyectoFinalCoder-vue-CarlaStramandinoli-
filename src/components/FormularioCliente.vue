<template>
    <div>
        <div class="div-button">
            <h5>Ingresar como:</h5>
            <div class="container">
                <button @click="showModal" type="button" class="btn-cliente">Cliente</button>
            </div>
        </div>
        <modal-formulario ref="modal" />
    </div>
</template>

<script>
import ModalFormulario from './ModalFormulario.vue'
import $ from 'jquery/src/jquery.js';

export default {
    components: { ModalFormulario },
    name: 'FormularioCiente',
    props: {
        newClienteName: String,
        newClienteLastName: String,
        newClienteEmail: String,
        newClientePassword: Number
    },
    methods: {
        showModal() {
            let elementModal = this.$refs.modal.$el;
            $(elementModal).modal('show')
        }
    }
};
</script>
<style lang='' scoped>
</style>