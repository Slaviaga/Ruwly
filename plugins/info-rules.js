import fs from 'fs'

let handler = async (m, { conn }) => {
	let rules = `Peraturan Momoka :
- Dilarang Spam
- Dilarang Menelpon Momoka
- Dilarang Mengirim Virus Ke Momoka

Catatan :
Semua Fitur Momoka dan Rena Di Lakukan Secara Otomatis Oleh Sistem Tanpa
Ada Campur Tangan Owner, 
Dan Semua Informasimu Seperti Chat, Foto, Video Atau Vn 
Akan Aman Tanpa Di Sebar, Dan Jika Ada Balasan Yang Absurd Atau
Sticker Absurd Dibuat Oleh Owner Kesayangan Momoka <3
`;
	await conn.sendMessage(m.chat, { image: { url: 'https://i.pinimg.com/564x/d2/31/50/d231504955d3e7562d8a5084d40c56b6.jpg' }, caption: rules }, m)
}
handler.help = ['rules']
handler.tags = ['main']
handler.command = /^(rules|rule)$/i;

export default handler;
