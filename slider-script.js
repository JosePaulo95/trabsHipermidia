


var secao_ativa = 1;

function showSecao(id_secao_selecionada){
	document.getElementById("secao-"+secao_ativa).style.display = "none";
	document.getElementById("secao-"+id_secao_selecionada).style.display = "block";

	secao_ativa = id_secao_selecionada;
}