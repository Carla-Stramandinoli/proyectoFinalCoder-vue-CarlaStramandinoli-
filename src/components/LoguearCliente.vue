<template>
    <div>
        <form>
            <div class="mb-2">
                <label for="exampleInputEmail1" class="form-label">Email:</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="mb-2">
                <label for="exampleInputPassword1" class="form-label">Contraseña:</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <button type="submit" class="btn btn-success">Ingresar</button>
        </form>
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