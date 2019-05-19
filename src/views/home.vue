<template>
        <div class="container">
            <img class="mainImg" src="../assets/home/主图_06.png" alt="mainImg"/>
            <img class="logoImg" src="../assets/home/logo_03.png" alt="logoImg"/>
            <img class="titleImg" src="../assets/home/文字.png" alt="titleImg"/>
            <p class="footer">开始寻找范西客之旅</p>
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
        flex-direction: column;
        align-items: center;
        height: auto;
        background: black url("../assets/home/background01.png") no-repeat ;
        background-size: 100%;
        width: 100%;
    }

    .mainImg{
        margin-top: 5rem;
        width: 50%;
    }

    .logoImg {
        position: absolute;
        top: 1rem;
        right: 1rem;
        width: 12%;
    }

    .titleImg{
        margin-top: 2rem;
        height: 1.5rem;
    }

    .footer{
        color: #FFFFFF;
        font-size: 0.8rem;
        margin-top: 14.7rem;
    }

</style>
