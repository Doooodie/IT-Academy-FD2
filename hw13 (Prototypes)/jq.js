class Man {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}
}

class Worker extends Man {
	constructor(name, surname, salary) {
		super(name, surname);
		this.salary = salary;
	}
}

class Boss extends Worker {
    constructor(name, surname, salary, ratio) {
        super(name, surname, salary)
        this.additionToSalary = this.salary * ratio;
    }
}

const boss = new Boss("Иван", "Иванов", 300, 1.2);

console.log(boss);