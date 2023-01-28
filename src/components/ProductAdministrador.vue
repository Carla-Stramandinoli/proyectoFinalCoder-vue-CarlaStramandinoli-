<template>
  <div class="card col-2 border">
    <div class="card-body">
      <h2 class="card-title">
        <em>{{ nombre }}</em>
      </h2>
      <p class="card-text">
        $<em>{{ price }}</em>
      </p>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            v-bind:data-bs-target="`#acc` + idHtml.trim()" aria-expanded="false" aria-controls="collapseThree">
            <strong> Mas info </strong>
          </button>
        </h2>
        <div v-bind:id="`acc` + idHtml.trim()" class="accordion-collapse collapse" aria-labelledby="headingThree"
          data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p class="card-text">{{ description }}</p>
          </div>
        </div>
      </div>
      <br>
      <div class="d-flex justify-content-center">
        <div class="btn-group">
          <button @click="eliminarProducto(id)" class="btn btn-danger btn-sm">Eliminar producto</button>
          <button class="btn btn-success btn-sm" v-bind:data-bs-target="'#' + idHtml" data-bs-toggle="modal">Editar
            producto</button>
        </div>
        <div class="modal fade" v-bind:id="idHtml" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h2 class="modal-title fs-5" id="exampleModalLabel">Editar producto</h2>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <label>Nombre:</label>
                <input class="form-control" v-model="newName" type="text">
                <label>Precio:</label>
                <input class="form-control" v-model="newPrecio" type="number">
                <label class="label">Descripcion:</label>
                <input class="form-control" v-model="newDescripcion" type="text">
              </div>
              <div class="modal-footer btn-group">
                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                <button @click="editarProducto(id, idHtml)" type="button" class="btn btn-outline-dark">Guardar
                  cambios</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import $ from 'jquery/src/jquery.js';
import 'bootstrap'

export default {
  name: "ProductAdministrador",
  props: {
    idHtml: String,
    id: String,
    nClave: String,
    nombre: String,
    img: String,
    description: String,
    price: String,
    quantity: String,
  },
  data() {
    return {
      newName: this.$props.nombre,
      newPrecio: this.$props.price,
      newDescripcion: this.$props.description
    }
  },
  methods: {
    editarProducto(idElemento, idHtml) {
      const newDatosProduc = {
        name: this.newName,
        precio: this.newPrecio,
        descripcion: this.newDescripcion
      }
      const request = axios({
        method: "PUT",
        url: "https://639f79eb5eb8889197fd60c9.mockapi.io/productos/" + idElemento,
        data: newDatosProduc,
      })
      let thisComponente = this;
      request.then(function (response) {
        console.log(response);
        $('#' + idHtml).modal('hide');
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
        thisComponente.$emit("reloadNewItem")
      })
      this.$toastr.s("El producto fue editado");
    },
    eliminarProducto(idElemento) {
      const request = axios({
        method: "DELETE",
        url: "https://639f79eb5eb8889197fd60c9.mockapi.io/productos/" + idElemento,
      })
      if (confirm("Estas seguro que deseas eliminar este producto?")) {
        let thisComponente = this;
        request.then(function (response) {
          console.log(response);
          thisComponente.$emit("reloadNewItem")
        })
      }
    }
  }
};
</script>

<style scoped>
h2 {
  font-size: 20px;
}

input {
  width: 90%;
}
</style>
