from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient
from bs4 import BeautifulSoup
import requests


#  /$$$$$$$              /$$     /$$
# | $$__  $$            | $$    | $$
# | $$  \ $$ /$$   /$$ /$$$$$$  | $$$$$$$   /$$$$$$  /$$$$$$$
# | $$$$$$$/| $$  | $$|_  $$_/  | $$__  $$ /$$__  $$| $$__  $$
# | $$____/ | $$  | $$  | $$    | $$  \ $$| $$  \ $$| $$  \ $$
# | $$      | $$  | $$  | $$ /$$| $$  | $$| $$  | $$| $$  | $$
# | $$      |  $$$$$$$  |  $$$$/| $$  | $$|  $$$$$$/| $$  | $$
# |__/       \____  $$   \___/  |__/  |__/ \______/ |__/  |__/
#            /$$  | $$
#           |  $$$$$$/
#            \______/
# Setiap kode akan dijalankan dari atas kebawah

# Membuat variabel
a = 3  # mendefinisikan variabel a
b = a  # mendefinisikan variabel b
a = a + 1  # variabel bisa diganti lagi.
num1 = a*b  # variabel mengambil nilai dari variabel lain.

# Tipe Data
name = 'ayam'  # ini string
num = 12  # ini integer
is_number = True  # True atau False -> "Boolean" can also be entered.
a_list = []  # List, sama aja kyk array di JS.
a_list.append(1)  # memasukkan data
# Ini masukkin list ke dalam list, bukan sekaligus masukin 2 data.
a_list.append([2, 3])

# nilai listnya [1,[2,3]]. Hati2 bukan 1,2,3
# nilai dari a_list[0]? 1
# nilai dari a_list[1]? [2,3]
# nilai dari a_list[1][0]? 2

# Dictionary, sama kyk objek di JS.
a_dict = {}  # bikin dict kosong
a_dict = {'name': 'bob', 'age': 21}  # mengisi dict
a_dict['height'] = 178  # ini masukin nilai bbaru

# nilai dari a_dict? {'name':'bob','age':21,'height':178}
# nilai dari a_dict['name']? 'bob'
# nilai dari a_dict['age']? 21
# nilai dari a_dict['height']? 178

# list dan dictionary bisa digabung.
people = [{'name': 'bob', 'age': 20}, {'name': 'carry', 'age': 38}]
# nilai dari people[0]['name']? 'bob'
# nilai dari people[1]['name']? 'carry'

person = {'name': 'john', 'age': 7}
people.append(person)

# apa isi dari people? [{'name':'bob','age':20},{'name':'carry','age':38},{'name':'john','age':7}]
# nilai dari people[2]['name']? 'john'

# Replace , berguna untuk menghilangkan sesuatu dari string.
ayam = '(ayam)'
ayam = ayam.replace('(', '')
ayam = ayam.replace(')', '')
# hasilnya hanya ayam nggak ada ( dan )

# Strip, untuk menghilangkan spasi di bagian kiri atau kanan sebuah string (yang didalam tetap aman)
ayam = '                  ayam goreng'
ayam = ayam.strip()
# hasilnya cuma 'ayam goreng' nggak ada spasi di bagian kiri.
ayam = ayam.string('goreng')
# hasilnya jadi 'ayam '

###################################################
# Fungsi


def sum(a, b, c):
    return a+b+c


def mul(a, b):
    return a*b


result = sum(1, 2, 3) + mul(10, 10)
# Apa value dari result? 106

####################################################
# Fungsi IF
# Definisikan sebuah fungsi bernama oddeven. Fungsi ini akan menggunakan num sebagai variabel.


def oddeven(num):
    if num % 2 == 0:  # Apabila sisa dari num dibagi 2 sama dengan 0
        return True   # Returns True.
    else:            # else,
        return False  # # Returns False.


result = oddeven(20)
# Apa value dari result? True

# FOR Loop
fruits = ['apple', 'pear', 'banana', 'tangerine']

