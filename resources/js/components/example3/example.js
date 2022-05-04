 /**
  * The following block of code may be used to automatically register your
  * Vue components. It will recursively scan this directory for the Vue
  * components and automatically register them with their "basename".
  *
  * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
  */

 //모든 뷰를 자동으로 등록하는 명령어.
const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//Vue의 최종 껍대기 하나
//ID 지정된 것 하나
//HTML에 이 ID값이 있는 아이가 있어야 이걸 뿌려 줄 수 있다.
import Vue from 'vue';
import Main from './Main'

new Vue({
    el: "#example-app",
    render(h){
        return h(Main)
    }
})
