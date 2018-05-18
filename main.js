new Vue({
    el: '#homeWork1',
    data: {
        isPrepare: false,
        firstName: '',
        lastName: '',
        personList: []
    },
    methods: {
        addPerson(){
            this.personList.push({});
            console.log(this.personList);
        }
        
    }
});