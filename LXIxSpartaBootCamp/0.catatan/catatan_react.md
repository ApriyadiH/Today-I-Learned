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

```html
<!--
 /$$$$$$$                      /$$          
| $$__  $$                    |__/          
| $$  \ $$  /$$$$$$   /$$$$$$$ /$$  /$$$$$$$
| $$$$$$$  |____  $$ /$$_____/| $$ /$$_____/
| $$__  $$  /$$$$$$$|  $$$$$$ | $$| $$      
| $$  \ $$ /$$__  $$ \____  $$| $$| $$      
| $$$$$$$/|  $$$$$$$ /$$$$$$$/| $$|  $$$$$$$
|_______/  \_______/|_______/ |__/ \_______/
-->
```

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
import File_css from "./App.css"; // Import file css
Import Layout from "./components/layout";
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

# Props, child, children, parent.

```jsx
// Contoh lupa props
const GagalChildDua = () => {
  return <div>{props.children}</div>;
};

const GagalParentDua = () => {
  return (
    <GagalChildDua>
      <p>
        ini nggak ter-render karena di komponen GagalChildDua lupa pakai props
      </p>
    </GagalChildDua>
  );
};
////////////////////////////////////////////////////////////
// Contoh lupa props.children
const GagalChildSatu = (props) => {
  return;
  <div>{/* Seharusnya ada props.children */}</div>;
};

const GagalParentSatu = () => {
  return (
    <GagalChildSatu>
      <p>
        Ini nggak ter-render karena di komponen GagalChildSatu lupa memanggil
        props.children
      </p>
    </GagalChildSatu>
  );
};
////////////////////////////////////////////////////////////
// Contoh berhasil
const KomponenB = (props) => {
  // JANGAN LUPA PROPS
  return (
    //Panggil anaknya
    <div>{props.children}</div>
  );
};

const KomponenA = () => {
  return (
    // Bisa juga ditulis dalam bentuk seperti ini. Kemudian bisa diisi di dalamnya.
    <KomponenB>
      <p>
        Ini bagian dalam. Ini juga berarti A adalah Parent, B adalah child.
        Diperhatikan lokasi / di Tag penutup.
      </p>
      <p>Komponen p ini juga merupakan childrennya B</p>
      <p>Tapi baru bisa ter-render kalau dipanggil di B dan ada props</p>
    </KomponenB>
  );
};

const App = () => {
  // Parent punya akses ke anaknya.
  return (
    <KomponenA /> // Ini berarti App jadi Parent, child nya A
  );
};

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
    // Bisa pakai div untuk memanggil beberapa elemen
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

#

# Props tapi dengan destructure

## bisa nambahin default value juga

```jsx
// Bisa mentransfer beberapa variabel dengan {}
const Child = ({
  ini_string,
  ini_integer,
  ini_default = "goreng",
  mengalahkan_default = "default",
  caralain,
  mengalahkan_caralain,
}) => {
  return (
    <div>
      <p>contoh String = {ini_string}</p>
      <p>contoh integer = {ini_integer}</p>
      <p>contoh default Value, tapi kosong = {ini_default}</p>
      <p>
        contoh default Value, tapi ada nilainya dibawah = {mengalahkan_default}
      </p>
      <p>contoh dengan defaultProps diluar = {caralain} </p>
      <p>
        contoh dengan defaultProps diluar tapi dikalahkan={" "}
        {mengalahkan_caralain}{" "}
      </p>
    </div>
  );
};

Child.defaultProps = {
  caralain: "default cara lain",
  mengalahkan_caralain: "default cara lain",
};

const App = () => {
  return (
    <Child
      ini_string="ayam"
      ini_integer={2}
      mengalahkan_default="nggak pakai default"
      mengalahkan_caralain="nggak pakai default"
    />
  );
};

export default App;
```

#

# Spread Operator

## Mengambil informasi dan kemudian ditambahkan. berguna untuk menyalin immutable object

#

# Map

## Semacam menggunakan data dari array kemudian membuat baris kode yang sama dengan sedikit perbedaan dengan proses looping.

```jsx
const App = () => {
  const hewan = ['ayam','bebek','cicak','domba'];

  return (
    <div key = {}>
      {hewan_banyak.map((hewan) => (
        return (
          <div>{hewan}</div>
        )
      ))}
  )
}

export default App;

```

#

```html
<!--
  /$$$$$$   /$$               /$$ /$$                    
 /$$__  $$ | $$              | $$|__/                    
| $$  \__//$$$$$$   /$$   /$$| $$ /$$ /$$$$$$$   /$$$$$$ 
|  $$$$$$|_  $$_/  | $$  | $$| $$| $$| $$__  $$ /$$__  $$
 \____  $$ | $$    | $$  | $$| $$| $$| $$  \ $$| $$  \ $$
 /$$  \ $$ | $$ /$$| $$  | $$| $$| $$| $$  | $$| $$  | $$
