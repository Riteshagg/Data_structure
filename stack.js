class stack {
    constructor(){
        this.items = [];
        this.top = 0;
    }

    push(items){
        this.items[this.top]=items;
        this.top++;
    }

    pop(){
        if(this.top<=0){
            return "stack is empty"
        }
        let popVal = this.items[this.top-1];
        // Reduce the length of the array by 1 to remove the last element
        this.items.length = this.items.length - 1;
        this.top--;
        return popVal;
    }

    peek(){
        if(this.top<=0){
            return "stack is empty"
        }
        return this.items[this.top-1];
    }

    isEmpty(){
        return this.top === 0;
    }

    size(){
        return this.top;
    }
}

// let stackObj = new stack();
// console.log(stackObj.isEmpty())
// stackObj.push(1);
// stackObj.push(2);
// stackObj.push(3);
// console.log(stackObj.size()); // 3
// console.log(stackObj.peek()); // 3
// console.log(stackObj.pop()); // 3
// console.log(stackObj.size()); // 2
// console.log(stackObj.isEmpty())
// console.log(stackObj)