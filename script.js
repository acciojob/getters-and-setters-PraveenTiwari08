//complete this code
class Person {
	name:""
	get name(nam){
		this.name = nam;
	}
	set age(age){
		this.age = age;
	}
}

class Student extends Person {
	Person.nam = "Raj"
}

class Teacher extends Person {
	Person.nam = "Raj"
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
