<template>
    <div class="container">
        <img class="background" src="../assets/page2/background02.png" alt="background"/>
        <img class="title" src="../assets/page2/标题.png" alt="title"/>

        <img class="btn1" src="../assets/page2/btn1.png"  alt="btn1"/>
        <img class="btn2" src="../assets/page2/btn2.png"  alt="btn2"/>
        <img class="btn3" src="../assets/page2/btn3.png"  alt="btn3"/>


        <img class="footer" src="../assets/page1/主图_06.png" height="50" width="50"/>
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
        justify-content: center;
        align-items: center;
        background-color: black;
        height: 100%;
    }

    .background {
        display: inline-flex;
        width: 100%;
    }

    .title{
        position: absolute;
        top: 2rem;
        width: 80%;
    }

    .btn1{
        position: absolute;
        top: 30%;
        width: 50%;
    }

    .btn2{
        position: absolute;
        top: 42%;
        width: 50%;
    }

    .btn3{
        position: absolute;
        top: 54%;
        width: 50%;
    }

    .footer{
        position: absolute;
        bottom: 1rem;
    }
</style>
