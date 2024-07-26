/////////////////////////////////////////////////////////////////////
//////////////Untuk yang menampilkan berbagai categori ///////////////

// ketika klik MMORPG 
document.addEventListener("DOMContentLoaded", () => {
    let apaya = document.querySelector('.klkctt');
    if (apaya){
    apaya.addEventListener('click', function() {
        let elements = document.querySelectorAll('.clctt');
        let elementss = document.querySelectorAll('.clcrr');
        let elementA = document.querySelectorAll('.clstt');
        let elementB = document.querySelectorAll('.clspp');
        elements.forEach(function(element) {
            if (element.classList.contains('claj')) {
                elementss.forEach(function(elementt){
                    if(elementt.classList.contains('clajB')){
                        element.classList.remove('claj');
                    }else{
                        elementt.classList.add('clajB');
                        element.classList.remove('claj');
                    }
                });
                elementA.forEach(function(elementtA){
                    if(elementtA.classList.contains('clajC')){
                        element.classList.remove('claj');
                    }else{
                        elementtA.classList.add('clajC');
                        element.classList.remove('claj');
                    }
                })
                elementB.forEach(function(elementtB){
                    if(elementtB.classList.contains('clajD')){
                        element.classList.remove('claj');
                    }else{
                        elementtB.classList.add('clajD');
                        element.classList.remove('claj');
                    }
                })
            } else {
                element.classList.add('claj');
            }
        });
    });
  }
  });
  
    
//// ketika klik CARD 
  document.addEventListener("DOMContentLoaded", () => {
    let apayaB = document.querySelector('.klkcrr');
    if (apayaB){
    apayaB.addEventListener('click', function() {
        let elements = document.querySelectorAll('.clcrr');
        let elementss = document.querySelectorAll('.clctt');
        let elementA = document.querySelectorAll('.clstt');
        let elementB = document.querySelectorAll('.clspp');
    
        elements.forEach(function(element) {
            if (element.classList.contains('clajB')) {
                elementss.forEach(function(elementt){
                    if(elementt.classList.contains('claj')){
                        element.classList.remove('clajB');
                    }else{
                        elementt.classList.add('claj');
                        element.classList.remove('clajB');
                    }
                });
                elementA.forEach(function(elementtA){
                    if(elementtA.classList.contains('clajC')){
                        element.classList.remove('clajB');
                    }else{
                        elementtA.classList.add('clajC');
                        element.classList.remove('clajB');
                    }
                })
                elementB.forEach(function(elementtB){
                    if(elementtB.classList.contains('clajD')){
                        element.classList.remove('clajB');
                    }else{
                        elementtB.classList.add('clajD');
                        element.classList.remove('clajB');
                    }
                })
            } else {
                element.classList.add('clajB');
            }
        });
    });
    }
  });
  
  
//// ketika klik Strategy 
  document.addEventListener("DOMContentLoaded", () => {
    let apayaC = document.querySelector('.klkst');
    if (apayaC){
    apayaC.addEventListener('click', function() {
        let elements = document.querySelectorAll('.clstt');
        let elementss = document.querySelectorAll('.clcrr');
        let elementA = document.querySelectorAll('.clctt');
        let elementB = document.querySelectorAll('.clspp');
        elements.forEach(function(element) {
            if (element.classList.contains('clajC')) {
                elementss.forEach(function(elementt){
                    if(elementt.classList.contains('clajB')){
                        element.classList.remove('clajC');
                    }else{
                        elementt.classList.add('clajB');
                        element.classList.remove('clajC');
                    }
                });
                elementA.forEach(function(elementtA){
                    if(elementtA.classList.contains('claj')){
                        element.classList.remove('clajC');
                    }else{
                        elementtA.classList.add('claj');
                        element.classList.remove('clajC');
                    }
                })
                elementB.forEach(function(elementtB){
                    if(elementtB.classList.contains('clajD')){
                        element.classList.remove('clajC');
                    }else{
                        elementtB.classList.add('clajD');
                        element.classList.remove('clajC');
                    }
                })
       
            }
            else{
                element.classList.add('clajC');
    
            }
        });
    });
    }
  });
  
