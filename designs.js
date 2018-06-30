// Select color input
// Select size input
var height, width, color;

$("#sizePicker").submit(function(event) {
event.preventDefault();
if(confirm('Do you want to make a new canvas?')){
			height = $("#inputHeight").val();
			width = $("#inputWidth").val();
			makeGrid(height, width);
			alert('Awesome. Have fun!');
		}else{
			alert('OOps, try again!');
		}
document.getElementById("btnClick").onclick = clickEvent;

})
//this defines the height and width.

function makeGrid(a, b) {
	$("table tr").remove();
	
	for (var x = 1; x<=a; x++) {
		$("#pixelCanvas").append("<tr id = table" + x + "></tr>");
		for (var y = 1; y <=b; y++) {
			$("#table" + x).append("<td></td>");
		}
	}

// this code adds color to the cells
$("td").click (function addColor(){
	color = $("#colorPicker").val();
	if ($(this).attr("style")) {
		$(this).removeAttr("style")
	}
else {
	$(this).attr("style", "background-color:" + color);
}
	


	})

}

	//this code resets the page/
	
	function myButton() {
		location.reload ();
	}
	
//this code adds audio to the page/

	var audio = new Audio();
	audio.src = "rainbow.mp3";
	var status = "stopped";
	var btn = document.getElementById("btn");
	function myfunction() {
		if(status == "stopped")
		{
			audio.play();
			btn.value = "Mute";
			status = "playing";
		}
		else 
		{
		audio.pause();
		audio.currentTime = 0;
			btn.value = "Play";	
			status = "stopped";
		}
	}
	
	