class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (current) {
      if (val === current.val) return undefined;
      if (val < current.val) {
        if(!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node=this.root) {
    let newNode = new Node(val);
    if(!node) {
      this.root = newNode;
      return this;
    }
    if (val < node.val) {
      if(!node.left) node.left = newNode;
      else this.insertRecursively(val, node.left);
    } else {
      if (!node.right) node.right = newNode;
      else this.insertRecursively(val, node.right)
    }
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) return undefined;
    let current = this.root;
    while (current) {
      if(val === current.val) return current;
      if(val < current.val) {
        if(current.left === val) return current.left; 
        current = current.left;
      } else {
        if (current.right === val) return currrent.right;
        current = current.right;
      }
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node=this.root) {
    if (!node) return undefined;
    if (val < node.val) {
      if (val===node.left.val) return node.left;
      else this.findRecursively(val, node.left);
    }else {
      if (val === node.right.val) return node.right;
      else this.findRecursively(val, node.right);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node=this.root) {
    let arr = [];
    if(node) {
      arr.push(node.val);
      if(node.left) this.dfsPreOrder(node.left);
      if(node.right) this.dfsPreOrder(node.right);
    }
    return arr;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node=this.root) {
    let arr = [];
    if(node) {
      if(node.left) this.dfsInOrder(node.left);
      arr.push(node.val);
      if(node.right) this.dfsInOrder(node.right);
    }
    return arr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node=this.root) {
    let arr = [];
    if(node) {
      if (node.left) this.dfsPostOrder(node.left);
      if (node.right) this.dfsPostOrder(node.right);
      arr.push(node.val);
    }
    return arr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
