"use strict";
// string[][] questions = new string[10][];
// questions[0] = new string[] { "Azerbaycanin paytaxti hansi seherdir?", "Baki", "Gence", "Naxcivan" };
// questions[1] = new string[] { "Atatürkün ən çox sevdiyi atın və itin adı nə idi?", "Sakarya və Foks", "Ankara ve Hops", "Qirat ve Cesur" };
// questions[2] = new string[] { "Türkiyənin 4-cü Baş naziri Refik Saydam hansı xəstəliyə qarşı hazırladığı müalicə üsulu ilə tibb tarixinə keçib?", "Tifüs", "Xerceng", "Goy oskurek" };
// questions[3] = new string[] { "Yeddi rəngdən ibarət olan göy qurşağının ortasındakı rəng hansıdır?", "Yaşıl", "Qirmizi", "Mavi" };
// questions[4] = new string[] { "Türkiyədə həbs olunan ilk xaker kimdir?", "Tamer Şahin", "Mustafa Ozyurt", "Tamer Dagli" };
// questions[5] = new string[] { "Hansı ağac asprinin xam maddəsidir?", "Söyüd", "Sam", "Sabalid" };
// questions[6] = new string[] { "Kəlbəcər neçenci ildə işgal olunub ?", "1993", "1992", "1998" };
// questions[7] = new string[] { "StepIT Akademiyasi necenci ilden failiyyetdedi ?", "1999", "2003", "1996" };
// questions[8] = new string[] { "Microsoftun qurucusu?", "Bil Qeyts", "Steve Jobs", "Henri Jobs" };
// questions[9] = new string[] { "Dədə Qorqud türk dastanlarının eyniləri hansı olkededir?", "Vatikan", "Monako", "İtaliya" };
function FindIntELementFromArray(arr, element) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == element)
            return true;
    }
    return false;
}
const ps = require("prompt-sync");
const inp = ps();
let questions = [
    ["Azerbaycanin paytaxti hansi seherdir?", "Baki", "Gence", "Naxcivan"],
    [
        "Atatürkün ən çox sevdiyi atın və itin adı nə idi?",
        "Sakarya və Foks",
        "Ankara ve Hops",
        "Qirat ve Cesur",
    ],
    [
        "Türkiyənin 4-cü Baş naziri Refik Saydam hansı xəstəliyə qarşı hazırladığı müalicə üsulu ilə tibb tarixinə keçib?",
        "Tifüs",
        "Xerceng",
        "Goy oskurek",
    ],
    [
        "Yeddi rəngdən ibarət olan göy qurşağının ortasındakı rəng hansıdır?",
        "Yaşıl",
        "Qirmizi",
        "Mavi",
    ],
    [
        "Türkiyədə həbs olunan ilk xaker kimdir?",
        "Tamer Şahin",
        "Mustafa Ozyurt",
        "Tamer Dagli",
    ],
    ["Hansı ağac asprinin xam maddəsidir?", "Söyüd", "Sam", "Sabalid"],
    ["Kəlbəcər neçenci ildə işgal olunub ?", "1993", "1992", "1998"],
    ["StepIT Akademiyasi necenci ilden failiyyetdedi ?", "1999", "2003", "1996"],
    ["Microsoftun qurucusu?", "Bil Qeyts", "Steve Jobs", "Henri Jobs"],
    [
        "Dədə Qorqud türk dastanlarının eyniləri hansı olkededir?",
        "Vatikan",
        "Monako",
        "İtaliya",
    ],
];
let point = 0;
let answerNum;
let randNum;
console.log("Welcome Quiz Game...");
console.log("Press Any Key...");
inp();
console.clear();
for (var i = 0; i < questions.length; i++) {
    answerNum = [];
    let k = 0;
    for (var j = 1; j < 4; j++) {
        while (true) {
            randNum = Math.floor(Math.random() * 3) + 1;
            if (FindIntELementFromArray(answerNum, randNum))
                continue;
            else {
                answerNum[k++] = randNum;
                break;
            }
        }
    }
    let choice = -1;
    let askQuestion = true;
    while (askQuestion) {
        console.log(`${i + 1}) ${questions[i][0]}`);
        for (var f = 0; f < answerNum.length; f++) {
            console.log(`${String.fromCharCode(f + 65)} ${questions[i][answerNum[f]]}`);
        }
        let key;
        switch ((key = inp())) {
            case "a":
                choice = 0;
                break;
            case "b":
                choice = 1;
                break;
            case "c":
                choice = 2;
                break;
            default:
                break;
        }
        askQuestion = false;
        console.clear();
        if (questions[i][answerNum[choice]] == questions[i][1])
            point += 10;
        else
            point -= 10;
        if (i != 9) {
            console.log(`Point: ${point}`);
            console.log("Press any key for next question...");
            inp();
        }
        console.clear();
    }
}
console.log(`Quize qatildiginiz ucun tesekkurler, sizin neticeniz: ${point}`);
