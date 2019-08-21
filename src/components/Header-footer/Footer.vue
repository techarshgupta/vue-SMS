<template>
    <footer>
        <div class="container">
            <div>
                <img class="logoIcon" :src="logoIcon" />
                <div class="contact">Stay tuned</div>
            </div>
        </div>
    </footer>
</template>

<script>
import Logo from '../../assets/images/logo.png';

    export default {
        name: "Footer",
        data () {
            return {
                logoIcon: Logo,
            }
        }
    }
</script>

<style scoped>
    footer{
        margin-top: 30%;
    }
    .logoIcon{
        width: 30%;
    }
</style>