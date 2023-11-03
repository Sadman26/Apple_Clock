let feetToMile = (ft) => {
    let mile = ft / 5280;
    return mile;
}
let brickCalculator = (floorNum) => {
    let z = 0;
    let totalbrick = 0;
    if (floorNum <= 10) {
        totalbrick = 1000;
        z = floorNum * totalbrick * 15;
    }
    else if (floorNum > 10 && floorNum <= 20) {
        totalbrick = 1000;
        z = floorNum * totalbrick * 12;
    }
    else if (floorNum > 20) {
        totalbrick = 1000;
        z = floorNum * totalbrick * 10;
    }
    return z;
}
let tinyFriend = (ar) => {
    var tiny = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length < tiny.length) {
            tiny = arr[i];
        }
    }
    return tiny;
}
let woodCalculator = (c, t, b) => {
    let c1 = c ** 1;
    let t1 = t ** 3;
    let b1 = b ** 5;
    let total = (c1 + t1 + b1);
    return total;
}
console.log(feetToMile(5280));
console.log(brickCalculator(1));
let arr = ["sadman", "rakib", "akib", "joy", "mehedi", "shahadut"]
console.log(tinyFriend(arr));
console.log(woodCalculator(14, 2, 5));