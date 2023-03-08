var app = {};
var Temas = datos=>
{
    
    console.log(datos);
    app.DatasShow = datos;
    var html = "";
    html+="<h2>Datos<h2>";
    app.DatasShow.map(dts=>{
        html+="<h1> "+dts.NombreTema+"</h1>";
    })
    document.getElementById("Defaults").innerHTML = html;
}