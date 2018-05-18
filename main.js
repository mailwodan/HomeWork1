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
        },
        deletePerson(index){
            console.log(index);
            console.log(this.personList);
            this.personList.splice(index, 1);
        }
        
    },
    computed: {
        personListCopy(){
            return this.personList;
        }
    }
});