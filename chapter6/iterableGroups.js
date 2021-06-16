// Your code here (and the code from the previous exercise)
class Group {
  // Your code here.
  constructor(){
    this.members = [];
  }
  
  delete(val){
    this.members = this.members.filter(v => v !== val);
  }
  
  has(val){
    return this.members.includes(val);
  }
    
  add(val){
    if(!this.has(val))
    this.members.push(val);
  }
    
  static from(arr){
    let group = new Group;
    for(let item of arr){
     	group.add(item); 
  	}
    return group;
  }
  
  [Symbol.iterator](){
    return new GroupIterator(this);
  }
    
}

class GroupIterator {
  
  constructor(group){
    this.group = group;
    this.position = 0;
  }
  
  next(){
   if(this.position >= 	this.group.members.length) return {done:true};
    else {
      let result = {value: this.group.members[this.position], done:false};
      this.position++;
      return result;
    }
   
  }
}

Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this);
}  

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
