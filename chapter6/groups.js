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
    
}

let group = Group.from([10, 20]);
console.log(group);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false