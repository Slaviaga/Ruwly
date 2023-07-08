let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/ce992cdbcd0ea831f0041.jpg'
let sewa = `Hai Kak, Ingin Donasi?, Silahkan Donasi Ke Payment Yang Ada Di Bawah, Dengan Kamu Berdonasi Berarti Kamu Berkontribusi Dalam Perkembangan Momoka dan Rena..


❏──「 *Payment* 」
│ • *OVO:* [${global.povo}]
│ • *GOPAY:* [${global.pgopay}]
│ • *DANA:* [${global.pdana}]
❏──────────────๑


Momoka sangat menghargai berapapun yang telah di donasikan kepada owner momoka tercinta ღゝ◡╹)ノ♡
`
conn.sendFile(m.chat, fotonya, 'anu.jpg', sewa, m)
}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(donasi|donate)$/i

export default handler
