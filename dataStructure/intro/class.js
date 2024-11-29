// Declaration
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }
  
  // Expression; the class is anonymous but assigned to a variable
  const Rectangle = class {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  
  // Expression; the class has its own name
  const Rectangle = class Rectangle2 {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };

  

class Student{
    constructor(firstName,lastName,year,grade){
        this.firstName=firstName
        this.lastName=lastName
        this.year=year
        this.grade=grade

    }
}

//creating objects from classes

let student1=new Student("student","name","year","grade")
let student2=new Student("student2","name2","year2","grade2")