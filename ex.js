var json1 = '{"name":"Manikandan", "age":32, "isGood":true}';
var json2 = '{"name":"Manikandan", "age":32, "isGood":true}';
function compareJSON() {
  //1. Parse JSON string
  var obj1 = JSON.parse(json1);
  var obj2 = JSON.parse(json2);
  //2. Compare the no of properties
  console.log(Object.keys(obj1).length);
  console.log(Object.keys(obj2).length);
  if(Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  //3. Compare the actual properties(Keys)
  for(var key in obj1) {
    if(!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}
const result = compareJSON();
console.log(result);