/* js code */
function yesClicked() {
    document.getElementById('modal_label').style.display='none';
    document.getElementById('no').style.display='none';
    document.getElementById('yes').style.display='none';
    document.getElementById('label_success').style.display='block';

    document.getElementsByTagName("table")[0].rows[1].cells[2].innerHTML = "cancelled";
    document.getElementsByTagName("table")[0].rows[1].cells[2].style.color = "red";

    setTimeout(function() {
        document.getElementById('confimation_modal').style.display='none';
    }, 2000);
}
    