|  $$$$$$/ |  $$$$/|  $$$$$$$| $$| $$| $$  | $$|  $$$$$$$
 \______/   \___/   \____  $$|__/|__/|__/  |__/ \____  $$
                    /$$  | $$                   /$$  \ $$
                   |  $$$$$$/                  |  $$$$$$/
                    \______/                    \______/ 
-->
```

# Styling tambahan

```html
yarn add styled-components
```

## style bisa ditambahkan dengan beberapa cara...

1. dengan style = {}
2. dengan file css
3. masuk ke jsx lewat children

```jsx
import styled from "styled-components";

// Masukkin css di dalam ini
const Box = styled.div`
  background-color: teal;
`;

const Text = styled.span`
  background-color: cyan;
`;
function App() {
  return (
    <Box>
      <Text>Sesuatu</Text>
    </Box>
  );
}

export default App;
```

# Styling dengan kondisi

```js
import styled from "styled-components";

// Kondisinya dimasukkin lewat js dengan ${} dan props
const Children = styled.div`
  background-color: ${(props) => props.yg_dikirim};
`;

function App() {
  let isinya = "green";
  if (true) {
    isinya = "cyan";
  }
  return <Children yg_dikirim={isinya}>isi children</Children>;
}

export default App;
```

#

```html
<!--
                                /$$$$$$   /$$                 /$$              
                               /$$__  $$ | $$                | $$              
 /$$   /$$  /$$$$$$$  /$$$$$$ | $$  \__//$$$$$$    /$$$$$$  /$$$$$$    /$$$$$$ 
| $$  | $$ /$$_____/ /$$__  $$|  $$$$$$|_  $$_/   |____  $$|_  $$_/   /$$__  $$
| $$  | $$|  $$$$$$ | $$$$$$$$ \____  $$ | $$      /$$$$$$$  | $$    | $$$$$$$$
| $$  | $$ \____  $$| $$_____/ /$$  \ $$ | $$ /$$ /$$__  $$  | $$ /$$| $$_____/
|  $$$$$$/ /$$$$$$$/|  $$$$$$$|  $$$$$$/ |  $$$$/|  $$$$$$$  |  $$$$/|  $$$$$$$
 \______/ |_______/  \_______/ \______/   \___/   \_______/   \___/   \_______/
-->
```

# State

## Nilai di dalam komponen yang berubah.

Bentuk sederhana State

```jsx
import { useState } from "react"; // Jgn lupa import use state

// Ada 2 variabel di array. yg pertama variabelnya, yg kedua fungsi untuk mengubah nilainya.
const [contoh_state, setContoh_state] = useState(
  "Nilai awal dari contoh_state"
);
```

# Mengubah dengan tombol atau onClick

```jsx
import { useState } from "react"; // Jgn lupa import use state

const KomponenLain = (props) => {
  //Bisa pakai Handler
  const efek_tombol = () => {
    props.kirim_kemampuan();
  };
  return (
    <div>
      <p>kalau state berubah, props dikirim ulang juga = {props.yg_dikirim}</p>
      <button onClick={() => props.kirim_kemampuan("Domba")}>Jadi Domba</button>
      <button onClick={efek_tombol}>Kosong</button>
    </div>
  );
};

const App = () => {
  //Nilai awal Hewan adalah Ayam
  let [hewan, setHewan] = useState("Ayam");
  return (
    <div>
      <p>hewan = {hewan}</p>
      {/* Jgn lupa camelCase untuk properti dari DOM di jsx */}
      {/* Disini tombol akan menjalankan fungsi tanpa nama yang menjalankan efek "setHewan" */}
      <button onClick={() => setHewan("bebek")}>Jadi Bebek</button>

      {/* Tombol ini mengubah variabel hewan menjadi cicak, tetapi tidak mengubah state. Jadi React tidak melakukan rendering ulang. */}

      {/* Dapat dilihat di console, akan muncul cicak tetapi teks di <p> tidak berubah */}
      <button
        onClick={() => {
          hewan = "cicak";
          console.log(hewan);
        }}
      >
        Jadi Cicak
      </button>
      <KomponenLain yg_dikirim={hewan} kirim_kemampuan={setHewan} />
    </div>
  );
};

export default App;
```

# Mengubah dengan onChange

```jsx
import React, { useState } from "react"; // Jgn lupa import use state

// Jadi ceritanya react itu reactive. Kalau di input box bakal bermasalah.
// Kalau ngambil angka, react akan me-render ulang.
// Jadi solusinya adalah mengupdate data yang diambil setiap saat.
// Kemudian data tersebut ditampilin ulang.

