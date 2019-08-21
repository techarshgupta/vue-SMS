<template>
    <md-button @click="onClick">Login</md-button>
</template>

<script>
import Vue from 'vue';
    export default {
        methods:{
           onClick () {
              //this.$store.dispatch('login/signIn');
              window.location = 'http://schoolspedia.com:7070/oauth2/authorization/google';


          }
        }
    }
</script>