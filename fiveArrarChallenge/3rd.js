// write a 'do-while' loop that prompts a user to enter their favourite teatype until they enter 'stop'.
// store each of the teatype in a collection in an array named 'teaCollection'


let teaCollection = [];
let tea;



do {
    prompt(`Enter your favourite tea (type "stop" to finish)`);    

    if(tea != "stop") {
        teaCollection.push(tea);
    }

} while (tea != "stop");