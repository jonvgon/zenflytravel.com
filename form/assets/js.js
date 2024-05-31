function showForm2() {
    document.getElementById('form1').style.display = 'none';
    document.getElementById('form2').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('form1').style.display = 'block';
    document.getElementById('form2').style.display = 'none';
});
