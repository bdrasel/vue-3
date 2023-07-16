const app = Vue.createApp({
    data () {
        return {
            name: '',
        }
    },

    methods: {
        clear () {
            this.name = '';
        }
    }
  

});


app.component('contact-details', {
    data () {
        return {
            name: 'Rasel Hossain',
            email: 'rh023896@gmail.com',
            phone: '01700000000'
        }
    },

    template: `  <h3>Contact Details</h3>
            <p>Name: <strong>{{ this.name }}</strong> </p>
            <p>Email: <strong> {{ this.email }} </strong> </p>
            <p>Phone: <strong> {{ this.phone }} </strong> </p>
        `

});


app.mount('#app');

