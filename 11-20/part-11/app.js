const app = Vue.createApp({
    data () {
        return {
          skills: ['HTML', 'CSS', 'JavaScript', 'Vue', 'Php', 'Laravel'],
          newSkill: '',
          addClass: 'removeItem',
        }

    },
    methods: {
        addItem() {
            this.skills.push(this.newSkill);
        },
        lineThrough(index) {

            this.addClass = skills[index];
        }
       
        
    }

}).mount('#app');