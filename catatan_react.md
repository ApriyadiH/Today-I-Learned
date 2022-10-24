```
 <!--
 /$$$$$$$                                  /$$
| $$__  $$                                | $$
| $$  \ $$  /$$$$$$   /$$$$$$   /$$$$$$$ /$$$$$$
| $$$$$$$/ /$$__  $$ |____  $$ /$$_____/|_  $$_/
| $$__  $$| $$$$$$$$  /$$$$$$$| $$        | $$
| $$  \ $$| $$_____/ /$$__  $$| $$        | $$ /$$
| $$  | $$|  $$$$$$$|  $$$$$$$|  $$$$$$$  |  $$$$/
|__/  |__/ \_______/ \_______/ \_______/   \___/
-->
```

## a Java script framework

#

# Persiapan

Download git
Download node js.
Check kalau sudah berhasil cek versi

node -v

```js
node -v // cek versi node
git --version // cek versi git
npm install -g yarn // install yarn
yarn -v // cek versi yarn
```

Kemudian pindah ke folder yang diinginkan.
Jalankan terminal

```js
yarn create react-app nama_proyek_gk_pake_spasi // Nama proyek boleh diganti
// Kemudian pindah ke folder proyek tsb..
cd nama_proyek_gk_pake_spasi
yarn start
```

#

# Component

## sebuah fungsi yang memiliki return yang mirip dengan html (disebut juga jsx). Hanya boleh memiliki 1 komponen. Misalnya hanya <div> saja. Tetapi di dalam div boleh diisi lebih banyak. Akan ada variabel yang di deklarasikan dan memiliki isi 'fungsi'

```js
import React from "react"; // Import sesuatu

const App = () => { // Nama komponen PascalCase, Komponen yang menggunakan arrow function
  return (
    <div>This is the App component I made.</div>; // Yang dihasilkan oleh komponen App
  )
}

export default App; // Hasil keluaran App akan di kirim ke index.html
```

# Import beberapa file

```jsx
import logo from "./logo.svg"; // Import gambar
import "./App.css"; // Import file css
```

# Ketentuan membuat komponen.

```js
const PerluTagPenutup = () => {
    return(
        // Contoh yang salah. Nggak pakai </p> dan nggak pakai /> di akhir input
        <div>
            <p> Lupa pakai
            <input type ='text'>
        </div>
    );
}
```

```js
const HanyaSatuKomponen = () => {
    return(
        // Contoh yang salah. Nggak boleh pakai 2 komponen harusnya. Jadi bisa ditambain <div> dan memindahkan isinya ke dalam div
        <p> komponen 1 </p>
        <p> komponen 2 </p>
    );
}
```

```js
const NggakBolehPakaiClass = () => {
  return (
    // Ini contoh yang benar
    <div className="kotak">
      <div class="kotak"> Ini contoh yang salah </div>
    </div>
  );
};
```

```jsx
const PenggunaanStyle = () => {
  // Bisa dengan variabel style
  const my_styles = {
    color: "orange",
    fontSize: "20px", //Harus pakai PascalCase bukan dengan -
  };
  return (
    // bisa juga ngasih langsung
    <div>
      <p style={my_styles}> Style dengan variabel my_styles</p>
      <p style={{ color: "red", fontSize: "20px" }}>
        Style secara langsung, pakai 2 kurung kurawal
      </p>
    </div>
  );
};
```

# Bisa menggunakan JavaScript dengan kurung kurawal {}

```js
import React from "react";

const App = () => {
  console.log("App success");
  const ayam = "goreng";
  // Disini menggunakan syntax dari JS dan memunculkan nilai dari variabel ayam
  return <div>{ayam}</div>;
};

export default App;
```

#

# Props, children, parent.

```jsx
const KomponenE = () => {
  return (

  )
}

const KomponenD = () => {
  return (

  )
}

const KomponenC = () => {
  return (
    <div>
      <KomponenD/>;
    </div>
  )
}

const KomponenB = () => {
  return (
    // Pakai div kalau mau panggil beberapa element
    <div>
      <p> Elemen pertama</p>
      <KomponenC/>;
    </div>
  )
}

const KomponenA = () => {
  return (
    // Bisa juga ditulis dalam bentuk seperti ini. Kemudian bisa diisi di dalamnya.
    <KomponenB>
      Ini bagian dalam. Ini juga berarti A adalah Parent, B adalah child. Diperhatikan lokasi / di Tag penutup.
    </KomponenB>;
  )
}

const App = () => { // Parent punya akses ke anaknya.
  return (
    <KomponenA/>; // Ini berarti App jadi Parent, child nya A
  )
}

export default App;
```

# Props

## Mengirimkan informasi dari Parent ke Child. Tidak bisa dari Child ke Parent dengan props.

```jsx
const AnaknyaChild = (props) => {
  console.log("ini di AnaknyaChild");
  console.log(props.dari_child);
  return <p>di Anaknya Child {props.dari_child}</p>;
};

const Child = (props) => {
  // Tuliskan props di dalam fungsi
  console.log("ini di Child");
  console.log(props.yg_dikirim); // Disini nggak perlu kurung {} kaerna masih js.
  return (
    // Disini pakai kurung {} karena jsx
    <div>
      <p> di Child {props.yg_dikirim} </p>
      <AnaknyaChild dari_child={props.yg_dikirim} />
    </div>
  );
};

const App = () => {
  // Parent punya akses ke anaknya.
  const apa_aja = "informasi yang mau dikirim";
  return <Child yg_dikirim={apa_aja} />;
};

export default App;
```
