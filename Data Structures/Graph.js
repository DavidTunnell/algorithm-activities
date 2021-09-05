//Graph
//Graphs are collection of things and the relationships/connections between them
//the data in a graph are called nodes or vertices, the connections between the nodes are called edges
//ex: social network, where nodes are people and connections are friendships (undirected graph)
//ex: internet and webpage links, the links point somewhere, there is a from and to
//There are 2 major types of graphs: Directed Graphs and Undirected Graphs
//undirected graphs have no direction on the edge between nodes, as opposed to directed graphs which have directions on their edges
//There are many ways to represent a graph, 3 examples:
//!Adjacency List - associates each node in the graph with the collection of its neighboring edges
//- a-b-c, b has a collection of a and c - https://i.imgur.com/znXfO60.png
//!Adjacency Matrix -associations are in a two dimensional array showing boolean values of relationships: https://i.imgur.com/r3ZgF0I.png (unpointed)
//-They can also be pointed, where the matrix shows booleans for if there is a relationship: https://i.imgur.com/cbrhHoQ.png
//!Incidence Matrix - Also a 2 dimensional array but the rows are the data nodes and the columns represent edges:https://i.imgur.com/5zND7mb.png'
//-there can be an uneven number of rows and columns
//-can also be directed: https://i.imgur.com/uYmxpsv.png where 1 means its pointing away and -1 means pointing towards from another node

//Graphs: Breadth-First Search using Adjacency Matrix (Pointed)? https://i.imgur.com/YEzo88C.png
// How do find the distances between two nodes in a graph
//this is one of the main uses of a graph and its called graph traversal
//it will start at a node and visit its neighbors, then their neighbors to find the distance of the other node

// https://i.imgur.com/YEzo88C.png
//y axis: index location of node
//x axis: whether edge is pointed to another node, shows which nodes the node is connected to
var pointedAdjacencyMatrix = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
];

//root is index of root node
//will output an object of key value pairs where the key is the node and the value is the distance
function GraphBreadthFirstSearch(graph, root) {
    //the object to be returned
    var nodesAndDistance = {};
    //start all distances at infinity
    for (let i = 0; i < graph.length; i++) {
        //set each node in the graph's value pair to Infinity
        nodesAndDistance[i] = Infinity;
    }
    //the length to the node being passed in is always zero
    nodesAndDistance[root] = 0;

    //create queue to keep track of nodes to visit
    var queue = [root];
    //the current node being traversed
    var current;

    while (queue.length != 0) {
        //starting with root node, remove each traversed node and set to current
        current = queue.shift(); //removes the first element from an array and returns that removed element
        //get the collection of connections for the current node being traversed
        var currentConnected = graph[current];
        //will keep track of the connections to the current node
        var neighborIndexes = [];
        //get 1st connection available
        var indexOfConnection = currentConnected.indexOf(1);
        //if there is no connection (no 1 found) set index to -1
        while (indexOfConnection != -1) { //indexOf function returns -1 if none found
            //add all connections
            neighborIndexes.push(indexOfConnection);
            // go to next potential connection to check
            indexOfConnection = currentConnected.indexOf(1, indexOfConnection + 1);
        }
        //iterate through each of the connections found with the current node and find distance
        for (let j = 0; j < neighborIndexes.length; j++) {
            //if the index that does have a connection is equal to infinity
            if (nodesAndDistance[neighborIndexes[j]] == Infinity) {
                // set the distance of that node to the current node + 1
                nodesAndDistance[neighborIndexes[j]] = nodesAndDistance[current] + 1;
                //then push neighbor to queue
                queue.push(neighborIndexes[j]);
            }
        }
    }
    return nodesAndDistance;
}
//trying to find out how far every node is from the 1st node STARTING AT THE PASSED IN NODE
//the node itself is always zero nodes away

console.log(GraphBreadthFirstSearch(pointedAdjacencyMatrix, 1));