//// ketika klik SPORTS 
  document.addEventListener("DOMContentLoaded", () => {
    let apayaD = document.querySelector('.klksp');
    if (apayaD){
    apayaD.addEventListener('click', function() {
        let elements = document.querySelectorAll('.clspp');
        let elementss = document.querySelectorAll('.clcrr');
        let elementA = document.querySelectorAll('.clstt');
        let elementB = document.querySelectorAll('.clctt');
        elements.forEach(function(element) {
            if (element.classList.contains('clajD')) {
                elementss.forEach(function(elementt){
                    if(elementt.classList.contains('clajB')){
                        element.classList.remove('clajD');
                    }else{
                        elementt.classList.add('clajB');
                        element.classList.remove('clajD');
                    }
                });
                elementA.forEach(function(elementtA){
                    if(elementtA.classList.contains('clajC')){
                        element.classList.remove('clajD');
                    }else{
                        elementtA.classList.add('clajC');
                        element.classList.remove('clajD');
                    }
                })
                elementB.forEach(function(elementtB){
                    if(elementtB.classList.contains('claj')){
                        element.classList.remove('clajD');
                    }else{
                        elementtB.classList.add('claj');
                        element.classList.remove('clajD');
                    }
                })
            } else {
                element.classList.add('clajD');
            }
        });
    });
    }
  });
  
    
/////// CATEGORY MMORPG
const tamp2 = 'https://api.codetabs.com/v1/proxy?quest=' + encodeURIComponent('https://www.freetogame.com/api/games?platform=browser&category=mmorpg&sort-by=release-date');

// Fungsi untuk mengambil dan menampilkan data game MMORPG dari platform browser.
function tampil2() {
    fetch(tamp2)
        .then(response => {
            console.log('Fetch Response Status:', response.status);

            // Mengecek apakah respons dari jaringan berhasil.
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Response Data:', data);

            // Mengecek apakah data yang diterima adalah array.
            if (data && Array.isArray(data)) {
                data.forEach(game => {
                    const dv = document.createElement("div");
                    dv.className = "dvctt";

                    const div = document.getElementById("catt");
                    if (!div) {
                        console.error('Element with ID "catt" not found.');
                        return;
                    }

                    // Membuat elemen img untuk menampilkan thumbnail game.
                    const img = document.createElement("img");
                    img.src = game.thumbnail;
                    img.className = "kelas";

                    dv.appendChild(img);

                    const p = document.createElement("p");
                    p.textContent = game.title;
                    dv.appendChild(p);
                    div.appendChild(dv);

                    // Menambahkan event listener klik pada elemen div.
                    // Ketika diklik, simpan ID game yang dipilih ke localStorage dan arahkan ke halaman 'datee.html'.
                    dv.onclick = () => {
                        localStorage.setItem('selectedGameId', game.id);
                        window.location.href = 'datee.html';
                    };
                });
            } else {
                console.error('Data is not in the expected format or is missing:', data);
            }
        })
        .catch(error => {
            console.error('Fetch Error:', error);
        });
}

tampil2();


////////// CATEGORY CARD
const tampB = 'https://api.allorigins.win/get?url=' + encodeURIComponent('https://www.freetogame.com/api/games?platform=browser&category=card&sort-by=release-date');
function tampilB() {
    fetch(tampB)
        .then(response => response.json())
        .then(data => {
            const responseText = data.contents;
            const games = JSON.parse(responseText);
            
            games.forEach(game => {
                const dv = document.createElement("div");
                dv.className="dvctt";
                const div = document.getElementById("cdd");

                const img = document.createElement("img");
                img.src = game.thumbnail;
                img.className="kelas";
                dv.appendChild(img);

                const p = document.createElement("p");
                p.textContent = game.title;
                dv.appendChild(p)
                div.appendChild(dv);

                dv.onclick = () => {
                    localStorage.setItem('selectedGameId', game.id);
                    window.location.href = 'datee.html';
                };

            });
        })
        .catch(error => console.error('Error:', error));
}

tampilB();


////////// CATEGORY STRATEGY
const tampC = 'https://api.codetabs.com/v1/proxy?quest=' + encodeURIComponent('https://www.freetogame.com/api/games?platform=browser&category=strategy&sort-by=release-date');

function tampilC() {
    fetch(tampC)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {

            // Asumsi data adalah array langsung
            if (Array.isArray(data)) {
                data.forEach(game => {
                    const dv = document.createElement("div");
                    dv.className = "dvctt";
                    const div = document.getElementById("stt");

                    const img = document.createElement("img");
                    img.src = game.thumbnail;
                    img.className = "kelas";
                    dv.appendChild(img);

                    const p = document.createElement("p");
                    p.textContent = game.title;
                    dv.appendChild(p);
                    div.appendChild(dv);

                    dv.onclick = () => {
                        localStorage.setItem('selectedGameId', game.id);
                        window.location.href = 'datee.html';
                    };
                });
            } else {
                console.error('Data is not an array:', data);
            }
        })
        .catch(error => console.error('Fetch Error:', error));
}

