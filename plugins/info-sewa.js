let handler = async (m, { conn }) => {
let sewa = `
❏──「 *Sewa* 」
│ • *1 Minggu:* 10K
│ • *1 Bulan:* 25K
│ • *Permanen:* (Tidak ada)
┠──「 *Pembayaran* 」
│ • *OVO:* [${global.povo}]
│ • *GOPAY:* [${global.pgopay}]
│ • *DANA:* [${global.pdana}]
❏──────────────๑
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa|prem|premium)$/i

export default handler
