<template>
    <div>
        main
        <!-- 고정으로 넣고 싶을 때 사용 -->
        <!--sub-1 title="I AM SUB1 by probs"/-->
        <sub-1 :title="sub1"/>
        <sub-2 :num="sub2"/>
        <sub-3 ref="sub3" />
        <button @click="onSub3Message"> get Message </button>

        <radio-group v-model="radioValue" :items="items" />
        {{ radioValue }}
    </div>
</template>

<script>

import Sub1 from './Sub1'
import Sub2 from './Sub2'
import Sub3 from './Sub3'
import RadioGroup from './widget/RadioGroup.vue'

export default {
    name: "Main",
    components: { Sub1, Sub2, Sub3, RadioGroup }, //component등록 끝.
    data() {
        return {
            sub1: "변수로 입력 받을 때 사용.",
            sub2: 12341111,
            radioValue: "",
            items: [
                {data:"apple", text:"사과"},
                {data:"banana", text:"바나나"},
                {data:"pear", text:"배"},
                {data:"orange", text:"귤"},
                {data:"kiwi", text:"키위"},
            ]
        }
    },

    methods: {
        onSub3Message() {
            // console.log(this.$refs.sub3.getMessage())
            this.sub1 = this.$refs.sub3.getMessage()

        }
    },

}
</script>
