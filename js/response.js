var loader = document.getElementById('loader');

var xhr = new XMLHttpRequest();

xhr.open("GET", "https://rest.restoque.com.br/restoquerestfulservice_desenv/api/liveretail/liveretailsocial");

xhr.addEventListener("load", function() {

if (xhr.status == 200) {

	loader.style.display = 'none';

    var response = xhr.responseText;

    readResponse(response);

} else {
    console.log('erro')
}
});

xhr.send();



function readResponse(response) {
var arr1 = JSON.parse(response);

var out = "<div id='carousel'>";

for (i in arr1) {


	// div item
	out += "<div class='item'>";

	out += "<div class='content-item'>";


	// header
	out += "<header class='primary-infos'>";
	var data = new Date(arr1[i]['data']);
	var dataLocal = data.toLocaleString().replace(/(:\d{2}$)/, " ");
	out += "<div class='data'>" + dataLocal + "</div>";

	

	// block info
	out += "<div class='block-info'>";
	out += "<div class='avatar'><img src='" + arr1[i]['avatar']+ "'></div>";

	// group
	out += "<div class='group'>";
	out += "<span class='apelido'><h3>" + arr1[i]['apelido']+ "</h3></span>";
	out += "<div class='filial'><i class='icon-font icon-pin'></i><span class='text-filial'>" + arr1[i]['filial']+ "</span></div>";
	out += "<span class='marca'>" + arr1[i]['marca']+ "</span>";
	out += "<div/>";
	out += "<div/>";
	
	

	out += "</header>";


	// wrapp
	out += "<div class='wrapp'>";
	out += "<div class='comentario'><p>" + arr1[i]['comentario']+ "</p></div>";

	out += "<div class='midias' id='md-"+[i]+"'>";

	var arrMidia = arr1[i]['midias'];

	if(arrMidia[0]['url'] != ''){
		out += "<img src='" + arrMidia[0]['url']+ "'>";
	}else{
		out += "<img src='img/default-image.jpg'>";
	}

	out += "</div>";
	out += "</div>";
	
	out += "</div>";

	// footer
	out += "<footer class='social-box'>";
	out += "<div class='box-count numrespostas'><i class='icon-font icon-chat'></i><div class='num'><span>" + arr1[i]['numrespostas']+ "</span></div></div>";
	out += "<div class='box-count numaplausos'><i class='icon-font icon-applause'></i><div class='num'><span>" + arr1[i]['numaplausos']+ "</span></div></div>";
	
	if(arr1[i]['numaplausos'] == 1){
		out += "<div class='aplaudiram'>"+ arr1[i]['numaplausos'] +" pessoa aplaudiu</div>";
	}else if(arr1[i]['numaplausos'] >= 2){
		out += "<div class='aplaudiram'>"+ arr1[i]['numaplausos'] +" pessoas aplaudiram</div>";
	}

	out += "</footer>";

	

	out += "</div>";
}

out += "</div>";

document.getElementById("content").innerHTML = out;

run();
}



function run(){

	var carousel = document.getElementById('carousel');
	var widthItem = '49.25';
	var carouselItems = carousel.childElementCount;
	var carouselReset = (carouselItems - 1) * widthItem;

	var i = 0;

	setInterval(function(){
		carousel.style.transition = "transform 0.3s ease";	
		
		carousel.style.transform += "translateX(-"+widthItem+"%)";

		i++;

		if(i >= carouselItems - 1){
			i = 1;
			carousel.style.transform += "translateX("+ carouselReset +"%)";
		}

	 
	}, 6000)
	
}