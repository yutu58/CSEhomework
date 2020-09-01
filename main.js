var courses = ["info", "mentorate", "OOP", "RL", "CO"]
function view(a){
let x = courses.indexOf(a)
for (var i = 0; i<courses.length; i++){
	if (i !== x) {  	
        console.log(courses[i])
        document.getElementById(courses[i]).style.visibility = "hidden"
	}
}
  if (document.getElementById(a).style.visibility == "visible") {
    document.getElementById(a).style.visibility = "hidden"
  } else {
    document.getElementById(a).style.visibility = "visible"
  }

}