for fruit in fruits:
    print(fruit)
# Fungsi ini akan mengeluarkan apple, pear, banana, dan tangerine satu per satu lalu diprint.

###################################################
# List/array bisa gabungin FOR dan IF
fruits = ['Apple', 'Pear', 'Pear', 'Banana', 'Watermelon',
          'Tangerine', 'Strawberry', 'Apple', 'Pear', 'Watermelon']

fruits = ['Apple', 'Pear', 'Pear', 'Banana', 'Watermelon',
          'Tangerine', 'Strawberry', 'Apple', 'Pear', 'Watermelon']

count = 0
for fruit in fruits:
    if fruit == 'Apple':
        count += 1

print(count)
# Menghitung dan memperlihatkan jumlah dari apelnya. 2

###################################################
# Fungsi dengan FOR dan IF didalamnya.


def count_fruits(target):
    count = 0
    for fruit in fruits:
        if fruit == target:
            count += 1
    return count


watermelon_count = count_fruits('Watermelon')
print(watermelon_count)  # 2

pear_count = count_fruits('Pear')
print(pear_count)  # 3

####################################################
# Dictionary/objek dengan FOR dan IF
people = [{'name': 'bob', 'age': 20},
          {'name': 'carry', 'age': 38},
          {'name': 'john', 'age': 7},
          {'name': 'smith', 'age': 17},
          {'name': 'ben', 'age': 27}]

people = [{'name': 'bob', 'age': 20},
          {'name': 'carry', 'age': 38},
          {'name': 'john', 'age': 7},
          {'name': 'smith', 'age': 17},
          {'name': 'ben', 'age': 27}]


def get_age(myname):
    for person in people:
        if person['name'] == myname:
            return person['age']
    return 'No such name exists'


print(get_age('bob'))  # 20
print(get_age('kay'))  # Nama tersebut tidak ada.

####################################################
# Memanggil informasi dari array yang berisi dictionary
people = [
    {'name': 'bob', 'age': 20, 'score': {'math': 90, 'science': 70}},
    {'name': 'carry', 'age': 38, 'score': {'math': 40, 'science': 72}},
    {'name': 'smith', 'age': 28, 'score': {'math': 80, 'science': 90}},
    {'name': 'john', 'age': 34, 'score': {'math': 75, 'science': 100}}
]
people = [
    {'name': 'bob', 'age': 20, 'score': {'math': 90, 'science': 70}},
    {'name': 'carry', 'age': 38, 'score': {'math': 40, 'science': 72}},
    {'name': 'smith', 'age': 28, 'score': {'math': 80, 'science': 90}},
    {'name': 'john', 'age': 34, 'score': {'math': 75, 'science': 100}}
]
# Mencari nilai sains dari Smith
print(people[2]['score']['science'])
#####################################################

#  /$$    /$$
# | $$   | $$
# | $$   | $$ /$$$$$$  /$$$$$$$  /$$    /$$
# |  $$ / $$//$$__  $$| $$__  $$|  $$  /$$/
#  \  $$ $$/| $$$$$$$$| $$  \ $$ \  $$/$$/
#   \  $$$/ | $$_____/| $$  | $$  \  $$$/
#    \  $/  |  $$$$$$$| $$  | $$   \  $/
#     \_/    \_______/|__/  |__/    \_/
# Lebih baik ikutin videonya

