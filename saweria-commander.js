//Import Module Strict
const express = require("express")
var bodyParser = require("body-parser")
const rl = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout
})
//Local Var
var url_gotten = ""
const fs = require("fs")
var realtime_console = false;
const path = require("path")
const { mouse, left, right, up, down, straightTo, centerOf, Region, keyboard, Key} = require("@nut-tree/nut-js");
const localtunnel = require("localtunnel")
const { exec } = require("child_process")
//Loaded Module when needed variable against
load()
exec(`SAWERIA COMMANDER by iFika`, function(err) {})
async function load() {
console.log("\x1b[1m", `Mengambil Data.. (Kalau Muncul Firewall, Setuju Saja.)`)
let app = express()
app.use(bodyParser.json())
app.post(`/`, function(req,res) {
  fs.readdir("./DATA/donasi", async(err,files) => {
    var filter = files.filter(f => f.split(".").pop() === "json");
    for (i = 0; i < filter.length; i++) {
      try {
        const fileData = fs.readFileSync(path.join('./DATA/donasi/', filter[i]));
        
        const json = JSON.parse(fileData.toString());
        if(json.donasi == parseInt(req.body['amount_raw'])) {
          if(!fs.existsSync(`DATA/load_donasi/${json.name}.js`)) {
            console.log(`[WARN] : Donasi menu tersedia Namun Scriptnya tidak berhasil dijalankan karena tidak tersedia di Folder Load_donasi! Silakan Perbaiki terlebih dahulu.`)
            res.status(200).send(`OK`)
          }
          else {
          fs.readFile(`DATA/load_donasi/${json.name}.js`, async(err, me) => {
if(err) console.log(`Error!`)
eval(me.toString())
if(realtime_console) console.log("\x1b[42m", `[!] Permintaan ${json.name} telah dilaksanakan!`)
res.status(200).send(`OK`)
          })
          }
        }
      }
      catch(e) {
        res.status(200).send(`OK`)

      
    }
    }
  })
  })

  app.listen(3000).on("listening", async() => {
   

      const tunnel = await localtunnel({ port: 3000});
url_gotten = tunnel.url
console.clear()
menu_loaded()
        tunnel.on('close', () => {
          console.log(`Domain Closed`)
        });
    
})
}

async function menu_loaded() {
//Executable Program Stricted
console.log("\x1b[32m", `- SAWERIA CONTROLLER OPEN SOURCE -
By : iFika

Menu Tersedia :
1. Ambil URL Untuk Saweria
2. Opsi Donasi Tersedia
3. Realtime Console (Setelah memilih menu ini, Maka tidak bisa kembali ke menu!)`)
rl.question(`Pilih Menu (1-3) > `, (data) => {
if(data == 1) {
  console.clear()
  ambil_url()
}
else if (data == 2) {
  console.clear()
data_donasi()
}
else if (data == 3) {
  console.clear()
realtime()
}
else {
  console.clear()
  menu_loaded()
}
})

}

async function ambil_url() {
 
  console.log(`URL Webhook : ${url_gotten}
Cara untuk Bind URL :
1. Masuk Ke Halaman Saweria
2. Pilih Integration
3. Klik 'Webhook'
4. Lalu Nyalakan dan Paste URL yang diatas ^^`)
menu_loaded()
}

async function data_donasi() {
  console.log(`Berikut Donasi yang akan ketrigger :`)
  fs.readdir("./DATA/donasi", async(err,pelers) => {
    var filter = pelers.filter(f => f.split(".").pop() === "json");
    for (i = 0; i < filter.length; i++) {
      const peler = fs.readFileSync(path.join('./DATA/donasi/', filter[i]));
      const json = JSON.parse(peler.toString());
  console.log(`${json.name} - Donasi yang dibutuhkan : ${json.donasi} - Script Loaded : ${(!fs.existsSync(`./DATA/donasi/${filter[i]}`) ? `No` : `Yes`)} 
`)
if(i+1 === filter.length) {
  menu_loaded()
}
    }
  })
}

async function realtime() {
  console.log("\x1b[35m", `[MODE CHANGED] Kamu Dalam Mode Realtime, Untuk Keluar kamu harus restart Program ini.
Data Permintaan Akan Muncul disini!`)
  realtime_console = true;
  return;
}