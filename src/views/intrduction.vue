<template>
    <div class="container">
        <img class="btn1" src="../assets/introduction/btn1.png" alt="btn1">
        <img class="btn2" src="../assets/introduction/btn2.png" alt="btn2">
    </div>
</template>

<script>
    export default {
        name: "introduction"
    }
</script>

<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: auto;
        background: black url("../assets/introduction/background000.png") no-repeat ;
        background-size: 100%;
        width: 100%;
    }

    .btn1{
        margin-top: 16rem;
        width: 30%;
    }

    .btn2{
        margin-top: 13rem;
        width: 30%;
    }
</style>
