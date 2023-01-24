<template>
  <div>
    <div class="d-flex align-items-end">
      <button class="btn btn-success btn-position " type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
        <i class="bi bi-cart-check" style="font-size: 25px;"></i>
      </button>
    </div>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Carrito de compras</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <table class="table table-responsive">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr v-for="(producto, index) of elements" :key="index">
              <td>{{ producto.name }}</td>
              <td>{{ producto.cantidad }}</td>
              <td>${{ producto.precio }}</td>
              <td>
                <button type="button" @click="BotonParaBorrar(index)" class="btn btn-outline-dark">
                  <font-awesome-icon icon="fa-solid fa-trash" />
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Total</th>
              <th></th>
              <th id="precio-total"> ${{ obtenerTotal() }}</th>
            </tr>
          </tfoot>
        </table>
        <div class="collapse" id="collapseExample">
          <form id="formulario">
            <div class="card card-body card-shipping">
              <div class="mb-3">
                <label class="form-label">Barrio:</label>
                <input v-model="barrio" type="text" class="form-control">
              </div>
              <div class="mb-3">
                <label class="form-label">Direccion:</label>
                <input v-model="direccion" type="text" class="form-control">
              </div>
              <div class="mb-3">
                <label class="form-check-label" for="exampleCheck1">Codigo postal:</label>
                <input v-model="codigoPostal" type="number" class="form-control">
              </div>
              <button @click="finalizarCompra()" type="button" class="btn btn-success">Enviar compra</button>
            </div>
          </form>
        </div>
        <div class="btn-group">
          <button class="btn btn-outline-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample"
            aria-expanded="false" aria-controls="collapseExample">
            Finalizar compra
          </button>
          <button @click="vaciarCarrito()" id="btn-delete" class="btn btn-outline-secondary">Vaciar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  name: 'CarritoCompras',
  props: {
    elements: Array
  },
  data() {
    return {
      data: this.elements,
      total: 0,
      barrio: '',
      direccion: '',
      codigoPostal: 0
    }
  },
  methods: {
    ...mapGetters('moduloClientes', ['getUsuActivo']),
    obtenerTotal() {
      let total = 0;
      this.$data.data.forEach(element => {
        total += parseFloat(element.precio);
      })
      return this.total = total;
    },
    finalizarCompra() {
      let body = {
        emailCli: this.getUsuActivo(),
        precioFinal: this.obtenerTotal(),
        list_productos: this.$data.data,
        barrio: this.$data.barrio,
        direccion: this.$data.direccion,
        codigoPostal: this.$data.codigoPostal
      }
      const URLPOST = "https://639f79eb5eb8889197fd60c9.mockapi.io/carrito";
      const requestPromesa = axios({
        method: "POST",
        url: URLPOST,
        data: body,
      })
      let thisComp = this;
      requestPromesa.then(function (response) {
        console.log(response);
        Object.assign(thisComp.$data, thisComp.$options.data());
        document.getElementById("formulario").reset();
        thisComp.$data.data = [];
        thisComp.$props.elements = [];
        thisComp.$toastr.s("Carrito enviado!");
        thisComp.$router.push('/');
      });
    },
    //Borrar elemento
    BotonParaBorrar(index) {
      this.$data.data.splice(index, 1);
    },
    vaciarCarrito() {
      if (confirm("Estas seguro que deseas eliminar la lista")) {
        this.$emit("vaciar");
        this.$data.data = [];
        //Resolver como hacer para vaciar el carrito y que se pueda "volver a usar(que vuelva a calcular el total, envie bien la info a la api)" sin recargar la pagina 
      }
    }
  },
}

</script>
<style scoped>
button {
  align-items: center;
}

h5 {
  font-size: 30px;
}

.btn-position {
  position: fixed;
  z-index: 100;
}

.card-shipping {
  margin-top: 2%;
  margin-bottom: 2%;
}
</style>