<template>
    <div>
        <!-- Vue 파일 하나
        Vue Component 형태
        HTML의 영역. -->

        <!-- 변수 적용 -->
        <!-- <span> {{ title }} </span> -->
        <span> {{ title || "WOW"}} </span> <!-- ||값으로 default 값을 정의 함.-->
        <br>
        <span> {{ num }} </span>
        <br>
        <span> {{ json }}</span>
        <br>
        <span> {{ json.width }}</span>
        <br>
        <span> {{ json.name }}</span>
        <br>
        <span> width: {{ json.width + 100 }}, height: {{ json.height }}</span>
        <br>
        <span> {{ getName() }} </span>
        <br>
        <span> {{ getMethodThisChangedCheck() }} </span>
        <br>
        <button @click="increment()"> click </button>
        <br>
        <span>{{ msg }}</span>
        <br>
        <input type="text" @input="onInput" />
    </div>
</template>

<script>
    export default { //본체? //이 안에 변수들을 정의내리고 사용
        props: ["title"], //array로 접근 //props:외부에서 받은 값을 받아서 사용.  //immutable : 외부에서 받은 값을 바꾸지 않는 것을 권장 : 바뀌기는 하지만 error가 뜸.
        data() { //data 안에 항상 사용. //변수 정의
            return {
                // title: "WOW",
                num: 1111,
                json:  {
                    width: 100,
                    height: 200,
                    name: "eddie"
                },
                FirstName: "Eddie",
                LastName: "Jin",
                msg: ""
            }
        },

        watch: { //변수를 감시 |
            num(val){
                if (val%3 == 1) {
                    this.msg = "나머지는 1 입니다."
                } else if (val%3 == 2) {
                    this.msg = "나머지는 2 입니다."
                } else {
                    this.msg = "나머지가 없습니다."
                }
                console.log(val)
            }
        },

        methods: {

            //주로 위에 형식으로 쓰지만 까서 보면 아래처럼 보임.
            getName(){
                this.FirstName = "Amy"  //여기서 바꾸면 이후 계속 바뀐 상태로 사용 함.  //getMethodThisChangedCheck
                return this.FirstName + " " + this.LastName;
            },

            /*
            getName: function () {
                return this.FirstName + " " + this.LastName;
            }
            */

           getMethodThisChangedCheck() {
                return this.FirstName
           },

            //실행시 error가 뜸 : 되기는 함.
           checkPropsNoChange() {
               title = "ddd"
           },

           increment(){
               this.num++
           },


            onInput(e) {
                console.log(e)
            }
        },

        //life cycle
        create() {  //template 그리기 전
            console.log('create.')
        },

        mounted() { //template 그린 후
            console.log('Component mounted.')
        }
    }
</script>

<style scoped>

</style>
