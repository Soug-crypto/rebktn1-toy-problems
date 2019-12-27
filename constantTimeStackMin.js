/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */


  var Stack = function() {
    this._storage = [];
    this.previousMin = [];
    this.counter = this.counter || 0;

  // add an item to the top of the stack
    this.push = function(value) {

      this._storage.push(value);

      if(this._storage.length === 1){
        this.minimum = this._storage[0];
      }

      this.counter++;

      if(value <= this.minimum){
        this.minimum = value
        this.previousMin.push(value)
      }

    };

  // remove an item from the top of the stack
    this.pop = function() {
      if (this._storage[this._storage.length - 1] === this.minimum){
        this.previousMin.pop()
        this.minimum = this.previousMin [this.previousMin.length - 1];
      }
      this._storage.pop();
      this.counter--;
    };

  // return the number of items in the stack
    this.size = function() {
      return this.counter;
    };

  // return the minimum value in the stack
    this.min = function() {
      return this.minimum
    };

  };
