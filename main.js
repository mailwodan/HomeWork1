new Vue({
    el: getElement(),
    data: {
        isPrepared: false,
        personData: {
            firstName: {
                displayLabel: 'First Name',
                useData: ''
            },
            lastName: {
                displayLabel: 'Last Name',
                useData: ''
            },
            email: {
                displayLabel: 'EMail',
                useData: ''
            }
        },
        additionPersons: [],
        testField: 'Hello World !!!'
    },
    computed: {
        getFullName(){
            return this.personData.firstName.useData + ' ' + this.personData.lastName.useData;
        }
    },
    methods: {
        addPerson(){
            this.additionPersons.push({});
        },
        delPerson(aIndex){
            this.additionPersons.splice(aIndex, 1);
        }
    }
})

function getElement() {
    return '#homeWork1';
}
