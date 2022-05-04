<template>
    <div>
        <label :for="id">
            <input :id="id" type="radio" :name="name" :value="data" @change="$emit('changeValue', data)" /> <!-- key 값 앞에 : 를 쓰면 변수를 받을 수 있음 -->
            <!-- emit = event호출 -->
            {{ text }}
        </label>
    </div>
</template>

<script>
export default {
    name: "RadioButton",
    props: [ "id", "value", "text", "name", "data" ],
    model: {
        //model 상위계념으로 값을 넘김
        //event와 prop 두개 항상 정의
        //event가 호출되면 prop으로 값이 바뀐다.
        //prop은 probs에 있는 값이다.
        //v-model로 prop 값을 전달 함,
        event: 'changeValue',
        prop: 'value'
    }
}
</script>
