class ListNode<T> {
  data: T;
  next: ListNode<T> | null;
  
  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList<T> {
  head: ListNode<T> | null = null;
  size: number = 0;
  
  append(value: T): void {
    const newNode = new ListNode(value);
    
    if (!this.head) {
      this.head = newNode;
      this.size = 1;
      return;
    }
    
    let current = this.head;
    
    while (current.next) {
      current = current.next;
    }
    
    current.next = newNode;
    this.size++
  }
  
  prepend(value: T): void {
    const newNode = new ListNode(value)
    
    newNode.next = this.head
    this.head = newNode
    this.size++
  }
  
  // Delete a node by value
  delete(value: T): void {
    if (!this.head) return;

    if (this.head.data === value) {
      this.head = this.head.next;
      this.size = 0;
      return;
    }

    let current = this.head;
    while (current.next && current.next.data !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
      this.size--
    }
  }
  
  print() {
    const list: T[] = []
    let current = this.head
    
    if(!current) {
      console.log("");
      return
    }
    
    while(current) {
      list.push(current.data)
      current = current.next
    }
    
    console.log(list.join(" -> "));
  }
}

const ll = new LinkedList<number>()
