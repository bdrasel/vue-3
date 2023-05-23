const app = Vue.createApp({
    data () {
        return {
            mobile: '',
            name: {
                firstName: '',
                lastName: '',
            }
          
        
        }

    },
    watch: {
        mobile: function (val, oldVal) {
            console.log(val);
            if (isNaN(val)) {
                alert('Please enter a number');
                this.mobile = oldVal;
            }
            if (val.length === 11) {
                alert(val + ' opt is sent to your mobile');
                
            }

        },
        // 'name.firstName': function (val, oldVal) {
        //     console.log(val);
        // },

        name: {
            deep: true,
            handler: function (val, oldVal) {
                console.log(val);
            }
        }

    }

}).mount('#app');