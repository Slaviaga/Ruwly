import db from '../lib/database.js'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
import can from 'knights-canvas'
import uploadImage from '../lib/uploadImage.js'
import { ranNumb, padLead } from '../lib/others.js'
import got from 'got'

let handler = async (m, { conn }) => {
	let user = global.db.data.users[m.sender]
	let name = await conn.getName(m.sender)
	if (!canLevelUp(user.level, user.exp, global.multiplier)) {
		let image, data, pp, out
		let { min, xp, max } = xpRange(user.level, global.multiplier)
		let txt = `Level *${user.level} (${user.exp - min}/${xp})*\nKurang *${max - user.exp}* Lagi!`
		let meh = padLead(ranNumb(43), 3)
		try {
			try { pp = await conn.profilePictureUrl(m.sender, 'image') }
			catch { pp = 'https://i.ibb.co/m53WF9N/avatar-contact.png' }
			let out = 'https://telegra.ph/file/6894577305375f8139e3a.jpg'
			image = await new can.Rank().setAvatar(pp).setUsername(name.replaceAll('\n','')).setBg(out).setNeedxp(xp).setCurrxp(user.exp - min).setLevel(user.level).setRank('https://i.ibb.co/Wn9cvnv/FABLED.png').toAttachment()
			data = await image.toBuffer()
			await conn.sendMessage(m.chat, { image: data, caption: txt }, { quoted : m })
		} catch (e) {
			console.log(e)
			m.reply(txt)
		}
	} else {
		let before = user.level * 1
		while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
		if (user.level <= 2) {
			user.role = 'Newbie ㋡'
		} else if (user.level <= 4) {
			user.role = 'Beginner Grade 1 ⚊¹'
		} else if (user.level <= 6) {
			user.role = 'Beginner Grade 2 ⚊²'
		} else if (user.level <= 8) {
			user.role = 'Beginner Grade 3 ⚊³'
		} else if (user.level <= 10) {
			user.role = 'Beginner Grade 4 ⚊⁴'
		} else if (user.level <= 12) {
			user.role = 'Magus Grade 1 ⚌¹'
		} else if (user.level <= 14) {
			user.role = 'Magus Grade 2 ⚌²'
		} else if (user.level <= 16) {
			user.role = 'Magus Grade 3 ⚌³'
		} else if (user.level <= 18) {
			user.role = 'Magus Grade 4 ⚌⁴'
		} else if (user.level <= 20) {
			user.role = 'Magus Grade 5 ⚌⁵'
		} else if (user.level <= 22) {
			user.role = 'Master Grade 1 ☰¹'
		} else if (user.level <= 24) {
			user.role = 'Master Grade 2 ☰²'
		} else if (user.level <= 26) {
			user.role = 'Master Grade 3 ☰³'
		} else if (user.level <= 28) {
			user.role = 'Master Grade 4 ☰⁴'
		} else if (user.level <= 30) {
			user.role = 'Master Grade 5 ☰⁵'
		} else if (user.level <= 32) {
			user.role = 'Legend Grade 1 ≣¹'
		} else if (user.level <= 34) {
			user.role = 'Legend Grade 2 ≣²'
		} else if (user.level <= 36) {
			user.role = 'Legend Grade 3 ≣³'
		} else if (user.level <= 38) {
			user.role = 'Legend Grade 4 ≣⁴'
		} else if (user.level <= 40) {
			user.role = 'Legend Grade 5 ≣⁵'
		} else if (user.level <= 42) {
			user.role = 'Myth Grade 1 ﹀¹'
		} else if (user.level <= 44) {
			user.role = 'Myth Grade 2 ﹀²'
		} else if (user.level <= 46) {
			user.role = 'Myth Grade 3 ﹀³'
		} else if (user.level <= 48) {
			user.role = 'Myth Grade 4 ﹀⁴'
		} else if (user.level <= 50) {
			user.role = 'Myth Grade 5 ﹀⁵'
		} else if (user.level <= 52) {
			user.role = 'Archon Grade 1 ︾¹'
		} else if (user.level <= 54) {
			user.role = 'Archon Grade 2 ︾²'
		} else if (user.level <= 56) {
			user.role = 'Archon Grade 3 ︾³'
		} else if (user.level <= 58) {
			user.role = 'Archon Grade 4 ︾⁴'
		} else if (user.level <= 60) {
			user.role = 'Archon Grade 5 ︾⁵'
		} else if (user.level <= 62) {
			user.role = 'Sage 1 ♢¹ '
		} else if (user.level <= 64) {
			user.role = 'Sage 2 ♢²'
		} else if (user.level <= 66) {
			user.role = 'Sage 3 ♢³'
		} else if (user.level <= 68) {
			user.role = 'Sage 4 ♢⁴'
		} else if (user.level <= 70) {
			user.role = 'Sage 5 ♢⁵'
		} else if (user.level <= 72) {
			user.role = 'Ancient 1 ♢♢¹'
		} else if (user.level <= 74) {
			user.role = 'Ancient 2 ♢♢²'
		} else if (user.level <= 76) {
			user.role = 'Ancient 3 ♢♢³'
		} else if (user.level <= 78) {
			user.role = 'Ancient 4 ♢♢⁴'
		} else if (user.level <= 80) {
			user.role = 'Ancient 5 ♢♢⁵'
		} else if (user.level <= 82) {
			user.role = 'Divine Grade 1 ✷¹'
		} else if (user.level <= 84) {
			user.role = 'Divine Grade 2 ✷²'
		} else if (user.level <= 86) {
			user.role = 'Divine Grade 3 ✷³'
		} else if (user.level <= 88) {
			user.role = 'Divine Grade 4 ✷⁴'
		} else if (user.level <= 90) {
			user.role = 'Divine Grade 5 ✷⁵'
		} else if (user.level <= 92) {
			user.role = 'Divine Grade 6 ✷✷¹'
		} else if (user.level <= 94) {
			user.role = 'Divine Grade 7 ✷✷²'
		} else if (user.level <= 96) {
			user.role = 'Divine Grade 8 ✷✷³'
		} else if (user.level <= 98) {
			user.role = 'Divine Grade 9 ✷✷⁴'
		} else if (user.level <= 100) {
			user.role = 'Divine Grade 10 ✷✷⁵'
		} else if (user.level <= 102) {
			user.role = 'Immortal Early ✰'
		} else if (user.level <= 104) {
			user.role = 'Immortal Silver ✩'
		} else if (user.level <= 106) {
			user.role = 'Immortal gold ✯'
		} else if (user.level <= 108) {
			user.role = 'Immortal Platinum ✬'
		} else if (user.level <= 110) {
			user.role = 'Immortal Diamond ✪'
		} else if (user.level <= 112) {
			user.role = 'Immortal General Early ✰'
		} else if (user.level <= 114) {
			user.role = 'Immortal General Silver ✩'
		} else if (user.level <= 116) {
			user.role = 'Immortal General gold ✯'
		} else if (user.level <= 118) {
			user.role = 'Immortal General Platinum ✬'
		} else if (user.level <= 120) {
			user.role = 'Immortal General Diamond ✪'
		} else if (user.level <= 122) {
			user.role = 'Immortal Human ✰'
		} else if (user.level <= 124) {
			user.role = 'Immortal Priest ✩'
		} else if (user.level <= 126) {
			user.role = 'Immortal Archpriest ✯'
		} else if (user.level <= 128) {
			user.role = 'Immortal Angel ✬'
		} else if (user.level <= 130) {
			user.role = 'Immortal Archangel ✪'
		} else if (user.level <= 132) {
			user.role = 'Supreme Being 1 ✰'
		} else if (user.level <= 134) {
			user.role = 'Supreme Being 2 ✩'
		} else if (user.level <= 136) {
			user.role = 'Supreme Being 3 ✯'
		} else if (user.level <= 138) {
			user.role = 'Supreme Being 4 ✬'
		} else if (user.level <= 140) {
			user.role = 'Supreme Being 5 ✪'
		} else if (user.level <= 142) {
			user.role = 'Supreme Radiant Early ★'
		} else if (user.level <= 144) {
			user.role = 'Supreme Radiant Intermediate ⍣'
		} else if (user.level <= 146) {
			user.role = 'Supreme Radiant Elite ≛'
		} else if (user.level <= 148) {
			user.role = 'The Supreme Radiant Hero ⍟'
		} else if (user.level <= 152) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 154) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 156) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 158) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 160) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 162) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 164) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 166) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 168) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 170) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 172) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 174) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 176) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 178) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 180) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 182) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 184) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 186) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 188) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 190) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 192) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 194) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 196) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 198) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 200) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 210) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 220) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 230) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 240) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 250) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 260) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 270) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 280) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 290) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 300) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 310) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 320) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 330) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 340) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 350) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 360) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 370) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 380) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 390) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 400) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 410) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 420) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 430) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 440) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 450) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 460) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 470) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 480) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 490) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 500) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 600) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 700) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 800) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 900) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 1000) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 2000) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 3000) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 4000) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 5000) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 6000) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 7000) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 8000) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 9000) {
			user.role = 'All-Father 忍'
		} else if (user.level <= 10000) {
			user.role = 'All-Father 忍'
		}
		if (before !== user.level) {
			let txt = `Selamat ${name.replaceAll('\n','')} Naik Level\n• Level Sebelumnya : ${before}\n• Level Baru : ${user.level}\n• Pada Jam : ${new Date().toLocaleString('id-ID')}\n*_Semakin Sering Berinteraksi Dengan Clara Semakin Tinggi Level Kamu_*`
			try {
				let image, data, pp
				try { pp = await conn.profilePictureUrl(m.sender, 'image') }
				catch { pp = 'https://i.ibb.co/m53WF9N/avatar-contact.png' }
				image = await new can.Up().setAvatar(pp).toAttachment()
				data = await image.toBuffer()
				await conn.sendMessage(m.chat, { image: data, caption: txt }, { quoted : m })
			} catch {
				m.reply(txt)
			}
		}
	}
}

handler.menufun = ['levelup']
handler.tagsfun = ['main']
handler.command = /^(level(up)?)$/i

export default handler
