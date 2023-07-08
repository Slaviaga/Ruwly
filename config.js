import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6289516193660', 'Ruwly', true]
] 
global.mods = ['08982451682']
global.prems = ['08982451682']
// Info
global.nomorwa = '6289516193660'
global.packname = 'Momoka X Rena Megumi By'
global.author = '© Ruwly'
global.namebot = 'Momoka X Rena Megumi Fusion'
global.wm = '© Momoka By Ruwly'
global.stickpack = 'Momoka X Rena Megumi By'
global.stickauth = '© Ruwly'
// Link Sosmed
global.sig = '-'
global.sgh = 'https://github.com/Slaviaga'
global.sgc = 'https://chat.whatsapp.com/HDagpq4c0Wo814obSBBH9M'
// Donasi
global.pgopay = '0895-1619-3660'
global.pdana = '0895-1619-3660'
global.povo = '0895-1619-3660'
// Info Wait
global.wait = '_Momoka sedang memproses_....'
global.eror = 'Momoka.. tidak mungkin membuat kesalahan!'
global.multiplier = 69 
// Apikey
global.xyro = 'xCOpP5f36W'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "xCOpP5f36W",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})