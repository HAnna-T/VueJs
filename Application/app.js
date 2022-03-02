const app = Vue.createApp({
    data() {
      return {
        courseGoalA: 'Finish the course and learn Vue!',
        courseGoalB: 'Master Vue and build amazing apps!',
        vueLink: 'https://vuejs.org/',
        count: 0,
         name: '',
       
       
      };
    },
   computed :{
      fullname(){
        console.log('Running again ...')
        if(this.name === ''){
          return ''
        }
        return this.name + ' ' + 'Schwarzmuller';
      }
   },
   
    methods: {
      outputGoal() {
        const randomNumber = Math.random();
        if(randomNumber < 0.5){
          return this.courseGoalA
        }
        else{
          return this.courseGoalB
        }
        
      },
      add(num){
        return this.count = this.count +num
     },
     reduce(num){
       return this.count = this.count -num
     },
     warn(message,event){
      if(event){
        event.preventDefault()
      }
      console.log(message)
     },
     setName(event){
       this.name = event.target.value
     },
     submitForm (){
      
      console.log('Submitted!')
     },
     confirmInput(){
       this.confirmedName = this.name

     }
  }
})
  
  app.mount('#user-goal');