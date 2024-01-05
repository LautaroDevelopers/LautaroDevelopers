$(document).ready(function () {
  $("ul.tabs li a:first").addClass("active");
  $(".secciones article").hide();
  $(".secciones article:first").show();

  $("ul.tabs li a").click(function () {
    $("ul.tabs li a").removeClass("active");
    $(this).addClass("active");
    $(".secciones article").hide();

    var activeTab = $(this).attr("href");
    console.log(activeTab);

    $(activeTab).show();
    return false;
  });
});

const typed = new Typed(".typed2", {
  strings: [
    '<h1 class="h1-terms_policy">Política De Privacidad</h1> <p class="p-terms_policy">En LautaroDevelopers, nos comprometemos a proteger la privacidad de nuestros empleados y candidatos. Toda la información personal recopilada se utilizará de manera ética y segura, cumpliendo con las leyes de privacidad aplicables.</p><h1 class="h1-terms_policy">Recopilación de Datos:</h1><p class="p-terms_policy">Recolectamos datos relevantes para la gestión, como información personal, antecedentes educativos y profesionales.<br>Los candidatos proporcionan información voluntaria durante el proceso de selección.</p><h1 class="h1-terms_policy">Uso de Datos:</h1><p class="p-terms_policy">Utilizamos la información para evaluación y toma de decisiones en el proceso de selección y gestión de empleados.<br>Los datos se utilizan internamente y no se comparten con terceros sin consentimiento.</p><h1 class="h1-terms_policy">Almacenamiento y Seguridad:</h1><p class="p-terms_policy">Garantizamos la seguridad de la información mediante medidas técnicas y organizativas adecuadas.<br>Los datos se almacenan de forma segura y se accede a ellos solo para fines autorizados.</p><h1 class="h1-terms_policy">Derechos del Individuo:</h1><p class="p-terms_policy">Los empleados y candidatos tienen derecho a acceder, corregir y eliminar sus datos personales.<br>Se respetan las solicitudes de privacidad y se proporciona transparencia en el uso de datos.</p><h1 class="h1-terms_policy">Actualizaciones de la Política:</h1><p class="p-terms_policy">Esta política se revisa periódicamente para garantizar su relevancia y conformidad con las leyes de privacidad.</p><p class="p-terms_policy">Al unirse a LautaroDevelopers, los empleados o clientes aceptan esta política, confiando en nuestra dedicación a la privacidad y protección de datos.</p>',
  ],
  stringElements: "#Efecto_maquina-3",
  typeSped: 75,
  startDelay: 300,
  backSpeed: true,
  shuffle: false,
  backDelay: 1500,
  showCursor: true,
  cursorChar: "_",
  contentType: "html",
});

const tipeo = new Typed(".typed3", {
  strings: [
    '<h1 class="h1-terms_policy">Empleo</h1><p class="p-terms_policy">LautaroDevelopers se compromete a proporcionar un entorno de trabajo inclusivo y de igualdad de oportunidades. <br> Los empleados son seleccionados y promovidos en función de sus habilidades, logros y potencial.</p><h1 class="h1-terms_policy">Horario Laboral</h1><p class="p-terms_policy">El horario de trabajo estándar es de 40 horas semanales, con flexibilidad para adaptarse a las necesidades individuales y a proyectos específicos.</p><h1 class="h1-terms_policy">Desarrollo Profesional</h1><p class="p-terms_policy">Ofrecemos oportunidades continuas de formación y desarrollo para fomentar el crecimiento profesional de nuestros empleados.</p><h1 class="h1-terms_policy">Propiedad Intelectual</h1><p class="p-terms_policy">El trabajo creado durante el empleo pertenece a LautaroDevelopers, asegurando la protección de la propiedad intelectual.</p><h1 class="h1-terms_policy">Ética y Cumplimiento</h1><p class="p-terms_policy">Esperamos que todos los empleados actúen con integridad y ética, cumpliendo con todas las leyes y regulaciones aplicables.</p><p class="p-terms_policy">Al unirte a LautaroDevelopers, te conviertes en parte de una comunidad dedicada a la excelencia técnica y al crecimiento profesional. ¡Esperamos colaborar juntos en el emocionante mundo de la programación!</p>',
  ],
  stringElements: "#Efecto_maquina-4",
  typeSped: 75,
  startDelay: 300,
  backSpeed: true,
  shuffle: false,
  backDelay: 1500,
  showCursor: true,
  cursorChar: "_",
  contentType: "html",
});
