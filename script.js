function init(){
  var entryinput = document.getElementById("entity");
  if (input_text.value == "") {
      alert("Please enter an entity.");
      return false;
  }
  alert("Hello " + entryinput + "!");
  return true
}
//add your JavaScript between these two lines of code








window.addEventListener('load', init);
