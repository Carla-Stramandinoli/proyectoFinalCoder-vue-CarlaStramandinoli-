<template>
  <div class="card col-3 m-2">
    <img :src="img" :alt="name">
    <div class="card-body">
      <h5 class="card-title"><u>{{ name }}</u></h5>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <div></div>
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            v-bind:data-bs-target="(`#` + id)" aria-expanded="false" aria-controls="collapseThree">
            <strong> Mas info </strong>
          </button>
        </h2>
        <div v-bind:id="id" class="accordion-collapse collapse" aria-labelledby="headingThree"
          data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p class="card-text">{{ description }}</p>
          </div>
        </div>
      </div>
      <p class="card-text">$<em>{{ precio }}</em></p>
      <button class="btn btn-success">Agregar producto</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListadoProductos',
  props: {
    id: String,
    nClave: String,
    name: String,
    img: String,
    description: String,
    precio: Number,
  },
}
</script>

<style scoped>
h5 {
  font-size: 30px;
}

h2 {
  font-size: 30px;
  color: red;
}
</style>
