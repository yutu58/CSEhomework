var courses = ["info", "mentorate", "OOP", "RL", "CO"]
function view(a){
let x = courses.indexOf(a)
for (var i = 0; i<courses.length; i++){
	if (i !== x) {  	
        document.getElementById(courses[i]).style.visibility = "hidden"
        let y = courses[i] + "button"
        document.getElementById(y).style.background = "#eeeeee"
	}
}
  if (document.getElementById(a).style.visibility == "visible") {
    document.getElementById(a).style.visibility = "hidden"
  } else {
  	let y = courses[x] + "button"
    document.getElementById(a).style.visibility = "visible"
    document.getElementById(y).style.background = "lightblue"
  }
}
