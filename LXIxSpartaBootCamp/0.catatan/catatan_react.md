```html
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

```jsx
const box = { size: "big", color: "red" };

const newBox = { ...box }; // {size: "big", color: "red"}
const newBlueBox = { ...box, color: "blue" }; // {size: "big", color: "blue"}
```

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

1. Install Redux

```
yarn add redux react-redux
```

2. Tambah folder redux di dalam src.
3. Tambah folder config, modules di dalam folder redux.
4. Tambah file "configStore.js" di dalam folder config
5. Tuliskan ini di dalam configStore.js

```jsx
import { createStore } from "redux";
import { combineReducers } from "redux";

const rootReducer = combineReducers({});
const store = createStore(rootReducer);

export default store;
```

6. Tambah beberapa baris kode di index.js

```jsx
// Tambahkan ini di bagian atas
import store from "./redux/config/configStore";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Tambahkan pembungkus Provider dan letakkan App di dalam.
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
```

7. Persiapan selesai, tambahkan module sesuai kebutuhan di modules (baca bagian selanjutnya).
8. Jangan lupa tambahkan baris kode baru modules ke configStore.js

```jsx
// tambah di configStore.js
import namaModules from "../modules/namaModules";

const rootReducer = combineReducers({
  yg_dikirim: namaModules, // <-- ubah di rootreducer
});
const store = createStore(rootReducer);
```

#

# Module

```jsx
// Action
// Bisa dikopas kalau ada beberapa action
const NAMA_ACTION = "NAMA_ACTION";

// Action Creator
// Bisa dikopas kalau ada beberapa action
export const namaAction = (payload) => {
  return { type: NAMA_ACTION, payload };
};

// State awal
// Pakai salah satu aja
const stateAwalBiasa = 0;
const stateAwalArray = [0];
const stateAwalObjek = {
  state_id: 0,
  name: "Ayam Goreng",
};

// Reducer
// Semacam fungsi gitu deh
const namaFungsi = (state = stateAwal, action) => {
  switch (action.type) {
    case NAMA_ACTION:
      // disini isi logikanya
      return {
        // return hasilnya
        ...state,
        objek_di_array: informasi_baru,
      };

    default:
      return state;
  }
};

// Jangan lupa export fungsinya
export default namaFungsi;
```

#

# Selector & Dispatch

Selector ngambil state dari store, dispatch buat ngirim state ke store.

```jsx
//Jgn lupa impor
import { useDispatch, useSelector } from "react-redux";
import { namaModule } from "../redux/modules/namaFileModule";

// Contoh selector
const nama_selector = useSelector(
  (state) => state.namaSlices.objectDiDalamState
);

// Contoh Dispatch
const dispatch = useDispatch();

// Dispatch biasanya dijalankan dengan useEffect atau onChange atau onClick
function onClickHandler(id) {
  dispatch(
    namaAction({
      // informasi yang dikirim
      id,
      ayam: "ayam",
    })
  );
}
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

bisa pakai router di react, router itu semacam fitur untuk membuat SPA menjadi seperti multipage berdasarkan url. Mempermudah navigasi pengguna juga.

# Persiapan

1. Install dulu

```jsx
yarn add react-router-dom
```

2. bikin folder "shared" di src dan tambahkan file "Router.js"

```jsx
import React from "react";
// Selain BrowserRouter bisa juga pakai HashRouter
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Tambahkan pages lainnya sesuai kebutuhan
import NamaPages from "../pages/NamaPages";
import NamaPages2 from "../pages/NamaPages2";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NamaPages />} />
        <Route path="apaaja" element={<NamaPages2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
```

3. Ganti "App.js"

```jsx
import React from "react";
import Router from "./shared/Router";

function App() {
  return <Router />;
}

export default App;
```

#

Hooks khusus React-router-dom

1. useNavigate

```jsx
import { useNavigate } from "react-router-dom";

const Ayam = () => {
  // Declare useNavigate
  const navigate = useNavigate();

  return (
    // Bisa pindah2 halaman dgn useNavigate
    <button
      onClick={() => {
        navigate("/Goreng");
      }}
    >
      Move to Goreng
    </button>
  );
};

export default Ayam;
```

2. useParam

```jsx
// Di shared/Router.js url bisa memberikan parameter
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*Parameter id akan digunakan sebagai parameter*/}
        <Route path="/:id" element={<Goreng />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
```

