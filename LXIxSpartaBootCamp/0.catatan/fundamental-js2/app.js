//   /$$$$$$                                 /$$     /$$                    
//  /$$__  $$                               | $$    |__/                    
// | $$  \__//$$   /$$ /$$$$$$$   /$$$$$$$ /$$$$$$   /$$  /$$$$$$  /$$$$$$$ 
// | $$$$   | $$  | $$| $$__  $$ /$$_____/|_  $$_/  | $$ /$$__  $$| $$__  $$
// | $$_/   | $$  | $$| $$  \ $$| $$        | $$    | $$| $$  \ $$| $$  \ $$
// | $$     | $$  | $$| $$  | $$| $$        | $$ /$$| $$| $$  | $$| $$  | $$
// | $$     |  $$$$$$/| $$  | $$|  $$$$$$$  |  $$$$/| $$|  $$$$$$/| $$  | $$
// |__/      \______/ |__/  |__/ \_______/   \___/  |__/ \______/ |__/  |__/

// Bagian function 
// namaFungsi
// (isi argumen/parameter){
//  isi fungsi   
// }

function calculateArea(radius){
    const pi = 3.14;
    const area = pi * radius**2;
    return area;
}

// manggil fungsi
// function_name(isi argumen/parameter);
const area1 = calculateArea(10)
console.log('Area 1 = ' + area1) // Area 1 = 314

// Kalau lebih banyak jadi undefined.
const area2 = calculateArea(20 , 30)
console.log('Area 2 = ' + area2) // Area 2 = 1256

// konvensi nama sebaiknya camelCase
// kalau jsx snake_case

function banyakParam (param1,param2=undefined,param3=0,param4=''){
    console.log(param1);
    console.log(param2);
    console.log(param3);
    console.log(param4);
}

banyakParam(1,3,undefined)
// undefined tidak diprioritiaskan
// kalau kosong pakai nilai default
// kalau berisi pakai isian.
// kosong ditengah nggak boleh

//            /$$                                 /$$    
//           | $$                                | $$    
//   /$$$$$$ | $$$$$$$  /$$  /$$$$$$   /$$$$$$$ /$$$$$$  
//  /$$__  $$| $$__  $$|__/ /$$__  $$ /$$_____/|_  $$_/  
// | $$  \ $$| $$  \ $$ /$$| $$$$$$$$| $$        | $$    
// | $$  | $$| $$  | $$| $$| $$_____/| $$        | $$ /$$
// |  $$$$$$/| $$$$$$$/| $$|  $$$$$$$|  $$$$$$$  |  $$$$/
//  \______/ |_______/ | $$ \_______/ \_______/   \___/  
//                /$$  | $$                              
//               |  $$$$$$/                              
//                \______/   

// Object
const ayam = {
    nama: "Bebek",
    jumlahKaki: 2,
    adaEkor: true
}

// buat nyari value di dalam
console.log(ayam.nama);
console.log(ayam['nama']);
// ganti hasil
ayam.nama = "ayam";
// tambah property
ayam['jumlahMata'] = 2;
// hapus property
delete ayam['jumlahMata'];

// Fungsi + Object
// semacam prototype atau cetakan
function Hero(name,skills,role){
    // this. mendeklarasikan variabel baru dan mengambil nilai dari parameter.
    // dari inputan pengguna
    this.name = name;
    this.skills = skills;
    this.role = role;

    // dari sistem
    this.mana = 1000;
    this.blood = 100;
    this.level = 1;
}

// Bikin isinya
const Hayabusha = new Hero('Hayabusha',['skill1','skill2','skill3'],'Assassins');
const Miya = new Hero('Miya',['skill1','skill2'],'Marksman');
const GatotKaca= new Hero('Gatot Kaca',['skill1','skill2','skill3','skill4'],'Tank');

console.log(GatotKaca)


// Cara mengubah informasi di cetakan
// Hero.prototype.attack = function{
//     this.mana = this.mana-10;

//     console.log(this.mana)
// }

// bisa juga pakai variabel
Hero.prototype.attack = function (power){
    this.mana = this.mana-power;

    console.log(this.mana)
}

Hayabusha.attack(20);
Miya.attack(10);