const app = Vue.createApp({
    data () {
        return {
            firstName: '',
            lastName: '',
            FullName: ''
        }

    },
    computed: {
        // fullName() {
        //     return this.firstName + ' ' + this.lastName;
        // }
    },

    methods: {
        // fullName() {
        //     return this.firstName + ' ' + this.lastName;
        // }
        
    },
    watch: {
        firstName(value, oldValue) {
           return this.FullName = value + ' ' + this.lastName;
        },
        lastName(value, oldValue) {
            return this.FullName = this.firstName + ' ' + value;
        }
    }

}).mount('#app');