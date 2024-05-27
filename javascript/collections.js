function mySet() {
    // the var collection will hold the set
    var collection = [];

    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };

    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };

    // this method will add an element to the set
    this.add = function(element) {
        if(!this.has(element)) {
            collection.push(element);
            return true;
        }
        return false;
    };

    // this method will remove an element from the set
    this.remove = function(element) {
        if(this.has(element)) {
            index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    };

    // this method will return the size of the collection
    this.size = function() {
        return collection.length;
    };

    // this method will return the union of two sets
    this.union = function(otherSet) {
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e) {
            unionSet.add(e)
        });
        secondSet.forEach(function(e) {
            unionSet.add(e);
        });
        return unionSet;
    };

    // this method will return the intersection of two sets as new set
    this.intersersection = function(otherSet) {
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e) {
            if (otherSet.has(e)){
               intersectionSet.add(e);
           }
        });
        return intersectionSet;
    };

    // this method will return the difference between two sets as a new set
    this.difference = function(otherSet) {
        var differenceSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e) {
            if (!otherSet.has(e)){
               differenceSet.add(e);
           }
        });
        return differenceSet;
    };

    // this method will test if the set is a subset of a different set
    this.subset = function(otherSet) {
        var firstSet = this.values();
        return firstSet.every(function(value) {
            return otherSet.has(value);
        });
    };

    // this method will test if the set is a duplicate of a different set
    this.duplicate = function(otherSet){
      var firstSet = this.values();
      var count=0;
      for (var i in firstSet){
          if (firstSet[i]===otherSet[i]){
              count++;
              }
      }
       if (count==Object.keys(this).length && Object.keys(this).length!=0){
        return true;
       }else{
         return false;
       }
    };
}

// Implementing methods
var setA = new mySet();
var setB = new mySet();
setA.add("a");
setA.add("b");
setA.add("c");
console.log(setA.values());
console.log('-----------');
setB.add("a");
setB.add("b");
console.log(setB.values());
console.log('-----------');
console.log("Union of setA & setB: ", setA.union(setB).values());
console.log("Intersection of setA & setB: ",setA.intersersection(setB).values());
console.log("Difference of setA & setB: ",setA.difference(setB).values()) ;
console.log("Is setA a Subset of setB ?: ", setA.subset(setB));
console.log("Are setA and setB duplicates?", setA.duplicate(setB));