///////////////////////////////////////////////////////
/////////////js untuk di date.html/////////////////////

const gameDetailDiv = document.getElementById('isian');
        const selectedGameId = localStorage.getItem('selectedGameId');

        if (selectedGameId) {
            const tampDetail = 'https://api.allorigins.win/get?url=' + encodeURIComponent('https://www.freetogame.com/api/game?id=' + selectedGameId);

            fetch(tampDetail)
                .then(response => response.json())
                .then(data => {
                    const responseText = data.contents;
                    const game = JSON.parse(responseText);

                    const dive = document.createElement('div');
                    dive.className ='divey';
                    const divee = document.createElement('div');
                    divee.className='diveyy';
                    const aplgg = document.createElement('div');
                    aplgg.className='lagii';
                    const aplggA = document.createElement('div');
                    aplggA.className='lagiiA';
                    const tampp = document.createElement('div');
                    tampp.className='tampung';
                    const crtA = document.createElement('div');
                    crtA.className='creatt';
                    const brr = document.createElement('br');

                    // mengambil gambar dari API
                    const thumbnail = document.createElement('img');
                    thumbnail.src = game.thumbnail;
                    thumbnail.alt = game.title;
                    thumbnail.className='magss';

                    // menambil nama game dari api 
                    const title = document.createElement('h1');
                    title.textContent = game.title;
                    title.className='titt';

                    // mengambil description game 
                    const description = document.createElement('p');
                    description.textContent = game.description;

                    // mengambil genre game 
                    const genre = document.createElement('p');
                    genre.textContent = `Genre : ${game.genre}`;

                    // mengambil platform game 
                    const platform = document.createElement('p');
                    platform.textContent = `Platform : ${game.platform}`;

                    // mengambil publisher game 
                    const publisher = document.createElement('p');
                    publisher.textContent = `Publisher : ${game.publisher}`;

                    // mengambil developer game 
                    const developer = document.createElement('p');
                    developer.textContent = `Developer : ${game.developer}`;

                    // judul untuk description
                    const kt = document.createElement('h3');
                    kt.textContent = `Description ${game.title}`;

                    // tanggal rilis game
                    const releaseDate = document.createElement('p');
                    releaseDate.textContent = `Release Date : ${game.release_date}`;

                    // menambahkan icon fav 
                    const spp = document.createElement('span');
                    spp.className='material-symbols-outlined';
                    spp.textContent='favorite';
                    spp.classList.add('agus');
                    spp.classList.add('agus2');

                    // membuat tombol get untuk pergi ke url game 
                    const tagA = document.createElement('p');
                    tagA.textContent = 'GET';
                    tagA.className='pp';

                    dive.appendChild(title);
                    divee.appendChild(genre);
                    divee.appendChild(platform);
                    divee.appendChild(publisher);
                    divee.appendChild(developer);
                    divee.appendChild(releaseDate);

                    aplgg.appendChild(thumbnail);
                    aplgg.appendChild(divee);
                    aplggA.appendChild(kt);
                    aplggA.appendChild(brr);
                    aplggA.appendChild(description);
                    dive.appendChild(aplggA);

                    crtA.appendChild(tagA);
                    tampp.appendChild(spp);
                    tampp.appendChild(crtA);
                    aplgg.appendChild(tampp);

                    gameDetailDiv.appendChild(aplgg);
                    gameDetailDiv.appendChild(dive);

                    // kondisi ketika klik icon fav 
                    spp.addEventListener('click', () => {
                        handleFavoriteClick(game, spp);
                    });
    
                    // Periksa apakah game sudah ada di favorit dan perbarui ikonnya
                    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
                    if (favorites.some(fav => fav.id === game.id)) {
                        spp.classList.add('favorite');
                    }                

                    // ketika klik get 
                    crtA.addEventListener('click', () => {
                        window.open(game.game_url, '_blank');
                    });
                }).catch(error => console.error('Error:', error));
        } else {
            gameDetailDiv.textContent = 'Tidak ada game yang dipilih.';
        }

///////////////////////////////////////////////////////////////////////////////
/////////Function untuk tampilan game yang ditambahkan ke fav di fav.html/////

function handleFavoriteClick(game, iconElement) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isFavorite = favorites.some(fav => fav.id === game.id);

    if (isFavorite) {
        // Jika game sudah ada dalam favorit, hapus game dari array favorit.
        favorites = favorites.filter(fav => fav.id !== game.id);
        iconElement.classList.remove('favorite');
    } else {
        // Jika game belum ada dalam favorit, tambahkan game ke array favorit.
        favorites.push(game);
        iconElement.classList.add('favorite');
    }

    // Simpan kembali array favorit yang sudah diperbarui ke localStorage.
    localStorage.setItem('favorites', JSON.stringify(favorites));
}
        
document.addEventListener('DOMContentLoaded', () => {
    loadFavorites();
});
        
function loadFavorites() {
    const favoritesDiv = document.getElementById('favorites');
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favoritesDiv.textContent = ''; 

    // Untuk setiap game dalam array favorit,
    favorites.forEach(game => {
        const gameDiv = document.createElement('div');
        gameDiv.className = 'favorite-game';

        const ttl = document.createElement('div');
        ttl.className = 'tittl';
        
        const title = document.createElement('p');
        title.textContent = game.title;
        title.className = 'ttfav';

        const thumbnail = document.createElement('img');
        thumbnail.src = game.thumbnail;
        thumbnail.alt = game.title;
        thumbnail.className = 'mgs';

        const spp = document.createElement('span');
        spp.className = 'material-symbols-outlined';
        spp.textContent = 'favorite';
        spp.classList.add('agus');
        spp.classList.add('agus2');

        gameDiv.appendChild(thumbnail);
        ttl.appendChild(title);
        ttl.appendChild(spp);
        gameDiv.appendChild(ttl);

        // Tambahkan event listener untuk klik pada div game favorit.
        gameDiv.onclick = () => {
            localStorage.setItem('selectedGameId', game.id);
            window.location.href = 'datee.html';
        };

        // Tambahkan div game favorit ke dalam elemen div dengan ID 'favorites'.
        favoritesDiv.appendChild(gameDiv);

        // Periksa jika game ada dalam daftar favorit dan tambahkan kelas 'favorite' pada ikon.
        if (favorites.some(fav => fav.id === game.id)) {
            spp.classList.add('favorite');
        }
    });
}
