<template>
        <div class="modal" id="exampleModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Registrarse:</h5>
                    </div>
                    <div class="modal-body">
                        <label for="exampleInputName" class="form-label">Nombre:</label>
                        <input type="text" class="form-control" id="exampleInputName">
                        <label for="exampleInputLastName" class="form-label">Apellido:</label>
                        <input type="text" class="form-control" id="exampleInputLastName">
                        <label for="exampleInputEmail1" class="form-label">Email:</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <label for="exampleInputPassword1" class="form-label">Contraseña:</label>
                        <input type="password" class="form-control" id="exampleInputPassword1">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-success add-cliente">Registrarse</button>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>

export default {
    name: 'ModalFormulario',
    data() {
        return {
            newClienteName: "",
            newClienteLastName: "",
            newClienteEmail: "",
            newClientePassword: "",
        }
    }
};
</script>
<style scoped>

</style>