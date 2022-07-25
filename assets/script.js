var topics =['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopics = topics[(Math.floor(Math.random() * topics.length))];


function listTopics(){
    for(var x=0; x <topics.length; x++){
    console.log(topics[x])
    }
}

function selectTopic(){
    if(randomTopics === 'HTML' ){
        console.log('Let study HTML');
    }else if(randomTopics === 'CSS'){
        console.log('Let study CSS');
    }else if(randomTopics === 'Git'){
        console.log('Let study Git');
    }else if(randomTopics === 'JavaScript' ){
        console.log('Let study JavaScript');
    }else{
        console.log("Let try again");
    }

}
console.log('Here are the topics we leraned through Prework');
listTopics();
console.log('which topic should we study first ');
selectTopic();
