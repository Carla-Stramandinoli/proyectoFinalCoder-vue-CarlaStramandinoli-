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
        <h5 class="offcanvas-title text-success" id="offcanvasRightLabel">Carrito de compras</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
      <!-- tabla del carrito -->
        <table class="table table-responsive">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr v-for="(producto, index) of data" :key="index">
              <td>{{ producto.name }}</td>
              <td class="cantidad">
                <input @mouseup="cantidadTotalEditada(producto)" type="number" min="1" class="editarCantidad"
                  v-model="producto.cantidad">
              </td>
              <td>${{ producto.total }}</td>
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
              <th id="precio-total">${{ obtenerTotal() }}</th>
            </tr>
          </tfoot>
        </table>
        <!-- form de envio -->
        <div class="collapse" id="collapseExample">
          <ValidationObserver v-slot="{ handleSubmit }">
            <form id="formulario">
              <div class="card card-body card-shipping">
                <div class="mb-3">
                  <ValidationProvider name="barrio" rules="required" v-slot="{ errors }">
                  <label class="form-label">Barrio:</label>
                  <input v-model="barrio" type="text" class="form-control">
                  <span class="text-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <div class="mb-3">
                  <ValidationProvider name="direccion" rules="required" v-slot="{ errors }">
                  <label class="form-label">Direccion:</label>
                  <input v-model="direccion" type="text" class="form-control">
                  <span class="text-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <div class="mb-3">
                  <ValidationProvider name="codigo postal" rules="numeric|required|digits:4" v-slot="{ errors }">
                    <label class="form-check-label" for="exampleCheck1">Codigo postal:</label>
                    <input v-model="codigoPostal" type="number" class="form-control">
                    <span class="text-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <button @click="finalizarCompra(handleSubmit)" type="button" class="btn btn-success">Enviar
                  compra</button>
              </div>
            </form>
          </ValidationObserver>
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
import $ from 'jquery/src/jquery.js';
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import { extend } from 'vee-validate';
import { required, numeric, digits } from 'vee-validate/dist/rules';

extend('required', {
    ...required,
    message: 'Este campo es obligatorio.',
});

extend('digits', {
    ...digits,
    message: 'El campo {_field_} solo puede contener 4 caracteres.'
});

extend('numeric', {
    ...numeric,
    message: 'El campo {_field_} solo puede contener numeros.'
});

export default {
  name: 'CarritoCompras',
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  props: {
    elements: Array
  },
  data() {
    return {
      data: this.elements,
      total: 0,
      barrio: '',
      direccion: '',
      codigoPostal: 0,
      modificarCantidad: ''
    }
  },
  methods: {
    ...mapGetters('moduloClientes', ['getUsuActivo']),
    // Obtener total de toda la compra
    obtenerTotal() {
      let total = 0;
      this.$data.data.forEach(element => {
        total += parseFloat(element.total);
      })
      return this.total = total;
    },
    // Obtener total al modificar el input del carrito
    cantidadTotalEditada(producto) {
      producto.total = producto.cantidad * producto.precio;
      this.total = this.obtenerTotal();
    },
    // Finalizar compra y hacer post a la api
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
        thisComp.$toastr.s("Carrito enviado!");
        $("#offcanvasRight").offcanvas('hide');
        $("#collapseExample").collapse('hide');


      });
    },
    //Borrar elemento
    BotonParaBorrar(index) {
      this.$data.data.splice(index, 1);
    },
    // Vaciar todo el carrito
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

.editarCantidad {
  width: 35%;
}

.totalIn {
  width: 50%;
}
</style>