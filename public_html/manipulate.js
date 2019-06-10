const sentence = document.querySelector('p');
console.log(sentence);
sentence_arr= sentence.innerHTML.split(RegExp("\\s"));
console.log(sentence_arr);
function onOverFunction(){
  document.getElementById("sentence").innerHTML = "a man jumped on the platform to catch the train"
}

