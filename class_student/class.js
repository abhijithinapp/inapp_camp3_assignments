
class Student{
    constructor(name, standard, age, gender, location){
        this.name = name
        this.standard = standard
        this.age = age
        this.gender = gender
        this.location = location
    }
    displayAll(){
        console.log(`
        Name: ${this.name}
        standard: ${this.standard}
        age: ${this.age}
        gender: ${this.gender}
        location: ${this.location}`)
    }
    
    findIfNotEmpty(input){
        if (input.trim().length === 0)
            alert("Empty String")
        else return true
    }
    
    formatString(input){
        input = input.trim()
        input = input.toLowerCase().split(' ').map(function(word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
          }).join(' ');
        return input
    }
    setName(name){
        if (this.findIfNotEmpty(name))
            this.name = this.formatString(name) 
    }   
    deleteName() {
        delete this.name
    }  

    setStandard(standard){
        if (this.findIfNotEmpty(standard))
            this.standard = this.formatString(standard) 
    }   
    deleteStandard() {
        delete this.standard
    }  

    setAge(age){
        if (this.findIfNotEmpty(age))
            this.age = this.formatString(age) 
    }   
    deleteAge() {
        delete this.age
    } 

    setGender(gender){
        if (this.findIfNotEmpty(gender))
            this.gender = this.formatString(gender) 
    }   
    deleteGender() {
        delete this.gender
    } 

    setLocation(location){
        if (this.findIfNotEmpty(location))
            this.location = this.formatString(location) 
    }   
    deleteLocation() {
        delete this.location
    } 
}

student1 = new Student()
student1.setName('  abhijith sajeev ')
student1.displayAll()
student1.deleteName()
student1.displayAll()
