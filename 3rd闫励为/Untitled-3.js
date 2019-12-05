function func(child) {
    for(let i = 0; i < child.length; i++) {
        if(Array.isArray(child[i])) {
            return Array.prototype.concat.apply([], child)
        }
    }
    return child
}
console.log(func([1, [2, 3]]))//只会二维