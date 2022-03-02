const app = Vue.createApp({
  data() {
    return {
      enteredGoal: "",
      goals: [],
      show:true,
      
    };
  },
  computed:{
     caption(){
        return this.show ? 'Hide List' : 'Show List'
     }  
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoal);
      this.enteredGoal = "";
    },
    hideAndShow(){
        this.show = !this.show
    }
  },

});

app.mount("#assignment");