```jsx
// Di halaman Goreng parameter dapat digunakan
import { useParams } from "react-router-dom";

const Goreng = () => {
  // useParams berguna untuk mengambil data parameter dari url
  const param = useParams();
  console.log(param);
  return <div>Goreng</div>;
};

export default Goreng;
```

3. useLocation

```jsx
import { useLocation } from "react-router-dom";

const Ayam = () => {
  // Declare useLocation
  const location = useLocation();
  // bisa Mencari tahu lokasi saat ini
  console.log("location :>> ", location);
  return (
    <div>
      <p>Ayam</p>
    </div>
  );
};

export default Ayam;
```

4. Links

```jsx
import { Link } from "react-router-dom";

const Ayam = () => {
  // Mirip dengan useNavigate untuk berpindah halaman. Tetapi ini digunakan untuk mengantikan <a> karena hyperlink akan me-refresh halaman dan tidak diinginkan di aplikasi SPA.
  return <Link to="/Goreng">Goreng</Link>;
};

export default App;
```

#

```html
<!--
 /$$$$$$$                  /$$                           /$$$$$$$$                  /$$ /$$       /$$   /$$    
| $$__  $$                | $$                          |__  $$__/                 | $$| $$      |__/  | $$    
| $$  \ $$  /$$$$$$   /$$$$$$$ /$$   /$$ /$$   /$$         | $$  /$$$$$$   /$$$$$$ | $$| $$   /$$ /$$ /$$$$$$  
| $$$$$$$/ /$$__  $$ /$$__  $$| $$  | $$|  $$ /$$/         | $$ /$$__  $$ /$$__  $$| $$| $$  /$$/| $$|_  $$_/  
| $$__  $$| $$$$$$$$| $$  | $$| $$  | $$ \  $$$$/          | $$| $$  \ $$| $$  \ $$| $$| $$$$$$/ | $$  | $$    
| $$  \ $$| $$_____/| $$  | $$| $$  | $$  >$$  $$          | $$| $$  | $$| $$  | $$| $$| $$_  $$ | $$  | $$ /$$
| $$  | $$|  $$$$$$$|  $$$$$$$|  $$$$$$/ /$$/\  $$         | $$|  $$$$$$/|  $$$$$$/| $$| $$ \  $$| $$  |  $$$$/
|__/  |__/ \_______/ \_______/ \______/ |__/  \__/         |__/ \______/  \______/ |__/|__/  \__/|__/   \___/  
-->
```

# Redux Toolkit

Merombak Store, module dan dapat menggunakan Redux Development Toolkit.
Development Toolkit akan sangat membantu dalam proses pengembangan, dapat melihat nilai state yang ada saat pengujian.

# Persiapan

1. install dulu

```jsx
yarn add react-redux @reduxjs/toolkit
```

2. conFigStore dan Modules(module akan disebut Slices) akan berubah. Jadi nggak pakai action, action creater.

Yang berubah di Modules. nama File akan diakhiri Slices biasanya.

```jsx
import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  comments: [
    {
      card_id: "1",
      comment_id: "1",
      name: "userX01",
      comment: "Hahahaha!!!!",
    },
  ],
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addcomment: (state, action) => {
      return {
        ...state,
        comments: [
          ...state.comments,
          {
            card_id: action.payload.card_id,
            comment_id: action.payload.comment_id,
            name: action.payload.name,
            comment: action.payload.comment,
          },
        ],
      };
    },
  },
});

export const { addcomment } = commentsSlice.actions;
export default commentsSlice.reducer;
```

Perubahan di configStore.js

```jsx
import { configureStore } from "@reduxjs/toolkit";
import cardsSlices from "../modules/cardsSlices";
import commentsSlices from "../modules/commentsSlices";

const store = configureStore({
  reducer: { cards: cardsSlices.reducer, comments: commentsSlices },
});

export default store;
```

3. Install Extension atau Plug-in Redux Dev Tools, inspect element, cari Components, Profiler, dll.

4. Selesai deh

#

