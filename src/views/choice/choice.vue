<template>
    <div class="container">

        <img class="title" src="../../assets/choice/标题.png" alt="title"/>
        <img class="btn1" src="../../assets/choice/btn1.png" alt="btn1"/>
        <img class="btn2" src="../../assets/choice/btn2.png" alt="btn2"/>
        <img class="btn3" src="../../assets/choice/btn3.png" alt="btn3"/>

        <img class="footer" src="../../assets/home/主图_06.png" height="50" width="50"/>
    </div>

</template>

<script>
    export default {
        name: "choice"
    }
</script>

<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: auto;
        background: black url("../../assets/choice/background02.png") no-repeat ;
        background-size: 100%;
        width: 100%;
    }

    .background {
        display: inline-flex;
        width: 100%;
    }

    .title{
        margin-top: 2rem;
        width: 80%;
    }

    .btn1{

        margin-top: 3rem;
        width: 50%;
    }

    .btn2{

        margin-top: 1rem;
        width: 50%;
    }

    .btn3{

        margin-top: 1rem;
        width: 50%;
    }

    .footer{
        margin-top: 10rem;
        display: flex;
    }

</style>
