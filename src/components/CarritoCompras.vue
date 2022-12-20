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
        <div class="btn-group">
          <button @click="finalizarCompra()" class="btn btn-outline-dark">Finalizar compra</button>
          <button @click="vaciarCarrito()" id="btn-delete" class="btn btn-outline-secondary">Vaciar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CarritoCompras',
  props: {
    elements: Array
  },
  data() {
    return {
      data: this.elements,
      total: 0,
    }
  },

  methods: {
    obtenerTotal() {
      let total = 0;
      this.$data.data.forEach(element => {
        total += parseFloat(element.precio);
      })
      return this.total = total;
    },
    finalizarCompra() {
      alert("Compra finalizada!")
      let body = {
        precioFinal: this.obtenerTotal(),
        list_productos: this.$data.data,
      }
      const URLPOST = "https://639f79eb5eb8889197fd60c9.mockapi.io/carrito";
      const request = axios({
        method: "POST",
        url: URLPOST,
        data: body,
      })
      request.then(function (response) {
        console.log(response);
      })
      this.$emit("vaciarCarrito");
      this.$data.data = [];
    },
    vaciarCarrito() {
      if (confirm("Estas seguro que deseas eliminar la lista")) {
        this.$emit("vaciarCarrito");
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
</style>