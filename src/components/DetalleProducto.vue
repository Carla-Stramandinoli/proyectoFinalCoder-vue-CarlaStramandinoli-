<template>
    <div class="card col-3 m-2">
        <img :src="img" :alt="name">
        <div class="card-body">
            <h5 class="card-title"><u>{{ name }}</u></h5>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong> Mas info</strong>
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample">
                    <p class="card-text">{{ description }}</p>
                </div>
            </div>
            <p class="card-text">$<em>{{ precio }}</em></p>
            <button class="btn btn-success">Agregar producto</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetalleProducto',
    data() {
        return {
            name: "Lemon Pie",
            img: "../src/assets/lemonpie.jpg",
            description: "Base de masa sablee, relleno de curd de limon y merengue italiano",
            precio: 1800,
        }
    }
};
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
