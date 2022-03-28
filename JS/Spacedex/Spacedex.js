

const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./gracioso.jpg")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
            let pokeTipo = data.types.name;
            console.log(pokeTipo);
            let pokePeso = data.types.weight;
            console.log(pokePeso);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeData = (url) => {
    const pokeType = document.getElementById("pokeTipo");
    pokeType.src = text;
    const pokeWeight = document.getElementById("pokePeso");
    pokeWeight.src = text;
}



