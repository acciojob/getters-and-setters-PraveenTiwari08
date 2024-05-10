class Person {
	constructor(name) {
		this.name = name;
	}
	set age(age) {
		this._age = age;
	}
	get age() {
		return this._age;
	}
}

class Student extends Person {
	constructor(name) {
		super(name); // Call the constructor of the parent class
	}
	study() {
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	constructor(name) {
		super(name); // Call the constructor of the parent class
	}
	teach() {
		console.log(`${this.name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
