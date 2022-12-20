```html
<!--
 /$$$$$$$$                                                               /$$$$$  /$$$$$$ 
| $$_____/                                                              |__  $$ /$$__  $$
| $$       /$$   /$$  /$$$$$$   /$$$$$$   /$$$$$$   /$$$$$$$ /$$$$$$$      | $$| $$  \__/
| $$$$$   |  $$ /$$/ /$$__  $$ /$$__  $$ /$$__  $$ /$$_____//$$_____/      | $$|  $$$$$$ 
| $$__/    \  $$$$/ | $$  \ $$| $$  \__/| $$$$$$$$|  $$$$$$|  $$$$$$  /$$  | $$ \____  $$
| $$        >$$  $$ | $$  | $$| $$      | $$_____/ \____  $$\____  $$| $$  | $$ /$$  \ $$
| $$$$$$$$ /$$/\  $$| $$$$$$$/| $$      |  $$$$$$$ /$$$$$$$//$$$$$$$/|  $$$$$$/|  $$$$$$/
|________/|__/  \__/| $$____/ |__/       \_______/|_______/|_______/  \______/  \______/ 
                    | $$                                                                 
                    | $$                                                                 
                    |__/  
-->
```

# ExpressJS

mini library untuk mengaplikasikan http request. Bisa menyambungkan aplikasi dengan database.

# Persiapan

1. Install dulu librarynya

```bash
npm init -y
npm install express
```

2. Untuk menjalankan server

```bash
node app.js
```

3. Tambahkan Folder Routes untuk menyimpan router.

4. Edit2 di app.js

```jsx
const express = require("express");
const app = express();
const port = 3000; // Bisa diganti ke port lain sesuai kebutuhan.
// const router = require("./routes/"); // Ini import router dari tempat lain

// API untuk mengetes server
app.get("/", (req, res) => {
  res.send("Testing ayam goreng");
});

// app.use("/api", express.json(), router);

// pesan log nya bisa diganti, kadang ditambahain nomor port pakai backtick ` dan pakai ${port}
app.listen(port, () => {
  console.log(port, "Server is open with port!");
});
```

5. Untuk mengetes API bisa menggunakan browser atau pakai ThunderClient (API Client)

6. Kemudian tambahkan router sesuai kebutuhan

```jsx
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("pesan bebas diisi apa aja");
});

router.get("/goreng", (req, res) => {
  res.send("Berhasil nyambung ke goreng");
});

// Bisa pakai dynamic url
router.get("/goreng/:parameter", (req, res) => {
  res.send("Berhasil nyambung ke goreng");
});

module.exports = router;
```

7. Jangan lupa sambungin Folder Routes ke App.js

```jsx
// Tambahin ini di app.js
// Tambahin ini di atas
const namaRouter = require("./routes/namaRouter");

// ini setelah app di deklarasi
app.use("/api", [namaRouter]);
```

#

```html
<!--
 /$$$$$$$                        /$$                        
| $$__  $$                      | $$                        
| $$  \ $$  /$$$$$$  /$$   /$$ /$$$$$$    /$$$$$$   /$$$$$$$
| $$$$$$$/ /$$__  $$| $$  | $$|_  $$_/   /$$__  $$ /$$_____/
| $$__  $$| $$  \ $$| $$  | $$  | $$    | $$$$$$$$|  $$$$$$ 
| $$  \ $$| $$  | $$| $$  | $$  | $$ /$$| $$_____/ \____  $$
| $$  | $$|  $$$$$$/|  $$$$$$/  |  $$$$/|  $$$$$$$ /$$$$$$$/
|__/  |__/ \______/  \______/    \___/   \_______/|_______/ 
-->
```

# Routes

# Import beberapa routes sekaligus dengan index.js

1. Siapkan beberapa router di folder routes
2. Tambahkan file index.js di folder routes. Isinya seperti dibawah.

```jsx
const router1 = require("./router1");
const router2 = require("./router2");

module.exports = [router1, router2];
```

3. Di file app.js tambahkan baris kode ini, atau edit jika sudah ada yang mirip.

```jsx
// ini akan mengarahkan ke folder routes. Kalau misalnya kosong, secara default akan mengakses file index.js
const router = require("./routes");

