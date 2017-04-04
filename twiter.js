document.addEventListener("click",contarclick);

function contarclick (){
	var contador = document.getElementById("contador");
}

function enviarTwit (){
	var nuevoComentario = document.getElementById("nuevoComentario").value;
	var comentario=document.createElement("p");
	comentario.innerHTML=nuevoComentario;
	document.getElementById("comentarios").appendChild(comentario);
}