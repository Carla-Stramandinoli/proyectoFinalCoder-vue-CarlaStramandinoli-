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
        <table class="table table-success table-responsive">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
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
              <th id="precio-total"> ${{ obtenerTotal }}</th>
            </tr>
          </tfoot>
        </table>
        <button @click="finalizarCompra()" class="btn btn-dark">Finalizar compra</button>
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
    }
  },
  computed: {
    obtenerTotal() {
      let total = 0;
      this.data.forEach(element => {
        console.log(element);
        total += parseFloat(element.precio);
      })
      return total;
    }
  },
  methods: {
    finalizarCompra() {
      alert("Compra finalizada!")
      let body = {
        precioFinal: this.obtenerTotal,
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