tampilC();


//////// CATEGORY SPORTS
const tampD = 'https://api.allorigins.win/get?url=' + encodeURIComponent('https://www.freetogame.com/api/games?platform=browser&category=sports&sort-by=release-date');
function tampilD() {
    fetch(tampD)
        .then(response => response.json())
        .then(data => {
            const responseText = data.contents;
            const games = JSON.parse(responseText);
            
            games.forEach(game => {
                const dv = document.createElement("div");
                dv.className="dvctt";
                const div = document.getElementById("spp");

                const img = document.createElement("img");
                img.src = game.thumbnail;
                img.className="kelas";
                dv.appendChild(img);

                const p = document.createElement("p");
                p.textContent = game.title;
                dv.appendChild(p)
                div.appendChild(dv);

                dv.onclick = () => {
                    localStorage.setItem('selectedGameId', game.id);
                    window.location.href = 'datee.html';
                };

            });
        })
        .catch(error => console.error('Error:', error));
}

tampilD();


///////// TAMPILKAN GAMES LISTS SESUAI ALPHABET
const tampG = 'https://api.codetabs.com/v1/proxy?quest=' + encodeURIComponent('https://www.freetogame.com/api/games?sort-by=alphabetical');
let games = [];

// Fungsi untuk mengambil data game dari API dan menampilkannya di halaman web.
function tampilG() {
    fetch(tampG)
        .then(response => response.json()) // Mengembalikan respons dalam format JSON.
        .then(data => {
            games = data; // Menyimpan data game ke dalam array games.
            displayGames(games, document.getElementById('list'));
        })
        .catch(error => console.error('Error:', error)); // Menangani dan mencetak error jika terjadi kesalahan.
}

// Fungsi untuk menampilkan daftar game dalam elemen kontainer.
function displayGames(games, container) {
    container.textContent = ''; 
    games.forEach(game => {
        const dv = document.createElement("div");
        dv.className = "dvctt";

        const img = document.createElement("img");
        img.src = game.thumbnail;
        img.className = "kelas";
        dv.appendChild(img);

        const p = document.createElement("p");
        p.textContent = game.title;
        p.className = 'gtw';
        dv.appendChild(p);

        // Menambahkan event listener klik pada elemen div.
        // Ketika elemen div diklik, simpan ID game yang dipilih ke localStorage dan arahkan ke halaman 'datee.html'.
        dv.onclick = () => {
            localStorage.setItem('selectedGameId', game.id);
            window.location.href = 'datee.html';
        };

        container.appendChild(dv);
    });
}

// Fungsi untuk mencari game berdasarkan search.
function searchGames(query) {
    const results = games.filter(game => game.title.toLowerCase().includes(query.toLowerCase()));
    const message = `Results from searches '${query}'`;

    const searchResultsMessage = document.getElementById('searchResultsMessage');
    searchResultsMessage.textContent = message;

    const searchResultsContainer = document.querySelector('.cari');
    searchResultsContainer.classList.remove('hiddsrc');
    searchResultsContainer.classList.add('visible');
    
    displayGames(results, document.getElementById('results'));

    searchResultsContainer.scrollIntoView({ behavior: 'smooth' });
}

// Menambahkan event listener klik pada tombol pencarian dengan ID 'searchButton'.
document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value;
    searchGames(query);
});

// Menambahkan event listener keypress pada elemen input dengan ID 'searchInput' untuk menangani penekanan tombol Enter.
document.getElementById('searchInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const query = document.getElementById('searchInput').value;
        searchGames(query);
    }
});

// Menambahkan event listener klik pada tombol pencarian tambahan dengan ID 'searchButtonA'.
document.getElementById('searchButtonA').addEventListener('click', () => {
    const query = document.getElementById('searchInputA').value;
    searchGames(query);
});

// Menambahkan event listener keypress pada elemen input dengan ID 'searchInputA' untuk menangani penekanan tombol Enter.
document.getElementById('searchInputA').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const query = document.getElementById('searchInputA').value;
        searchGames(query);
    }
});

tampilG();
