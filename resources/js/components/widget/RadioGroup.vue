<template>
    <div>
        <!--
        <radio-button  id="radio1" :name="name" data="apple" text="사과" v-model="selected" />
        <radio-button  id="radio2" :name="name" data="banana" text="바나나" v-model="selected" />
        <radio-button  id="radio3" :name="name" data="pear" text="배" v-model="selected" />
        <radio-button  id="radio4" :name="name" data="orange" text="귤" v-model="selected" />
        <radio-button  id="radio5" :name="name" data="kiwi" text="키위" v-model="selected" />
        -->

        <!-- for문으로 라디오 제작 by array-->
        <radio-button v-for="(item, i) in items" :key="i"
        :id="'radio'+i"
        :name="name"
        :data="item.data"
        :text="item.text"
        v-model="selected" />
    </div>
</template>

<script>
import RadioButton from './RadioButton.vue'
export default {
  components: { RadioButton },
    name: "RadioGroup",
    // props: [ "value", "items" ],
    props: {
        value: String,
        items: Array
    },

    data() {
        return {
            name: "group",
            selected: null,
        }
    },

    watch: {
        selected(val) {
            console.log(val)
            this.$emit('change', val)
        }
    },
    //vue3에서는 여러가지 //vue2에서는 component 안에서 무조건 1개만 가능.
    model: {
        event: 'change',
        prop: 'value'
    }
}
</script>