// tambahkan ini dibawah.
app.use("/api", express.json(), router);
```

4. Cara diatas bisa digunakan untuk meng-export module atau fungsi juga.

```html
<!--
 /$$$$$$$                             /$$$           /$$$$$$$                     
| $$__  $$                           /$$ $$         | $$__  $$                    
| $$  \ $$  /$$$$$$   /$$$$$$       |  $$$          | $$  \ $$  /$$$$$$   /$$$$$$$
| $$$$$$$/ /$$__  $$ /$$__  $$       /$$ $$/$$      | $$$$$$$/ /$$__  $$ /$$_____/
| $$__  $$| $$$$$$$$| $$  \ $$      | $$  $$_/      | $$__  $$| $$$$$$$$|  $$$$$$ 
| $$  \ $$| $$_____/| $$  | $$      | $$\  $$       | $$  \ $$| $$_____/ \____  $$
| $$  | $$|  $$$$$$$|  $$$$$$$      |  $$$$/$$      | $$  | $$|  $$$$$$$ /$$$$$$$/
|__/  |__/ \_______/ \____  $$       \____/\_/      |__/  |__/ \_______/|_______/ 
                          | $$                                                    
                          | $$                                                    
                          |__/   
-->
```

# Request dan Response

```jsx
// Ini potongan kode aja...

router.get("/contohreqres/:params", (req, res) => {
  // ada beberapa req yang bisa digunakan
  // ini ambil dari body
  const { contohReqBody } = req.body;
  // ambil dari url/path
  const { contohReqParams } = req.params;

  console.log(contohReqBody);
  console.log(contohReqParams);

  res.send("hanya memberikan satu string");
  res.json({
    message: "mengembalikan json",
  });
  // Mengembalikkan pesan status
  res.status(200);
  // Untuk lebih banyak info soal angkanya
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

  // Bisa digabung
  return res.status(400).json({
    pesan: "pesan",
  });
});
```

```html
<!--
 /$$      /$$                                                                      
| $$$    /$$$                                                                      
| $$$$  /$$$$  /$$$$$$  /$$$$$$$   /$$$$$$   /$$$$$$   /$$$$$$   /$$$$$$$  /$$$$$$ 
| $$ $$/$$ $$ /$$__  $$| $$__  $$ /$$__  $$ /$$__  $$ /$$__  $$ /$$_____/ /$$__  $$
| $$  $$$| $$| $$  \ $$| $$  \ $$| $$  \ $$| $$  \ $$| $$  \ $$|  $$$$$$ | $$$$$$$$
| $$\  $ | $$| $$  | $$| $$  | $$| $$  | $$| $$  | $$| $$  | $$ \____  $$| $$_____/
| $$ \/  | $$|  $$$$$$/| $$  | $$|  $$$$$$$|  $$$$$$/|  $$$$$$/ /$$$$$$$/|  $$$$$$$
|__/     |__/ \______/ |__/  |__/ \____  $$ \______/  \______/ |_______/  \_______/
                                  /$$  \ $$                                        
                                 |  $$$$$$/                                        
                                  \______/    
-->
```

# Mongoose

Menyambungkan API dengan database nonSQL MongoDB. Ada versi gratis berupa MongoDB Atlas.

Persiapan

1. Install MongoDB. silahkan cari videonya sendiri
2. Jalankan MongoDB nya, kadang perlu nambahan environment variables biar bisa dibuka lewat command prompt.
3. Kemudian bisa download Studio3T atau MongoDB Client lainnya. Ini berguna untuk membuat database lokal. Kalau misalnya nggak mau, bisa juga pakai cloud dengan MongoDB Atlas.
4. install mongoose

```bash
npm install mongoose
```

5. Mongoose menggunakan 2 folder, routes dan schemas. Routes berisi router. Schemas berisi document (semacam tabel tapi dalam bentuk json)

6. Schemas bisa menambahkan index.js dan isinya sebagai berikut

```jsx
const mongoose = require("mongoose");

