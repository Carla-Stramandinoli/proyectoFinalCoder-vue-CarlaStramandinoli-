<template>
  <div class="border">
    <h2>Carrito de compras:</h2>
    <table :class="estilo">
      <thead>
        <tr>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Brownie</td>
          <td>1</td>
          <td>$2000</td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-dark">Finalizar compra</button>
  </div>
</template>

<script>
export default {
  name: 'CarritoCompras',
  props: {
    estilo: Array
  },
  data() {
    return {
    }
  },
};
</script>
<style scoped>
button {
 align-items: end;
}
</style>