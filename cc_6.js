//Creating Base Class
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }


    describe() {
        return `Employee: ${this.name} | Department: ${this.department}`;
    }
}

//Creating Subclass
class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

describe() {
    return `Manager: ${this.name} | Department: ${this.department} | Team Size: ${this.teamSize}`;
}
}

class Company {
    constructor() {
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    listEmployees() {
        this.employees.forEach(employee => {
            console.log(employee.describe());
        }); 
    }   
}

//Creating Sample Employees
let emp1 = new Employee("Sara Roberts", "Engineering");
let emp2 = new Employee("John Torres", "Marketing");
let emp3 = new Employee ("Charlie Williams", "Human Resources");

//Creating Sample Manager
let manager1 = new Manager("Emily Davis", "Engineering", 5);
let manager2 = new Manager("Michael Brown", "Marketing", 3);
let manager3 = new Manager("Jessica Wilson", "Human Resources", 7);



//Creating Company Class

let myCompany = new Company();

myCompany.addEmployee(emp1);
myCompany.addEmployee(emp2);
myCompany.addEmployee(emp3);
myCompany.addEmployee(manager1);
myCompany.addEmployee(manager2);
myCompany.addEmployee(manager3);



// Initiating Company object to list all employees
myCompany.listEmployees();
