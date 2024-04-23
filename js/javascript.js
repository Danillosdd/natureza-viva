//UEG - 2024/01
//INTERAÇÃO HUMANO-COMPUTADOR
//DANILLO ARAÚJO

//EFEITO  DA SECTION CRONOGRAMA DA PROGRAMAÇÃO

jQuery(document).ready(function ($) {
	var $timeline_block = $('.cd-timeline-block');


	$timeline_block.each(function () {
		if ($(this).offset().top > $(window).scrollTop() + $(window).height() * 0.75) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		}
	});


	$(window).on('scroll', function () {
		$timeline_block.each(function () {
			if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden')) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});
});

//BOTÃO INSCREVER

let cpf = document.getElementById("cpf");
let nome = document.getElementById("nome");
let email = document.getElementById("email");
let telefone = document.getElementById("telefone");
let dataNascimento = document.getElementById("data-nascimento");


function myFunction() {
	if (cpf.value != '' && nome.value != '' && email.value != '' && telefone.value != '' && dataNascimento.value != '') {
		alert("Inscrição Realizada com Sucesso!");
	}
}

//VOLTAR AO TOPO

let mybutton = document.getElementById("myBtn");


window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (
		document.body.scrollTop > 20 ||
		document.documentElement.scrollTop > 20
	) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}


function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}


$(function () {
	$("#cpf").inputmask({
		mask: "999.999.999-99"
	});

	$("#telefone").inputmask();
});