$(document).ready(function () {
    $(".st0").click(function(e){
        e.preventDefault();
        $("#cotizador-bg").addClass('open');
      });
});

$(document).ready(function () {
    $("#close").click(function(e){
        e.preventDefault();
        $("#cotizador-bg").removeClass('open');

        document.getElementById('cmbCapacidadPago').value= "--"; 
      });
});


$(document).ready(function () {
    $(".btn1").click(function(e){
        e.preventDefault();
        $("#fachadanorte").addClass('active');
        $("#fachadasur").removeClass('active');
        $(".btn1").addClass('active');
        $(".btn2").removeClass('active');
      });
});

$(document).ready(function () {
    $(".btn2").click(function(e){
        e.preventDefault();
        $("#fachadasur").addClass('active');
        $("#fachadanorte").removeClass('active');
        $(".btn2").addClass('active');
        $(".btn1").removeClass('active');
      });
});