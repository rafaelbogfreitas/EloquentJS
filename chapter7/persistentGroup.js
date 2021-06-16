class PGroup { 
  static empty = new PGroup([])
 
   add(item) {
     const newState = new PGroup(this.items);
     if(!this.items.includes(item))
   newState.items = [...this.items, item]
     return newState;
   }

   delete(item) {
     const newState = new PGroup(this.items);
     newState.items = this.items.filter(i => i !== item)
     return newState
   }

   has(item) {
     return this.items.includes(item)
   }
 
 constructor(items) {
    this.items = items 
   }
}

console.log(PGroup.empty)
let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false