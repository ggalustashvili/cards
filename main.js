const cardWeights = ["A","2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const cardTypes = ["Spade", "Heart", "Diamond", "Club","Ace"];
let cards=[];


function createdeck(){
    cardWeights.forEach(x=>{
        cardTypes.forEach(y=>{
            cards.push([x,y]);
        });
    });
}

function shuffle(){
    for(let i=0;i<cards.length;i++){
        let j=Math.floor(Math.random()*(i+1));
        let x=cards[i];
        cards[i]=cards[j];
        cards[j]=x;
    }
}
window.onload=function cardscreate(){
    

    cards.forEach((x)=>{
        let div=document.createElement("div");
        let p=document.createElement("p");
        let p2=document.createElement("p");
        div.setAttribute('class', 'card');
        p.setAttribute('class', 'top-side');
        p2.setAttribute('class', 'bot-side');
        div.appendChild(p);
        div.appendChild(p2);
        p.innerHTML=x[0];
        p2.innerHTML=x[0];
        document.getElementById('cont').appendChild(div);
    })

}
createdeck();
shuffle();

