document.getElementById("radiopr").checked = true;

document.getElementsByName("rb4")[0].checked = true;
document.getElementsByName("rb5")[0].checked = true;

var x = document.getElementsByClassName("feed_slider");
for (let a = 0; a < x.length; a++) {
	x[a].value = 1;
}

document.getElementsByName("lab_sugg")[0].value = "a";
document.getElementsByName("submit_reg")[0].click();
