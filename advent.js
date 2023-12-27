function calibrate(arr) {
    let sumArr = [];
    let str;
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        str = arr[i];
        let numbers = [];
        
        str.split('').forEach(char => {
            if(!isNaN(char)) {
                numbers.push(char);
            }
        });

        const first = numbers[0];
        const last = numbers[numbers.length - 1];
        sumArr.push(first + last);
    }
    for(let x = 0; x < sumArr.length; x++) {
        let z = parseInt(sumArr[x]);
        sum += z;
    }
    console.log(sum);
}



calibrate(["mxmkjvgsdzfhseightonetwoeight7",
    "3five4s84four9rtbzllggz",
    "75sevenzdrpkv1onetwo",
    "3q7ctkghhqkpb5four",
    "ccxpblrgrjxcgrhjxfmtwonine8eightzzrdn4",
    "6lqjrhbnxxcqlpnmjsthreesixxsxcgqsxmdx7",
    "35llbrhh",
    "fivethreejcqpfqmcmvjlmhlbzpxlsmktzkmtmv8p",
    "3369eightnine89",
    "onesix4qqnlzdsevennmmrcgkndlsgm3",
    "two4xgdjdqtcjk1threelkjdxvfivesix",
    "sixsix6njhqrnine",
    "4skbhsbtqc",
    "one11fpkjsix",
    "kgtkgdjtwo6mmklqc"
    ]);