const App = () => {
  // Variabel untuk menampung nilai dari inputan pengguna.
  const [isi, setIsi] = useState("");

  // Ini handler onChange, setiap ada perubahan di dalam input box, akan diambil datanya, diisi kembali ke input box
  const onChangeHandler = (event) => {
    const isi_handler = event.target.value;
    setIsi(isi_handler);
  };

  return (
    <div>
      <p>isi dari input text adalah {isi}</p>
      {/* nilai dari input box akan dijadikan variabel isi */}
      <input value={isi} onChange={onChangeHandler} />
    </div>
  );
};

export default App;
```

#

# Use Effect

```jsx
import React, { useEffect, useState } from "react";

const App = () => {
  const [isi, setIsi] = useState("");

  // Akan berjalan setiap ada yg di render
  // Namanya wajib "useEffect" semua
  useEffect(() => {
    console.log("Ada yang dirender");
  });

  // Array [] memberi tahu kapan useEffect dijalankan. Hanya berjalan kalau yg didalam [] berubah. Karena kosong, jadi nggak akan diulang lagi.
  useEffect(() => {
    console.log("Ada yang dirender");
  }, []);

  // Akan berjalan kalau misalnya nilai dari isi berubah
  useEffect(() => {
    console.log("current value of isi is", isi);
  }, [isi]);

  // Bisa ngambil data sebelumnya
  // Kalau ada 2 yang mengamati variabel yang sama, maka yang dijalankan yang paling terakhir.
  useEffect(() => {
    console.log("ayam goreng");
    return () => {
      // Ntah kenapa ini jalan duluan
      console.log("nilai sebelumnya adalah", isi);
    };
  }, [isi]);

  return (
    <div>
      <input
        value={isi}
        onChange={(event) => {
          setIsi(event.target.value);
        }}
      />
    </div>
  );
};

export default App;
```

#

```html
<!--
 /$$$$$$$                        /$$                                 /$$$$$$$                         
| $$__  $$                      | $$                                | $$__  $$                        
| $$  \ $$  /$$$$$$  /$$   /$$ /$$$$$$    /$$$$$$   /$$$$$$         | $$  \ $$  /$$$$$$  /$$$$$$/$$$$ 
| $$$$$$$/ /$$__  $$| $$  | $$|_  $$_/   /$$__  $$ /$$__  $$ /$$$$$$| $$  | $$ /$$__  $$| $$_  $$_  $$
| $$__  $$| $$  \ $$| $$  | $$  | $$    | $$$$$$$$| $$  \__/|______/| $$  | $$| $$  \ $$| $$ \ $$ \ $$
| $$  \ $$| $$  | $$| $$  | $$  | $$ /$$| $$_____/| $$              | $$  | $$| $$  | $$| $$ | $$ | $$
| $$  | $$|  $$$$$$/|  $$$$$$/  |  $$$$/|  $$$$$$$| $$              | $$$$$$$/|  $$$$$$/| $$ | $$ | $$
|__/  |__/ \______/  \______/    \___/   \_______/|__/              |_______/  \______/ |__/ |__/ |__/
-->
```

# React-Dom

#

```html
<!--
 /$$$$$$$                  /$$                    
| $$__  $$                | $$                    
| $$  \ $$  /$$$$$$   /$$$$$$$ /$$   /$$ /$$   /$$
| $$$$$$$/ /$$__  $$ /$$__  $$| $$  | $$|  $$ /$$/
| $$__  $$| $$$$$$$$| $$  | $$| $$  | $$ \  $$$$/ 
| $$  \ $$| $$_____/| $$  | $$| $$  | $$  >$$  $$ 
| $$  | $$|  $$$$$$$|  $$$$$$$|  $$$$$$/ /$$/\  $$
|__/  |__/ \_______/ \_______/ \______/ |__/  \__/
-->
```

# Redux

## Cara menyimpan data secara global sehingga bisa diakses oleh semua komponen tanpa harus menggunakan props.

# Persiapan

1.
2.
3.
4.
5.
6.
7.

#

# Deploy

```html
<!--
       /$$                     /$$                    
      | $$                    | $$                    
  /$$$$$$$  /$$$$$$   /$$$$$$ | $$  /$$$$$$  /$$   /$$
 /$$__  $$ /$$__  $$ /$$__  $$| $$ /$$__  $$| $$  | $$
| $$  | $$| $$$$$$$$| $$  \ $$| $$| $$  \ $$| $$  | $$
| $$  | $$| $$_____/| $$  | $$| $$| $$  | $$| $$  | $$
|  $$$$$$$|  $$$$$$$| $$$$$$$/| $$|  $$$$$$/|  $$$$$$$
 \_______/ \_______/| $$____/ |__/ \______/  \____  $$
                    | $$                     /$$  | $$
                    | $$                    |  $$$$$$/
                    |__/                     \______/   
-->
```
