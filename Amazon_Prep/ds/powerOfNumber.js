console.log(power(12, 21) % 1000000007)

//console.log(power(361, 162) % 1000000007)

function power(x, y) {
    let temp;
    if (y == 0)
        return 1;
    temp = power(x, y / 2);
    if (y % 2 == 0)
        return temp * temp;
    else
        return x * temp * temp;
}