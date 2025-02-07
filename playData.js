const nightjarData = {
    "Jomala": 2,
    "Lappeenranta": 3,
    "Seinäjoki": 2,
    "Mikkeli": 2,
    "Kuhmo": 2,
    "Hämeenlinna": 3,
    "Kokkola": 2,
    "Jyväskylä": 2,
    "Kotka": 3,
    "Kemijärvi": 2,
    "Tampere": 3,
    "Närpiö": 3,
    "Joensuu": 3,
    "Pudasjärvi": 3,
    "Kuopio": 3,
    "Lahti": 3,
    "Pori": 3,
    "Helsinki": 2,
    "Turku": 3
};

const municipalities = Object.keys(nightjarData);

function createMunicipalityButtons() {
    const buttonContainer = document.getElementById('button-container');

    municipalities.forEach(municipality => {
        let breedingCategory = nightjarData.municipality
        const button = document.createElement('button');
        button.id = municipality;
        button.className = 'btn btn-primary';
        button.textContent = municipality;
        button.onclick = () => sonificate(nightjarData[municipality]);
        buttonContainer.appendChild(button);
    });
}

function playAudio(volume) { 
    let nightjar = document.getElementById("audio"); 
    nightjar.volume = volume;
    nightjar.play(); 
}

function sonificate(breedingCategory) {
    switch (breedingCategory) {
        case 1:
            playAudio(0.1);
            break;
        case 2:
            playAudio(0.2);
            break;
        case 3:
            playAudio(0.8);
            break;
        case 4:
            playAudio(1);
            break;
        default:
            break;
    }
}


createMunicipalityButtons();
