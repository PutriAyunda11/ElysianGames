
////////////////////////////////////////
/////Untuk tampilan data di Home ///////
const tamp = 'https://api.codetabs.com/v1/proxy?quest=' + encodeURIComponent('https://www.freetogame.com/api/games?platform=pc');

// Fungsi untuk mengambil dan menampilkan data game.
function tampil() {
    fetch(tamp)
        .then(response => {
            // Mengecek apakah respons dari jaringan berhasil.
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(games => {
            // Mengecek apakah data yang diterima adalah array.
            if (!Array.isArray(games)) {
                throw new Error('Response is not an array');
            }

            // Loop untuk memproses maksimal 20 game atau sebanyak jumlah game yang tersedia.
            for (let i = 0; i < 20 && i < games.length; i++) {
                const game = games[i];

                const hal = document.getElementById("gambar");
                const div = document.createElement("div");
                div.className = "objek";

                // Membuat elemen img untuk menampilkan thumbnail game.
                const img = document.createElement("img");
                img.src = game.thumbnail;
                img.className = "mages";

                // Menambahkan elemen img ke dalam elemen div.
                div.appendChild(img);

                // Membuat elemen p untuk menampilkan judul game.
                const p = document.createElement("p");
                p.textContent = game.title;
                div.appendChild(p);
                hal.appendChild(div);

                // Menambahkan event listener klik pada elemen div.
                // Ketika diklik, simpan ID game yang dipilih ke localStorage dan arahkan ke halaman 'datee.html'.
                div.onclick = () => {
                    localStorage.setItem('selectedGameId', game.id);
                    window.location.href = 'datee.html';
                };
            }
        })
        .catch(error => {
            // Menangani dan mencetak error jika terjadi kesalahan dalam permintaan fetch atau pemrosesan data.
            console.error('Error:', error);
        });
}

tampil();


// ketika klik 'Can I play PC Games for free ?'
let klik8 = document.querySelector(".klkk");
if (klik8) {
  klik8.addEventListener("click", function () {
    let elements = document.querySelectorAll(".toggl");
    elements.forEach(function (element) {
      if (element.classList.contains("hidd")) {
        element.classList.remove("hidd");
      } else {
        element.classList.add("hidd");
      }
    });
  });
}

// ketika klik 'Are ElysianGames free ?'
let klik = document.querySelector(".klkk1");
if (klik) {
  klik.addEventListener("click", function () {
    let elements = document.querySelectorAll(".toggll");
    elements.forEach(function (element) {
      if (element.classList.contains("hiddd")) {
        element.classList.remove("hiddd");
      } else {
        element.classList.add("hiddd");
      }
    });
  });
}

// ketika klik 'what is elysianGames'
let klikA = document.querySelector('.klk');
        if (klikA) {
            klikA.addEventListener('click', function() {
                let elements = document.querySelectorAll('.togg');
                elements.forEach(function(element) {
                    if (element.classList.contains('hid')) {
                        element.classList.remove('hid');
                    } else {
                        element.classList.add('hid');
                    }
                });
            });
        }

