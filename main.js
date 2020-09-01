var courses = ["info", "meme", "mentorate", "OOP", "RL", "CO"]
function view(a){
let x = courses.indexOf(a)
for (var i = 0; i<courses.length; i++){
	if (i !== x) {  	
        console.log(courses[i])
        document.getElementById(courses[i]).style.visibility = "hidden"
        let y = courses[i] + "button"
        document.getElementById(y).style.background = "#eeeeee"
	}
}
  if (document.getElementById(a).style.visibility == "visible") {
    document.getElementById(a).style.visibility = "hidden"
    let y = courses[x] + "button"
    document.getElementById(y).style.background = "#eeeeee"

  } else {
  	let y = courses[x] + "button"
    document.getElementById(a).style.visibility = "visible"
    document.getElementById(y).style.background = "lightblue"
        if (a == "meme"){
    document.getElementById("meme").innerHTML = ""
   	newmeme();
    }
  }
}


function newmeme(){
    let requestURL = 'https://meme-api.herokuapp.com/gimme';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'text';
    request.send();
    request.onload = function() {
      let x = request.response;
      let y = JSON.parse(x);
      var img = document.createElement("img");
      img.src = y['url']
      img.width = 400
      img.height = 400
      var src = document.getElementById("meme")
      src.appendChild(img)
    }
}
