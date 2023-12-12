var arryOfQoutes=[
    {
        'author':'Oscar Wilde',
        'qoute':'“Be yourself; everyone else is already taken.”'
    },
    {
        'author':'Albert Einstein',
        'qoute':"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"
    },
    {
        'author':'Frank Zappa',
        'qoute':"“So many books, so little time.”"
    },
    {
        'author':'Marcus Tullius Cicero',
        'qoute':"“A room without books is like a body without a soul.”"
    },
    {
        'author':'Mae West',
        'qoute':"“You only live once, but if you do it right, once is enough.”" 
    },
    {
        'author':'Robert Frost',
        'qoute':"“In three words I can sum up everything I've learned about life: it goes on.”"
    }

];
   
function  Qoutes(){
var random=Number.parseInt(Math.random()*arryOfQoutes.length+1);
document.querySelector("#quoteOutput").textContent=arryOfQoutes[random].qoute;
document.querySelector("#authorOutput").textContent=arryOfQoutes[random].author;
}