```html
<!--
                                                /$$$$$$                                                   
                                               /$$__  $$                                                  
       /$$  /$$$$$$$  /$$$$$$  /$$$$$$$       | $$  \__/  /$$$$$$   /$$$$$$  /$$    /$$ /$$$$$$   /$$$$$$ 
      |__/ /$$_____/ /$$__  $$| $$__  $$      |  $$$$$$  /$$__  $$ /$$__  $$|  $$  /$$//$$__  $$ /$$__  $$
       /$$|  $$$$$$ | $$  \ $$| $$  \ $$       \____  $$| $$$$$$$$| $$  \__/ \  $$/$$/| $$$$$$$$| $$  \__/
      | $$ \____  $$| $$  | $$| $$  | $$       /$$  \ $$| $$_____/| $$        \  $$$/ | $$_____/| $$      
      | $$ /$$$$$$$/|  $$$$$$/| $$  | $$      |  $$$$$$/|  $$$$$$$| $$         \  $/  |  $$$$$$$| $$      
      | $$|_______/  \______/ |__/  |__/       \______/  \_______/|__/          \_/    \_______/|__/      
 /$$  | $$                                                                                                
|  $$$$$$/                                                                                                
 \______/  
-->
```

# Json Server

Membuat API sementara dan berguna untuk uji coba komunikasi menyambungkan front-end dengan back-end.

# Persiapan

1. Bikin di folder terpisah, nanti di deploy terpisah juga

2. Install dulu

```
yarn add json-server
```

3. Jalankan servernya

```
yarn json-server --watch db.json --port 3001
```

4. Folder db.json akan muncul dan bisa ditambahkan json di dalamnya.

```
{
  "ayam": [
    {
      "id": 1,
      "title": "ayam goreng",
    }
  ]
}
```

5. Kemudian di deploy... karena heroku ud nggak gratis, ditampung dulu...

#

```html
<!--
  /$$$$$$            /$$                    
 /$$__  $$          |__/                    
| $$  \ $$ /$$   /$$ /$$  /$$$$$$   /$$$$$$$
| $$$$$$$$|  $$ /$$/| $$ /$$__  $$ /$$_____/
| $$__  $$ \  $$$$/ | $$| $$  \ $$|  $$$$$$ 
| $$  | $$  >$$  $$ | $$| $$  | $$ \____  $$
| $$  | $$ /$$/\  $$| $$|  $$$$$$/ /$$$$$$$/
|__/  |__/|__/  \__/|__/ \______/ |_______/ 
-->
```

# Axios

untuk berkomunikasi dengan protokol https dengan server. Dalam keberjalanannya Axios biasanya digabung dengan middleware misalnya thunk.

Install dulu

```jsx
yarn add axios
```

# Cara Pakai

1. GET

```jsx
// src/App.js

import React, { useEffect, useState } from "react";
import axios from "axios";

const GetAyam = () => {
  const [ayam, setAyam] = useState(null);

  const fetchAyam = async () => {
    // Ngambil data dari jsonserver, lalu disimpan dalam state ayam
    const { data } = await axios.get("http://localhost:3001/ayam");
    setAyam(data);
  };

  useEffect(() => {
    fetchAyam();
  }, []);

  return <div>Apa aja</div>;
};

export default GetAyam;
```

2. POST

```jsx
// src/App.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";

const PostAyam = () => {
  // state sementara untuk menampung data inputan
  const [ayambaru, setAyamBaru] = useState({
    title: "",
  });

  // ini data yang ada di json server
  const [ayam, setAyam] = useState(null);

  const fetchAyam = async () => {
    const { data } = await axios.get("http://localhost:3001/ayam");
    setAyam(data);
  };

  const onSubmitHandler = (ayambaru) => {
    axios.post("http://localhost:3001/ayam", ayambaru);
  };

  useEffect(() => {
    fetchAyam();
  }, []);

  return (
    <>
      {/*Form untuk mengirim informasi terbaru*/}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandler(ayambaru);
        }}
      >
        <input
          type="text"
          onChange={(ev) => {
            const { value } = ev.target;
            setAyamBaru({
              ...ayambaru,
              title: value,
            });
          }}
        />
        <button>Add</button>
      </form>
      {/*ini menampilkan apa yang ada dari json server*/}
      <div>
        {ayam.map((isi_ayam) => (
          <div key={isi_ayam.id}>{isi_ayam.title}</div>
        ))}
      </div>
    </>
  );
};

export default PostAyam;
```

3. DELETE

