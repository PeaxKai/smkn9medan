function tambahChat(tanya, jawab) {
    const kotakAtas = document.getElementById("Kotak_AI_Atas");
    kotakAtas.innerHTML += `<div class="kotak-ai-pertanyaan">${tanya}</div>`;
    kotakAtas.innerHTML += `<div class="kotak-ai-jawaban">${jawab}</div>`;
    kotakAtas.scrollTop = kotakAtas.scrollHeight;
}

function Tombol_AI_1() {
    tambahChat("Siapa nama kamu?", "Saya adalah asisten AI Peax.");
}

function Tombol_AI_2() {
    tambahChat("Halo, apa kabar?", "Halo, kabar saya baik, ada yang bisa dibantu?");
}

function Tombol_AI_3() {
    tambahChat("Kamu bisa jawab semua pertanyaan?", "Saya akan berusaha menjawab pertanyaan sesuai informasi yang tersedia.");
}

function Tombol_AI_4() {
    tambahChat("Apa itu SMK Negeri 9 Medan?", "SMK Negeri 9 Medan adalah salah satu Sekolah Menengah Kejuruan negeri yang berada di Kota Medan.");
}

function Tombol_AI_5() {
    tambahChat("Apa saja jurusan yang ada di SMK Negeri 9 Medan?", "Jurusan yang ada di SMK Negeri 9 Medan meliputi Teknik Komputer dan Jaringan (TKJ), Rekayasa Perangkat Lunak (RPL), Desain Komunikasi Visual (DKV), Social Care (Pekerjaan Sosial), Produksi dan Siaran Program Televisi (PSPT), serta Animasi.");
}