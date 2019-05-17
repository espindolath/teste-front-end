var xhr = new XMLHttpRequest();

xhr.open("GET", "https://rest.restoque.com.br/restoquerestfulservice_desenv/api/liveretail/liveretailsocial");

xhr.addEventListener("load", function() {

if (xhr.status == 200) {

    var response = xhr.responseText;

    readResponse(response);
} else {
    console.log('erro')
}
});

xhr.send();



function readResponse(response) {
var arr1 = JSON.parse(response);

var out = "<div class='carousel'>";

for (i in arr1) {

	// div item
	out += "<div class='item'>";


	// header
	out += "<header>";
	data = new Date(arr1[i]['data']);
	out += "<div class='data'>" + data.toLocaleString() + "</div>";

	

	// block info
	out += "<div class='block-info'>";
	out += "<div class='avatar'><img src='" + arr1[i]['avatar']+ "'></div>";

	// group
	out += "<div class='group'>";
	out += "<span class='apelido'><h3>" + arr1[i]['apelido']+ "</h3></span>";
	out += "<span class='filial'>" + arr1[i]['filial']+ "</span>";
	out += "<span class='marca'>" + arr1[i]['marca']+ "</span>";
	out += "<div/>";
	out += "<div/>";
	
	

	out += "</header>";


	// wrapp
	out += "<div class='wrapp'>";
	out += "<div class='comentario'><p>" + arr1[i]['comentario']+ "</p></div>";

	out += "<div class='midias'>";

	var arrMidia = arr1[i]['midias'];

	for (i in arrMidia) {
		if(arrMidia[i]['url'] != null){
			out += "<img src='" + arrMidia[i]['url']+ "'>";
		}
	}

	out += "</div>";
	out += "</div>";
	

	// footer
	out += "<footer>";
	out += "<div class='numaplausos'>" + arr1[i]['numaplausos']+ "</div>";
	out += "<div class='numrespostas'>" + arr1[i]['numrespostas']+ "</div>";
	out += "</footer>";

	

	out += "</div>";
}

out += "</div>";

document.getElementById("content").innerHTML = out;
}