# tutup semua terminal
# pastikan berada di folder yang sesuai
# kopas kodingan ke settings.json. Kasih koma kalau ada isinya diatasnya
####################################################
# "terminal.integrated.profiles.windows": {
#         "PowerShell": {
#             "source": "PowerShell",
#             "icon": "terminal-powershell",
#             "args": [
#                 "-ExecutionPolicy",
#                 "Bypass"
#             ]
#         }
#     },
#     "terminal.integrated.defaultProfile.windows": "PowerShell"
####################################################
# install venv, copy ini >>>  python -m venv venv
####################################################
# jalankan vitual env >>>  .\venv\Scripts\activate
####################################################
# instal library requests >>> pip install requests
####################################################
#     /$$$$$  /$$$$$$   /$$$$$$  /$$   /$$
#    |__  $$ /$$__  $$ /$$__  $$| $$$ | $$
#       | $$| $$  \__/| $$  \ $$| $$$$| $$
#       | $$|  $$$$$$ | $$  | $$| $$ $$ $$
#  /$$  | $$ \____  $$| $$  | $$| $$  $$$$
# | $$  | $$ /$$  \ $$| $$  | $$| $$\  $$$
# |  $$$$$$/|  $$$$$$/|  $$$$$$/| $$ \  $$
#  \______/  \______/  \______/ |__/  \__/
# Library requests

# Install dulu requests
# ###########################################
# pastikan venv aktif
# ketik pip install requests
##########################################
# mengambil data json, seperti ajax, tapi di python
# data yang diambil berupa string panjang
"""
import requests  <<<<<<<< JANGAN LUPA DIIMPORT
"""  # Membutuhkan instalasi requests library
r = requests.get('http://spartacodingclub.shop/en/global_air/seoul')
rjson = r.json()  # mengubah data menjadi dictionary

days = rjson['data']['forecast']  # mengambil data dari dictionary

for day in days:
    if day['avg'] < 60:
        print(day['day'], day['avg'])
######################################################
#  /$$      /$$           /$$                                                                  /$$
# | $$  /$ | $$          | $$                                                                 |__/
# | $$ /$$$| $$  /$$$$$$ | $$$$$$$   /$$$$$$$  /$$$$$$$  /$$$$$$  /$$$$$$   /$$$$$$   /$$$$$$  /$$ /$$$$$$$   /$$$$$$
# | $$/$$ $$ $$ /$$__  $$| $$__  $$ /$$_____/ /$$_____/ /$$__  $$|____  $$ /$$__  $$ /$$__  $$| $$| $$__  $$ /$$__  $$
# | $$$$_  $$$$| $$$$$$$$| $$  \ $$|  $$$$$$ | $$      | $$  \__/ /$$$$$$$| $$  \ $$| $$  \ $$| $$| $$  \ $$| $$  \ $$
# | $$$/ \  $$$| $$_____/| $$  | $$ \____  $$| $$      | $$      /$$__  $$| $$  | $$| $$  | $$| $$| $$  | $$| $$  | $$
# | $$/   \  $$|  $$$$$$$| $$$$$$$/ /$$$$$$$/|  $$$$$$$| $$     |  $$$$$$$| $$$$$$$/| $$$$$$$/| $$| $$  | $$|  $$$$$$$
# |__/     \__/ \_______/|_______/ |_______/  \_______/|__/      \_______/| $$____/ | $$____/ |__/|__/  |__/ \____  $$
#                                                                         | $$      | $$                     /$$  \ $$
#                                                                         | $$      | $$                    |  $$$$$$/
#                                                                         |__/      |__/                     \______/
# ada banyak library khusus webscrapping, tapi yg dipakai Beautiful Soup 4

# Install dulu beautiful soup 4
# ###########################################
# pastikan venv aktif
# ketik pip install beautifulsoup4
##########################################
"""
import requests
from bs4 import BeautifulSoup

JGN LUPA import
"""

# Webscraping itu proses mengambil data dari situs, kadang ada sistem pengaman yang bisa memblokir permintaan "GET"
# Ada beragam cara untuk menghindari pemblokiran seperti proxy, ganti ip adress, aku juga kurang paham detailnya gmn. Salah satunya dengan mengganti headers.

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
# ini dari requests bukan BS4, ngambil data dalam bentuk string super panjang.
data = requests.get(
    'https://www.ayam.com', headers=headers)

# aku nggak tau jenis datanya apa, tapi seperti kopas semua yang terlihat di konsol
soup = BeautifulSoup(data.text, 'html.parser')