const connect = () => {
  mongoose
    // Kalau mau sambungin ke cloud/MongoDB Atlas
    .connect(
      "mongodb+srv://ayam:ayam@cluster0.chzg4j4.mongodb.net/week6pt?retryWrites=true&w=majority"
    )
    // Kalau mau sambungin ke local mongoDB.
    // .connect('mongodb://localhost:27017/week6pt')
    .catch((err) => console.log(err));
};

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error", err);
});

module.exports = connect;
```

7. tambahkan baris kode ini di app.js

```jsx
// Mengimpor module, modulenya berada di folder schemas yang secara default mengakses file index.js
const connect = require("./schemas");

// menjalankan module/fungsi
connect();
```

9. Membuat model

```jsx
const mongoose = require("mongoose");

const namaSchema = new mongoose.Schema({
  ayamId: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Ayam", namaSchema);
```

10. Kemudian bikin routes sesuai kebutuhan.

```html
<!--
  /$$$$$$  /$$$$$$$  /$$   /$$ /$$$$$$$        /$$      /$$
 /$$__  $$| $$__  $$| $$  | $$| $$__  $$      | $$$    /$$$
| $$  \__/| $$  \ $$| $$  | $$| $$  \ $$      | $$$$  /$$$$
| $$      | $$$$$$$/| $$  | $$| $$  | $$      | $$ $$/$$ $$
| $$      | $$__  $$| $$  | $$| $$  | $$      | $$  $$$| $$
| $$    $$| $$  \ $$| $$  | $$| $$  | $$      | $$\  $ | $$
|  $$$$$$/| $$  | $$|  $$$$$$/| $$$$$$$/      | $$ \/  | $$
 \______/ |__/  |__/ \______/ |_______/       |__/     |__/
-->
```

# CRUD mongoose

```jsx
const express = require("express");
const router = express.Router();

// Import Schemas
const DokAyam = require("../schemas/Ayam");

router.get("/test", (req, res) => {
  res.send("ini sekedar buat ngetest kalau sudah tersambung");
});

router
  .route("/")
  // Create, pakai POST
  .post(contohMiddleware, async (req, res) => {
  // Ngambil informasi dari body
  const { ayamId, name } = req.body;

  // Memastikan nggak ada id yang sama di document DokAyam.
  const isiDokAyam = await DokAyam.find({ ayamId });
  if (isiDokAyam.length) {
    return res
      .status(400)
      .json({ success: false, errorMessage: "Ayam sudah ada" });
  }

  const createAyam = await DokAyam.create({
    ayamId,
    name,
  });

  res.json({
    message: "data ayam berhasil ditambahkan"
    data_baru: createAyam });

  });

  // READ, pakai GET
  .get(contohMiddleware, async (req, res) => {
  const semuaDokAyam = await DokAyam.find();

  const results = semuaDokAyam.map((isi_ayam) => {
		return {
      idbawaan: isi_ayam._id,
      ayamId: isi_ayam.ayamId,
      name: isi_ayam.name
    };
  });

  // Sortir/mengurutkan data
  const results_sorted = results.sort((a,b)=>{
    return b.ayamId - a.ayamId
  });

  res.json({
    data: results_sorted,
  });
  });

  // Mengambil informasi spesifik
  .route("/:ayamId")
  .get(contohMiddleware, async (req, res) => {
  // Mengambil id dari parameter
  const { ayamId } = req.params;
  const ayam_spesifik = await DokAyam.find({ayamId});

  const results = {
      ayamId,
      name: ayam_spesifik[0].name
  };

  res.json({
    data: results,
  });
  });

  // Update, pakai PUT, bisa juga pakia PATCH
  .put(contohMiddleware, async (req, res) => {
  const { ayamId } = req.params;
  const { name } = req.body;
  const ayam_spesifik = await DokAyam.find({ayamId: ayamId});

  await Posts.updateOne({ ayamId: ayamId }, { $set: { name } });
  res.json({
    message: "informasi berhasil diubah",
  });
  });

  .delete(contohMiddleware, async (req, res) => {
  const { ayamId } = req.params;
  const ayam_spesifik = await DokAyam.find({ayamId: ayamId});

  await Posts.deleteOne({ ayamId: ayamId });
  res.json({
    message: "informasi berhasil dihapus",
  });
  });


module.exports = router;
```
