/*
 * Binary Search Trees
 *                                     A - Root / Parent Node
 *                                   /   \
 *                left child node - B     C - right child node
 *                                 / \   / 
 * (D,E) Siblings (same parent) - D   E F          - (D,E,F) are leafs because they are at the end of the tree and have no children
 * (D,B,E) is the left subtree. (C,F) is the right subtree.
 * Principles
 * - Each node can have a max of 2 branches
 * - BST's are ordered: 
 * - Each left node <= parent
 * - Each right node >= parent
 * 
 * On average lookups, insertions, deletions are able to skip about half the tree, so each lookup is better than linear (log(n))
 * faster than arrays, slower than hashtable
 */

//class representing a node on the tree
class Node {
    constructor(data, left = null, right = null) {
        //data is what is actually being stored
        this.data = data;
        //points to the left node and the right node (children)
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor() {
        //root node at the top of the tree which starts as null
        this.root = null;
    }

    //add value to tree
    add(data) {
        const node = this.root;
        //if the root node is null create a node object with the data passed in and add it to root
        if (node === null) {
            this.root = new Node(data);
            return;
        } else { //else its not the 1st node being added
            //recursive function that figures out where to place the node in the tree by starting at root
            const searchTree = function(node) {
                //if data being added is less than root
                if (data < node.data) {
                    //and if the left node is empty
                    if (node.left === null) {
                        //create a new node and add it there
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) { //else its not empty so do a recursive search the left child and the same data
                        return searchTree(node.left); //return to exist and rerun w/ new parameter
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null) {
                        return searchTree(node.right);
                    }
                } else { //else data is equal, and thus doesn't need to be added to the tree
                    return null;
                }
            };
            //call function and run search with the node passed in
            return searchTree(node);
        }
    }

    //find smallest value in tree
    findMin() {
        //start at root
        let current = this.root;
        //the nodes are only linked to those next to it in this data structure
        //traverse to the bottom left node to get the smallest number
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    //find largest value in tree
    findMax() {
        //start at root
        let current = this.root;
        //the nodes are only linked to those next to it in this data structure
        //traverse to the bottom right node to get the largest number
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    //query and find node if it exists, else null
    find(data) {
        //always start at root
        let current = this.root;
        // as long as the data passed in doesn't equal the current.data (starting with root) data, loop
        while (current.data !== data) {
            //if the data passed in is lower, set current to the left child
            if (data < current.data) {
                current = current.left;
            } else { //else it's higher so right child
                current = current.right;
            }
            //if it doesn't find it via looping like above return null
            if (current === null) {
                return null;
            }
        }
        //else the loop found a node matching the query, so return the node
        return current;
    }

    //boolean to check if a specific param exists in the BST
    isPresent(data) {
        //always start at root
        let current = this.root;
        // as long as it's not null, loop
        while (current) {
            // if the data equals the current done, it has been found so return true
            if (data === current.data) {
                return true;
            }
            //else it wasn't found yet, so continue search
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        //if never found because it got to the end of the tree (null), return false
        return false;
    }

    //
    remove(data) {
        //recursive function where you pass in a node and data to remove
        const removeNode = function(node, data) {
            //if the node passed in is empty return null (empty tree)
            if (node == null) {
                return null;
            }
            //match has been found
            //thus it needs to be ???? removed and relinked?
            if (data == node.data) {
                //if the match has been found and 
                //the node has no children, delete it
                if (node.left == null & node.right == null) {
                    //when returning null we are setting the node that had the data searched for to null
                    return null;
                }
                //if the left node is empty, return the right, 
                // this will remove the found node and connect it's child to it's parent
                if (node.left == null) {
                    return node.right;
                }

                if (node.right == null) {
                    return node.left;
                }
                //if it has gotten to here, the node has 2 children
                //https://i.imgur.com/odcSbSN.png
                //in this case the replacement is more complicated, like the imgur link
                //it recursively needs to replace the 3 (for example) with the 4 so that the balance of the tree is maintained
                //the logic below goes to the right child subnode and then to the left most child subnode after that
                //temp node is the 6 in the image above
                var tempNode = node.right;
                //now at the 6, keep going to the child left till the end (4 in this case)
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                // now set the data of the removed data to the left most one found (remove 3 and add the 4 in its place)
                node.data = tempNode.data;
                //set the node.right to the 6 to relink
                //this is where the function becomes recursive
                //this will keep running and setup the linking of the right side of the tree
                node.right = removeNode(node.right, node.data);
                return node;
            } else if (data < node.data) { //else if data is less than the node
                node.left = removeNode(node.left, data);
                return node;
            } else { //else greater than the node
                node.right = removeNode(node.right, data);
                return node;
            }
        }

        //call function initially to remove node, starts at the root and works recursively
        // assigning the this.root to what is returned from the function ultimately
        this.root = removeNode(this.root, data);
    }
}

const bst = new BinarySearchTree();

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);
bst.remove(7);
console.log(bst.findMin());
console.log(bst.findMax());
console.log(bst.isPresent(4));
console.log(bst.isPresent(7));
console.log(bst.find(22));
console.log(bst.find(1));
console.log(bst.find(7));