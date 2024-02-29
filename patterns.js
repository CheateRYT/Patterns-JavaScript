// Фабрика для создания различных типов автомобилей
class CarFactory {
  createCar(type) {
    switch (type) {
      case "Sedan":
        return new SedanCar();
      case "SUV":
        return new SUVCar();
      default:
        throw new Error("Unknown car type");
    }
  }
}

class SedanCar {
  constructor() {
    this.type = "Sedan";
  }
}

class SUVCar {
  constructor() {
    this.type = "SUV";
  }
}

const factory = new CarFactory();
const sedan = factory.createCar("Sedan");
console.log(sedan.type); // Выведет: Sedan

//Observer наблюдатель
class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

class Observer {
  update(data) {
    console.log("Received data:", data);
  }
}

const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notify("Hello, observers!");

//facade Фасад
class Subsystem1 {
  operation1() {
    return "Subsystem1: Operation1";
  }

  operation2() {
    return "Subsystem1: Operation2";
  }
}

class Subsystem2 {
  operation1() {
    return "Subsystem2: Operation1";
  }

  operation2() {
    return "Subsystem2: Operation2";
  }
}

class Facade {
  constructor() {
    this.subsystem1 = new Subsystem1();
    this.subsystem2 = new Subsystem2();
  }

  operation() {
    let result = "Facade initializes subsystems:\n";
    result += this.subsystem1.operation1();
    result += this.subsystem2.operation2();
    return result;
  }
}

const facade = new Facade();
console.log(facade.operation());

//singleTon одиночка
class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
  }

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

const singleton1 = new Singleton();
const singleton2 = Singleton.getInstance();

console.log(singleton1 === singleton2); // Выведет: true

//Template Method (Шаблонный метод):
class AbstractClass {
  templateMethod() {
    this.baseOperation1();
    this.requiredOperation();
    this.baseOperation2();
  }

  baseOperation1() {
    console.log("AbstractClass: baseOperation1");
  }

  baseOperation2() {
    console.log("AbstractClass: baseOperation2");
  }

  requiredOperation() {
    throw new Error("Abstract method requiredOperation must be implemented");
  }
}

class ConcreteClass extends AbstractClass {
  requiredOperation() {
    console.log("ConcreteClass: requiredOperation");
  }
}

const concrete = new ConcreteClass();
concrete.templateMethod();

//Decorator (Декоратор):
class Coffee {
  getCost() {
    return 10;
  }

  getDescription() {
    return "Coffee";
  }
}

class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  getCost() {
    return this.coffee.getCost() + 2;
  }

  getDescription() {
    return this.coffee.getDescription() + ", Milk";
  }
}

const simpleCoffee = new Coffee();
console.log(simpleCoffee.getCost(), simpleCoffee.getDescription());

const coffeeWithMilk = new MilkDecorator(simpleCoffee);
console.log(coffeeWithMilk.getCost(), coffeeWithMilk.getDescription());
