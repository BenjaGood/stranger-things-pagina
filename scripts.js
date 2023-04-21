$(document).ready(function () {
    const characters = [
        { name: "Eleven", img: "img/2.jpg", summary: "Eleven es una niña con habilidades psicoquinéticas..." },
        { name: "Mike", img: "img/1.jpg", summary: "Mike es un líder nato y el mejor amigo de Will..." },
        { name: "Dustin", img: "img/6.jpg", summary: "Dustin es conocido por su inteligencia y habilidades técnicas..." },
        { name: "Lucas", img: "img/4.jpg", summary: "Lucas es valiente y leal a sus amigos..." },
        { name: "Will", img: "img/5.jpg", summary: "Will es un chico sensible que ha sido afectado por el Upside Down..." },
        { name: "Max", img: "img/3.jpg", summary: "Max es una chica independiente y hábil con la patineta..." },
    ];

    characters.forEach((character) => {
        const card = `
            <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div class="card h-100">
                    <img src="${character.img}" class="card-img-top" alt="${character.name}">
                    <div class="card-body">
                        <h5 class="card-title">${character.name}</h5>                        
                        <p class="card-text">${character.summary}</p>
                    </div>
                </div>
            </div>
        `;
        $("#characters").append(card);
    });

    const soundtracks = [
        { title: "California Dreamin", videoId: "1CUtdqtw5yw" },
        { title: "Separate Ways", videoId: "Jb25W0P4ICs" },
        { title: "Never Ending Story", videoId: "7qlU0bWMzUU" },
    ];

    soundtracks.forEach((soundtrack) => {
        const video = `
            <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                <a href="https://www.youtube.com/watch?v=${soundtrack.videoId}" target="_blank">
                    <img src="https://img.youtube.com/vi/${soundtrack.videoId}/hqdefault.jpg" alt="${soundtrack.title}" class="img-fluid">
                </a>
                <h5 class="text-center mt-2">${soundtrack.title}</h5>
            </div>
        `;
        $("#soundtracks").append(video);
    });
    
    // Agregar efecto de desvanecimiento a las tarjetas de personajes al pasar el cursor sobre ellas
    $('.card').hover(function() {
        $(this).fadeOut(100).fadeIn(100);
    });
    
    // Ejemplo de interacción con Bootstrap: popover
    $('[data-toggle="popover"]').popover({
        trigger: "hover",
    });
});

