<template>
    <div class="modal" id="exampleModalLogCliente" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Ingresar:</h5>
          </div>
          <div class="modal-body">
            <label for="exampleInputEmail1" class="form-label">Email:</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <label for="exampleInputPassword1" class="form-label">Contraseña:</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
          </div>
          <button type="submit" class="btn btn-success">Ingresar</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'LoguearCliente',
};
</script>

<style scoped>
input {
  width: 300px;
}
</style>