```jsx
// Tambahkan baris kode ini seperti diatas
const onClickDeleteButtonHandler = (ayamId) => {
  axios.delete(`http://localhost:3001/ayam/${ayamId}`);
};
```

4. PATCH

```jsx
// Tambajkan baris kode ini seperti datas
// edit berisi informasi yang diubah, dalam kasus ini yang diubah adalah title.
const onClickEditButtonHandler = (ayamId, edit) => {
  axios.patch(`http://localhost:3001/ayam/${ayamId}`, edit);
};
```

#

```html
<!--
 /$$$$$$$$ /$$                           /$$      
|__  $$__/| $$                          | $$      
   | $$   | $$$$$$$  /$$   /$$ /$$$$$$$ | $$   /$$
   | $$   | $$__  $$| $$  | $$| $$__  $$| $$  /$$/
   | $$   | $$  \ $$| $$  | $$| $$  \ $$| $$$$$$/ 
   | $$   | $$  | $$| $$  | $$| $$  | $$| $$_  $$ 
   | $$   | $$  | $$|  $$$$$$/| $$  | $$| $$ \  $$
   |__/   |__/  |__/ \______/ |__/  |__/|__/  \__/
-->
```

Middleware di Redux. Ditambahkan di Slices

```jsx
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// tambahkan bagian ini, disini contohnya akan ada timeout(jeda) 3 detik
export const __namaModule = createAsyncThunk(
  "namaModule",
  (payload, thunkAPI) => {
    setTimeout(() => {
      thunkAPI.dispatch(namaModule(payload));
    }, 3000);
  }
);

const initialState = {};

const namaSlice = createSlice({
  name: "nama",
  initialState,
  reducers: {
    namaModule: (state, action) => {
      //Logika di module
    },
  },
});

export const { namaModule } = namaSlice.actions;
export default namaSlice.reducer;
```

Yg di-dispatch jadi beda

```jsx
import { useDispatch } from "react-redux";
import { __namaModule } from "./redux/modules/namaSlice";

const Ayam = () => {
  const dispatch = useDispatch();

  // Sesuai dengan yang ada di thunk, akan dikirim number sebagai payload.
  const onClickHandler = () => {
    dispatch(__namaModule(number));
  };

  return <div>Ayam Goreng</div>;
};

export default Ayam;
```

#

Gabungan Thunk dan Axios. Dalam keberjalanannya komunikasi antar front-end dengan server tidak berjalan mulus. Akan ada proses loading, dan mungkin saja komunikasi error. Sehingga umumnya digunakan try-catch untuk menanggulangi error.

```jsx
// ini di Slices
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  ayam: [],
  isLoading: false,
  error: null,
};

export const __getAyam = createAsyncThunk(
  "ayam/getAyam",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/ayam");
      // console.log(data);
      // fulfillWithValue berjalan ketika request berjalan lancar.
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      // console.log(error);
      // rejectWithValue berjalan ketika request ditolak.
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const ayamSlice = createSlice({
  name: "ayam",
  initialState,
  reducers: {},
  extraReducers: {
    [__getAyam.pending]: (state) => {
      state.isLoading = true; // Keadaan sedang loading
    },
    [__getAyam.fulfilled]: (state, action) => {
      state.isLoading = false; // Ketika berhasil, loading bernilai false
      state.Ayam = action.payload; // nilai dari payload dijadikan state di Store
    },
    [__getAyam.rejected]: (state, action) => {
      state.isLoading = false; // Ketika gagal, loading bernilai false
      state.error = action.payload; // nilai dari payload dijadikan nilai gagal di Store.
    },
  },
});

export const {} = ayamSlice.actions;
export default ayamSlice.reducer;
```

Dipanggil di components

```jsx
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { __getAyam } from "./redux/modules/ayamSlice";

const AyamGoreng = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getAyam());
  }, [dispatch]);

  // Diberikan kondisi, kalau loading akan menampilkan Tulisan dibawah
  if (isLoading) {
    return <div>Loading....</div>;
  }

  // Kalau gagal akan menampilkan pesan gagal.
  if (error) {
    return <div>{error.message}</div>;
  }

  // Kalau tidak loading dan tidak gagal (berarti berhasil)
  return <div>Berhasil</div>;
};

export default AyamGoreng;
```

#

# Optimizing

ntaran deh

# Custom Hooks

ntaran

# Deploy ke Vercel
