<template>
    <div>
        <input type="text" v-model="message" /> <!-- v-model : data 바인딩 => listener를 변수로 받는 역할 -->
        <span>{{ message }}</span>
    </div>
</template>

<script>
export default {
    name: "Sub3",
    data() {
        return {
            message: "base value"//null
        }
    },

    methods: {
        getMessage() { return this.message }
    }
}
</script>