# tentunya baris kode panjang di konsol nggak akan dipakai semua, jadi digunakan select. Biar yang diambil sebagian aja.
# Menggunakan select
movies = soup.select('.lister > table > tbody > tr')

# Looping pada setiap filmnya
for movie in movies:
    # Pertama, mari kita ambil judul dari filmnya
    movie_title = movie.select_one('.titleColumn > a').text
    print(movie_title)

# Cara menggunakan selector (copy selector)
soup.select('tag name')
soup.select('.class name')
soup.select('#ID name')

soup.select('upper tag name> sub tag name> sub tag name')
soup.select('higher tag name.class name> subtag name.class name')

# Cara mencari berdasarkan value tag dan atribut
soup.select('tag name[attribute="value"]')

# Apabila kamu hanya butuh satu
soup.select_one('same as above')

# Bisa juga menggunakan console, mencari baris kode lalu klik kanan dan copy selector, hasilnya seperti dibawah
# #main > div > span > div > div > div.lister > table > tbody > tr:nth-child(1) > td.titleColumn > a


#########################################################
# Contoh Webscraping lainnya
songs = soup.select('.o-chart-results-list-row')
for song in songs:
    rank = song.select_one(
        '.o-chart-results-list__item > .a-font-primary-bold-l').text.strip()
    song_info = song.select_one('.o-chart-results-list__item > h3')
    title = song_info.text.strip()
    # disini pakai parent, gunanya untuk mundur 1 tag di susunan html.
    singer = song_info.parent.select_one('span').text.strip()

# #######################################################
#  /$$$$$$$            /$$      /$$
# | $$__  $$          | $$$    /$$$
# | $$  \ $$ /$$   /$$| $$$$  /$$$$  /$$$$$$  /$$$$$$$   /$$$$$$   /$$$$$$
# | $$$$$$$/| $$  | $$| $$ $$/$$ $$ /$$__  $$| $$__  $$ /$$__  $$ /$$__  $$
# | $$____/ | $$  | $$| $$  $$$| $$| $$  \ $$| $$  \ $$| $$  \ $$| $$  \ $$
# | $$      | $$  | $$| $$\  $ | $$| $$  | $$| $$  | $$| $$  | $$| $$  | $$
# | $$      |  $$$$$$$| $$ \/  | $$|  $$$$$$/| $$  | $$|  $$$$$$$|  $$$$$$/
# |__/       \____  $$|__/     |__/ \______/ |__/  |__/ \____  $$ \______/
#            /$$  | $$                                  /$$  \ $$
#           |  $$$$$$/                                 |  $$$$$$/
#            \______/                                   \______/
# Library python khusus untuk MongoDB

# Install dulu PyMongo dan juga dns python
###########################################
# pastikan venv aktif
# ketik pip install pymongo
# ketik pip install dnspython
##########################################
"""
Jangan lupa import pyMongo
from pymongo import MongoClient
"""
client = MongoClient(
    'mongodb+srv://ayam:ayam@cluster0.chzg4j4.mongodb.net/test')
db = client.dbayam  # Nama database

doc = {
    'name': 'bob',
    'age': 27
}

# Masukkan dictionary doc ke dalam schema/collection users.
db.nama_dokumen.insert_one(doc)


##############################################################
# SYNTAX UMUM
# nggak perlu variabel, bisa langsung menjalankan methodnya. Aku pakai biar kelihatan aja bedanya apa.

# insert_one() , memasukkan data kedalam basis data, yang dimasukkan dokumen dalam bentuk dictionary.
db.nama_dokumen.insert_one(doc)

# find({},{}) ,  mencari beberapa informasi. Dict pertama untuk menyaring, kalau kosong berarti ngambil semua. Dict kedua untuk  pengecualian data yang diambil.
# ada list() yang berguna untuk mengubah data menjadi list
cari_dokumen = list(db.users.find({}, {'_id': False}))

# find_one({}) , mencari satu informasi
cari_satu_dokumen = db.users.find_one({'name': 'bobby'})

