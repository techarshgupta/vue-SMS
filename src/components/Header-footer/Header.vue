<template>
    <header>
        <div class="container clear">
            <div class="logo">
                <img class="logoIcon" :src="logoIcon">
            </div>
            <div class="nav">
                <img :src="menuIcon" @click="showSidePanel = !showSidePanel ">
            </div>
            <md-drawer :md-active.sync="showSidePanel" :md-right="true" class="side-drawer">
                <md-toolbar class="md-transparent" md-elevation="0">
                    <span class="md-title"><router-link to="/">My App name</router-link></span>
                </md-toolbar>

                <md-list>
                    <md-list-item>
                        <md-icon>move_to_inbox</md-icon>
                        <span class="md-list-item-text"><router-link to="/add-school">Add School</router-link></span>
                    </md-list-item>
                </md-list>
            </md-drawer>
        </div>
    </header>
</template>

<script>
import Logo from '../../assets/images/logo.png';
import Menu from '../../assets/images/menu.png';

    export default {
        name: "Header",
        data () {
            return {
                logoIcon: Logo,
                menuIcon: Menu,
                showSidePanel: false,
            }
        },
        methods:{
            showSidePanel(){
                this.showSidePanel = true
            }
        }
    }
</script>

<style scoped>
    .logoIcon{
        width: 30%;
    }
</style>