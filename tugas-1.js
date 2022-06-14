const myName = ["Kurnia", "Zulianti"];

//1
const name = myName.map(function (m){
    return "1" + m;
});
console.log(name);

//2
const tampil = name.filter((name) => name.includes ("r"));
console.log(tampil);

//3
const myNickName = name.find(name => name.includes ("Z"));
console.log(myNickName);

//4
function welcome(callback){
    console.log("Selamat datang");
    callback();
}

welcome(
    function(){
        console.log(myNickName);
    }
);