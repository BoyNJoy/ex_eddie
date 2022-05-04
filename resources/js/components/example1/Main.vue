<template>
    <div class="main">
        <ex-header />
        <div class="container">
            <ex-side />
            <ex-body />
        </div>
    </div>
</template>

<script>

import ExHeader from './Header.vue'
import ExSide from './Side.vue'
import ExBody from './Body.vue'

export default {
  components: { ExHeader, ExSide, ExBody },

     name: "Main",
}
</script>

<style>
    .main {width: 100%; height: 100%;}
    .container {  display: flex; width: 100%; height: 100%; }
</style>
