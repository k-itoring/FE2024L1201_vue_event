// JavaScript用ファイル
new Vue({
    el: '#app',
    data() {
        return {
            count: 1,
            num: 0
        };
    },
    methods: {
        increment(){
            this.count=this.count+this.num;
        },
        decrement(){
            this.count=this.count-this.num;
        },
        double(){
            this.count=this.count*2;
        },
        half(){
            this.count=this.count/2;
        },
        reset(){
            this.count=1;
        }
        
    }
});