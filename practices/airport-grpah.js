const airports=['a','b','c','b','d','e','f'];
const routes=[
    ['a','c'],
    ['a','f'],
    ['b','e'],
    ['b','a'],
    ['b','d'],
    ['c','e'],
    ['c','b'],
    ['d','f'],
];

 let adjacencyList=new Map();

 function addNode(airport){
     adjacencyList.set(airport,[]);
 }
 function addEdge(origin,destination){
     adjacencyList.get(origin).push(destination);
     adjacencyList.get(destination).push(origin);
 }

 airports.forEach(addNode);
 routes.forEach(route=>addEdge(...route));

 console.log(adjacencyList);