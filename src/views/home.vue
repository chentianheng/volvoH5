<template>
        <div class="container">
            <img class="mainImg" src="../assets/page1/主图_06.png" alt="mainImg"/>
            <img class="logoImg" src="../assets/page1/logo_03.png" alt="logoImg"/>
            <img class="homeImg" src="../assets/page1/background01.png" alt="homeImg"/>
            <img class="titleImg" src="../assets/page1/文字.png" alt="titleImg"/>
        </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: black;
        height: 100%;
    }

    .homeImg {
        display: inline-flex;
        width: 100%;
    }

    .mainImg{
        display: flex;
        position: absolute;
        top: 20%;
    }

    .logoImg {
        display: flex;
        position: absolute;
        top: 1rem;
        right: 1rem;
    }

    .titleImg{
        display: flex;
        position: absolute;
        top: 52%;
        height: 0.6rem;
    }


</style>
