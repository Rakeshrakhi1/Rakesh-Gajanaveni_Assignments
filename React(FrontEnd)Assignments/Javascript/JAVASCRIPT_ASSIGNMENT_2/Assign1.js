// class creation
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }
  
  // creating few instances or objects
  const rect1 = new Rectangle(20, 10);
  const rect2 = new Rectangle(13, 14);
  const rect3 = new Rectangle(40, 100);
  
  // accessing values of each object using '.' (dot) operator.
  document.write("Rect1 height:" + rect1.height);
  document.write ("Rect1 width:" + rect1.width);
  
  document.write("Rect2 height:" + rect2.height);
  document.write("Rect2 width:" + rect2.width);
  
  document.write("Rect3 height:" + rect3.height);
  document.write("Rect3 width:" + rect3.width);
  
  // assigning new value
  rect3.height = 19;
  rect3.width = 20;
  document.write("Updated Rect3 height: " + rect3.height);
  document.write("Updated Rect3 width: " + rect3.width);