# update({},{}) , mencari satu informasi dengan Dict1 dan mengubahnya dengan dict2, dict2 diisi dengan key dan dict3 yang berisi data baru.
memperbarui_dokumen = db.users.update_one(
    {'name': 'bobby'}, {'$set': {'age': 19}})

# delet({}) , mencari informasi dengan dict1 dan kemudian dihapus.
hapus_dokumen = db.users.delete_one({'name': 'bobby'})

##############################################################
#  /$$$$$$$$ /$$                     /$$
# | $$_____/| $$                    | $$
# | $$      | $$  /$$$$$$   /$$$$$$$| $$   /$$
# | $$$$$   | $$ |____  $$ /$$_____/| $$  /$$/
# | $$__/   | $$  /$$$$$$$|  $$$$$$ | $$$$$$/
# | $$      | $$ /$$__  $$ \____  $$| $$_  $$
# | $$      | $$|  $$$$$$$ /$$$$$$$/| $$ \  $$
# |__/      |__/ \_______/|_______/ |__/  \__/
# library python yang bisa membuat server.

# Install dulu Flask
# ###########################################
# pastikan venv aktif
# ketik pip install flask
#############################################
"""
jgn lupa import flasknya
from flask import Flask, render_template, request, jsonify
"""
# nggak paham setiap baris kode buat apa.
app = Flask(__name__)


# Routing, mengatur jalur akses pengguna melalui url.
@app.route('/')
def home():
    return 'This is Home!'  # disini harusnya mengakses file lain


@app.route('/mypage')
def mypage():
    return 'This is My Page!'


if __name__ == '__main__':
    # ketika routing sudah pas, server dijalankan dengan alamat dan port tertentu. debug untuk kondisi development. Nanti bisa dihilangin untuk mode produksi/dipasarkan.
    app.run('0.0.0.0', port=5000, debug=True)

# Methods GET
@app.route('/test', methods=['GET'])
def test_get():
    title_receive = request.args.get('title_give')
    print(title_receive)
    return jsonify({
        'result':'success', 
        'msg': 'GET this request!'
    })

# Methods POST
@app.route('/test', methods=['POST'])
def test_post():
    title_receive = request.form['title_give']
    print(title_receive)
    return jsonify({
        'result':'success', 
        'msg': 'This request is POST!'
    })

#########################################################
#Contoh di SERVER (app.py)
@app.route('/')
def home():
    return render_template('index.html')

@app.route("/movie", methods=["POST"])
def movie_post():
    #Mengambil data dari client, lalu dijadiin variabel (nanti mau dikirim ke database)
    url_receive = request.form['url_give']
    star_receive = request.form['star_give']
    comment_receive = request.form['comment_give']

    #ini untuk keperluan webscrapping
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
    data = requests.get(url_receive, headers=headers)

    soup = BeautifulSoup(data.text, 'html.parser')

    #ada informasi yang diambil dari webscrapping juga dan dijadiin variabel (nanti mau dikirim ke database)
    og_image = soup.select_one('meta[property="og:image"]')
    og_title = soup.select_one('meta[property="og:title"]')
    og_description = soup.select_one('meta[property="og:description"]')

    image = og_image['content']
    title = og_title['content']
    desc = og_description['content']

    #Informasi yang diperoleh dijadiin satu biar ngirim ke databasenya gampang.
    doc = {
        'image':image,
        'title':title,
        'description':desc,
        'star':star_receive,
        'comment':comment_receive
    }

    #Memasukkan ke database
    db.movies.insert_one(doc)

    #ini hanya pesan kalau misalnya proses selesai.
    return jsonify({'msg':'POST request!'})

@app.route("/movie", methods=["GET"])
def movie_get():
    #Ngambil data dari database, kemudian dikirim ke CLIENT
    movie_list = list(db.movies.find({}, {'_id': False}))
    return jsonify({'movies': movie_list})

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)



