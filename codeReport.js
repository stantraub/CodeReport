function codeReport(scores) {
    let frequencies = {'Poor': 0, 'Fair': 0, 'Good': 0};

    for (const score of scores) {
        if (score < 500) {
            frequencies['Poor']++
        } else if (score >= 500 && score < 600) {
            frequencies['Fair']++
        } else {
            frequencies['Good']++
        }
    }

    let ranges ={
        'Poor' : 1,
        'Fair' : 2,
        'Good' : 3,
    }

    let tuples = Object.keys(frequencies).map(key => {
        return [ranges[key], frequencies[key]]
    })

    tuples.sort((a, b) => {
        if (a[1] > b[1]) { //freq is higher
            return 1;
        } else if (a[1] < b[1]) { // freq is lower
            return -1
        } else {
            return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0; //freq is equal, check range rating
        }
    }).reverse();

    let rangesValues = {
        1: 'Poor',
        2: 'Fair',
        3: 'Good'
    }

    return tuples.map(ele => {
        return `${rangesValues[ele[0]]} - ${ele[1]}`
    })


}

console.log(codeReport([350, 400, 675, 550, 543])) // => ['Fair - 2,' 'Poor - 2', Good - 1',]

// Poor - 300-499
//Fair - 500-599
//Good - 600 - 800