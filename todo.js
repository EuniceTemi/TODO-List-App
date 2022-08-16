let inputField = document.getElementById("inputfield")
let btn = document.getElementById("btn")
let tasks = document.getElementById("tasks")
let deleteAll = document.getElementById("delete-all")



btn.addEventListener('click', function(){
  var paragraph = document.createElement("p")
  paragraph.innerText = inputField.value
  


  if(paragraph.innerText.length > 0){
  tasks.appendChild(paragraph)
  inputField.value = ""
  

  // ADD CLASSNAME TO PARAGRAPH
  paragraph.classList.add("p1")

//CREATE AN EDIT AND DELETE BUTTON
  var iconPen = document.createElement("i")
    var iconTrash = document.createElement("i")
   iconPen.className = "fa fa-pencil"
   iconTrash.className = "fa fa-trash"
   

//CREATE A DIV FOR ICONS
  var icons = document.createElement("div")
  paragraph.appendChild(icons)
  icons.appendChild(iconPen)
  icons.appendChild(iconTrash)

// TO DELETE A TASK
iconTrash.addEventListener("click", function(){
  paragraph.remove()
})
 
  }else{
    alert("Please enter a task")
  }



})

//TO DELETE ALL TASKS
deleteAll.addEventListener("click",function(){
document.querySelectorAll(".p1").forEach(function(elem){
  elem.remove()
})

})


  
 
