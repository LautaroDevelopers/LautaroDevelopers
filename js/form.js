$(document).ready(function () {
	$("#btnSend").click(function () {
		var errores = "";

		// Validado Nombre ==============================
		if ($("#names").val() == "") {
			errores += "<p>Escriba un nombre valido</p>";
			$("#names").css("border-bottom-color", "#F14B4B");
		} else {
			$("#names").css("border-bottom-color", "#d1d1d1");
		}

		// Validado Celular ==============================
		if ($("#phone").val() == "") {
			errores += "<p>Escriba un teléfono / celular valido</p>";
			$("#phone").css("border-bottom-color", "#F14B4B");
		} else {
			$("#phone").css("border-bottom-color", "#d1d1d1");
		}

		// Validado Correo ==============================
		if ($("#email").val() == "") {
			errores += "<p>Escriba un correo electrónico valido</p>";
			$("#email").css("border-bottom-color", "#F14B4B");
		} else {
			$("#email").css("border-bottom-color", "#d1d1d1");
		}

		// Validado Mensaje ==============================
		if ($("#mensaje").val() == "") {
			errores += "<p>Escriba un mensaje</p>";
			$("#mensaje").css("border-bottom-color", "#F14B4B");
		} else {
			$("#mensaje").css("border-bottom-color", "#d1d1d1");
		}

		// ENVIANDO MENSAJE ============================
		if ((errores == "") == false) {
			var mensajeModal =
				'<div class="modal_wrap">' +
				'<div class="mensaje_modal">' +
				"<h3>Error</h3>" +
				errores +
				'<span id="btnClose">Cerrar</span>' +
				"</div>" +
				"</div>";

			$("body").append(mensajeModal);
		}

		// CERRANDO MODAL ==============================
		$("#btnClose").click(function () {
			$(".modal_wrap").remove();
		});
	});
});
