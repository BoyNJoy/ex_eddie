<template>
    <div>
        <!--
        <span v-if="doToggle">1</span>
        <span v-else>2</span>
        -->

        <!--
        <span v-show="doToggle"> 1 </span>
        <span> 2 </span>
        -->

        <!--중복처리를 방지하기 위해서 key를 씀-->

        <!-- <span v-for="item in items" :key="item"> {{ item }} </span> -->

        <div v-for="(item, index) in items" :key="index"> {{ item }} : {{ index }}</div>


        <div v-for="(item, index) in items" :key="index"> {{ index }} : {{ item.name}} - {{ item.color}} </div> -->

        <div v-for="({name, color}, index) in items" :key="index"> {{ index }} : {{ name }} - {{ color }} </div>

        <div v-for="({name: N, color: C}, index) in items" :key="index"> {{ index }} : {{ N }} - {{ C }} </div>

        <button @click="onClick">Click</button>

        <div> {{ num }} </div>
        <div> {{ num1 || 200 }} </div>
        <div> {{ isEnabled }} </div>
        <div> {{ arr }} </div>
        <div> {{ obj }} </div>
    </div>
</template>

<script>
 export default {
     name: "Main",

    props: {
        num: {
            type: Number,
            default: 100
        },

        num1 : {
            type: Number
        },

        isEnabled: {
            type: Boolean,
            default: true
        },

        arr: {
            type: Array,
            // default: [] : 이렇게 쓰면 에러
            default() {
                return ["ddd"]
            }
        },

        obj: {
            type: Object,
            default() {
                return {
                    id:"dd",
                    name: "n",
                    ddd: "d"
                }
            }
        }

    },

    data() {
        return {
            doToggle: false,
            items: [
                {name: "apple", color:"red"},
                {name: "banana", color:"yellow"},
                {name: "grape", color:"pupple"},
                // "apple", "banana", "grape"
            ],

        }
    },

    methods: {
        onClick() {
            this.doToggle = !this.doToggle
            console.log("doToggle : " + this.doToggle)
        }
     },

 }
</script>


<style>

</style>
