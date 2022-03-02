const app = Vue.createApp({
    data(){
        return {
            number: 0,
            result :'',
            
            
        }
    },
    watch:{
        number(){
            const that = this;
            setTimeout(function(){
                that.number =0
            },5000)
        }
    },
    computed: {
        outputResult(){
            if(this.number <37){
                 return this.result = "Not there yet"
            }
            if(this.number >37){
                return this.result ='Too much!'
            }
            if(this.number===37){
               return  this.result = this.number;
            }
        }
    },
    methods: {
        
        addNumber(num){
            this.number = this.number + num;
            console.log(this.number)
        },
        
    },
    
})

app.mount('#assignment')