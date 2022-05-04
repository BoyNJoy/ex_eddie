<template>
    <div class="header">
        <span> {{title}} </span>
    </div>
</template>

<script>
export default {
    name: "Header",
    data() {
        return{
            title: process.env.MIX_URL
        }
    }
}
</script>

<style>
    .header { height: 64px; background-color: #415aef; color:#ffffff; display: flex; align-items: center; justify-content: center; }
</style>
