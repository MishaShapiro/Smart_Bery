const solve = (num) => {
    const res = []
    for (let x = num; x >= 0; x--) {
        const y = Math.sqrt(x**2 - num)/2
        if (y % 1 == 0) {
            res.push([x, y])
        } 
    }
    return res
};