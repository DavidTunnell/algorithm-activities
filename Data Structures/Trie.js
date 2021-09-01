//Pronounced 'Try' aka prefix tree is a special kind of tree used to stored associated data
//it stores data in steps where each step is a node in the trie
//often used to store words since there are a finite number of letters that can be put together to make a string
//example: validate a word is in a dictionary
//each step/node represents one letter of a word and other related options branch off them
//                      b
//                     /
//                    a
//                   / \
//                  l   t
//                 /
//               l
// ball and bat are two branches

//node
let Node = function() {
    //each node has a key value pair object 'Map'
    //the key value pairs are like the name of a folder and the contents of a folder
    //ex: above 'a' would be a keys map for one of the steps abd then the contents of the folder are what is below it (l,l,t)
    this.keys = new Map();
    //is this the end letter in a word (flag)
    this.end = false;
    this.setEnd = function() {
        this.end = true;
    }

    //checks if the node is the end of a word
    this.isEnd = function() {
        return this.end;
    }
}

let Trie = function() {
    this.root = new Node();

    //recursive function if you pass in a node it will use it else default node
    this.add = function(input, node = this.root) {
        //if at the end of the word
        if (input.length == 0) {
            node.setEnd();
            return;
        } else if (!node.keys.has(input[0])) { //else not at end of word, check if there is a node with that letter already (1st character in string passed in)
            //if not create a new node and add it with the letter
            node.keys.set(input[0], new Node());
            //recursively call this function with the string minus the 1st char so its removed
            return this.add(input.substr(1), node.keys.get(input[0]));
        } else { //already a letter with that name
            return this.add(input.substr(1), node.keys.get(input[0]));
        };
    };

    //check if the word is in the trie data structure
    //this is much more efficient for a dictionary because only one letter needs to be searched at a time
    this.isWord = function(word) {
        //start at root node
        let node = this.root;
        //iterate through each character from beginning to end
        while (word.length > 1) {
            //if there is no key with the 1st character in the word
            if (!node.keys.has(word[0])) {
                return false;
            } else { //there is a word that starts with that letter
                //set node to match character of word being checked
                node = node.keys.get(word[0]);
                //remove 1st char thus iterating through word
                word = word.substr(1);
            };
        };
        // if it has the last letter of the word we passed in (because the rest of chars were removed above)
        //and end flag is true return true else false
        return (node.keys.has(word) && node.keys.get(word).isEnd()) ?
            true : false;
    };

    //recursively concat and form each word and add it to an array then return
    this.print = function() {
        let words = new Array();
        let search = function(node, string) {
            if (node.keys.size != 0) {
                for (let letter of node.keys.keys()) {
                    search(node.keys.get(letter), string.concat(letter));
                };
                if (node.isEnd()) {
                    words.push(string);
                };
            } else {
                string.length > 0 ? words.push(string) : undefined;
                return;
            };
        };
        search(this.root, new String());
        //if the array is > 0 return it else null
        return words.length > 0 ? words : null;
    };

}

myTrie = new Trie()
myTrie.add('ball');
myTrie.add('bat');
myTrie.add('doll');
myTrie.add('dork');
myTrie.add('do');
myTrie.add('dorm');
myTrie.add('send');
myTrie.add('sense');
console.log(myTrie.isWord('doll'));
console.log(myTrie.isWord('dor')); // fails even though it's present because its not the end of a word
console.log(myTrie.isWord('dorf'));
console.log(myTrie.print());