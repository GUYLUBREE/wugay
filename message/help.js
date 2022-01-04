const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}

exports.allmenu = (sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `*── 「 ${setting.botName} - MD Beta 」 ──*
	
  _*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}*_

    Library : *Baileys-MD*.
    Prefix : 『${prefix}』
    Tanggal Server : *${moment.tz('Asia/Jakarta').format('DD/MM/YY')}*
    Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}

	Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
	Limit Harian : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
	Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
	Balance : $${toCommas(getBalance(sender, balance))}

 ┏━━⭓ *『📍』Main Menu*
 ║ ┃
 ║ ┃✗⃝🖤 ≻ ${prefix}menu
 ║ ┃✗⃝🖤 ≻ ${prefix}owner
 ║ ┃✗⃝🖤 ≻ ${prefix}donasi
 ║ ┃✗⃝🖤 ≻ ${prefix}speed
 ║ ┃✗⃝🖤 ≻ ${prefix}runtime
 ║ ┃✗⃝🖤 ≻ ${prefix}cekprem
 ║ ┃✗⃝🖤 ≻ ${prefix}listprem
 ║ ┃
 ┗━━━━━━━⭓
 
┏━━⭓ *『 ✏️ 』 Converter/Tools*
║ ┃
║ ┃✗⃝🔥 ≻ ${prefix}sticker
║ ┃✗⃝🔥 ≻ ${prefix}toimg
║ ┃✗⃝🔥 ≻ ${prefix}tovid
║ ┃
┗━━━━━━━⭓

┏━━⭓ *『🎓』 Pendidikan Menu*
║ ┃  
║ ┃✗⃝🎒 > ${prefix}nulis-biasa _<text>_
║ ┃✗⃝🎒 > ${prefix}brainly _<query>_
║ ┃✗⃝🎒 > ${prefix}nuliskanan _<text>_
║ ┃✗⃝🎒 > ${prefix}nuliskiri _<text>_
║ ┃✗⃝🎒 > ${prefix}foliokanan _<text>_
║ ┃✗⃝🎒 > ${prefix}foliokiri _<text>
║ ┃
┗━━━━━━━⭓
  
┏━━⭓ *『 ⌛』Downloader*
║ ┃
║ ┃✗⃝🎥 ≻ ${prefix}play
║ ┃✗⃝🎥 ≻ ${prefix}tiktok
║ ┃✗⃝🎥 ≻ ${prefix}ytmp4
║ ┃✗⃝🎥 ≻ ${prefix}ytmp3
║ ┃✗⃝🎥 ≻ ${prefix}getvideo
║ ┃✗⃝🎥 ≻ ${prefix}getmusic
║ ┃✗⃝🎥 ≻ ${prefix}instagram
║ ┃✗⃝🎥 ≻ ${prefix}facebook
║ ┃
┗━━━━━━━⭓
  
┏━━⭓ *『♻️』Random Menu*
║ ┃
║ ┃✗⃝🐢 ≻ ${prefix}quote
║ ┃✗⃝🐢 ≻ ${prefix}cecan
║ ┃✗⃝🐢 ≻ ${prefix}cogan
║ ┃
┗━━━━━━━⭓
  
┏━━⭓ *『🔎』Search Menu*
║ ┃
║ ┃✗⃝☄️ ≻ ${prefix}lirik
║ ┃✗⃝☄️ ≻ ${prefix}grupwa
║ ┃✗⃝☄️ ≻ ${prefix}ytsearch
║ ┃✗⃝☄️ ≻ ${prefix}pinterest
║ ┃
┗━━━━━━━⭓
  
┏━━⭓ *『🎮』Game Menu*
║ ┃
║ ┃✗⃝🕹️ ≻ ${prefix}tictactoe
║ ┃✗⃝🕹️ ≻ ${prefix}delttc
║ ┃✗⃝🕹️ ≻ ${prefix}tebakgambar
║ ┃
┗━━━━━━━⭓
  
 ┏━━⭓ *『🏦』Payment & Bank*
 ║ ┃
 ║ ┃✗⃝💸 ≻ ${prefix}buylimit
 ║ ┃✗⃝💸 ≻ ${prefix}buyglimit
 ║ ┃✗⃝💸 ≻ ${prefix}transfer
 ║ ┃✗⃝💸 ≻ ${prefix}limit
 ║ ┃✗⃝💸 ≻ ${prefix}balance
 ║ ┃
 ┗━━━━━━━⭓
  
 ┏━━⭓ *『⚠️』Info Global Menu*
 ║ ┃
 ║ ┃✗⃝ℹ️ ≻ ${prefix}infogempa
 ║ ┃✗⃝ℹ️ ≻ ${prefix}coronaindo
 ║ ┃✗⃝ℹ️ ≻ ${prefix}coronaglobal
 ║ ┃
 ┗━━━━━━━⭓
 
┏━━⭓ *『👥』Group Menu*
║ ┃
║ ┃✗⃝🗣️ ≻ ${prefix}linkgrup
║ ┃✗⃝🗣️ ≻ ${prefix}setppgrup
║ ┃✗⃝🗣️ ≻ ${prefix}setnamegc
║ ┃✗⃝🗣️ ≻ ${prefix}setdesc
║ ┃✗⃝🗣️ ≻ ${prefix}group
║ ┃✗⃝🗣️ ≻ ${prefix}revoke
║ ┃✗⃝🗣️ ≻ ${prefix}hidetag
║ ┃
┗━━━━━━━⭓
  
┏━━⭓ *『👥』Tolls Menu*  
║ ┃✗⃝💍 ≻ ${prefix}ssweb _<link>_
║ ┃
┗━━━━━━━⭓

┏━━⭓ *『📷』TextProme Menu*
║ ┃
║ ┃✗⃝📸 ≻ ${prefix}pornhub _<text 1>_ _<text 2>_
║ ┃✗⃝📸 ≻ ${prefix}glitch _<text 1>_ _<text 2>_
║ ┃✗⃝📸 ≻ ${prefix}avenger _<text 1>_ _<text 2>_
║ ┃✗⃝📸 ≻ ${prefix}space _<text 1>_ _<text 2>_
║ ┃✗⃝📸 ≻ ${prefix}ninjalogo _<text 1>_ _<text 2>_
║ ┃✗⃝📸 ≻ ${prefix}marvelstudio _<text 1>_ _<text 2>_
║ ┃✗⃝📸 ≻ ${prefix}lionlogo _<text 1>_ _<text 2>_
║ ┃✗⃝📸 ≻ ${prefix}wolflogo _<text 1>_ _<text 2>_
║ ┃✗⃝📸 ≻ ${prefix}steel3d _<text 1>_ _<text 2>_
║ ┃✗⃝📸 ≻ ${prefix}wallgravity _<text 1>_ _<text 2>_
║ ┃✗⃝📸 ≻ ${prefix}blackpink _<text 1>_
║ ┃✗⃝📸 ≻ ${prefix}neon _<text 1>_
║ ┃✗⃝📸 ≻ ${prefix}thunder _<text 1>_
║ ┃
┗━━━━━━━⭓
    
┏━━⭓ *『⚔️』PhotoOxy Menu*
║ ┃
║ ┃✗⃝🎈 ≻ ${prefix}coffe _<text 1>_
║ ┃✗⃝🎈 ≻ ${prefix}shadow _<text 1>_
║ ┃
┗━━━━━━━⭓
    
┏━━⭓ *『🎶』Sound Sad*    
║ ┃
║ ┃✗⃝🎧 ≻ ${prefix}eyesblue
║ ┃✗⃝🎧 ≻ ${prefix}dimana-hatimu
║ ┃✗⃝🎧 ≻ ${prefix}hargai-diriku
║ ┃
┗━━━━━━━⭓

┏━━⭓ *『🕌』 Islam Menu*
║ ┃
║ ┃✗⃝🕋 ≻ ${prefix}jadwalsholat _<daerah>_
║ ┃✗⃝🕋 ≻ ${prefix}asmaulhusna 
║ ┃✗⃝🕋 ≻ ${prefix}alquranaudio _<example di reply>_
║ ┃✗⃝🕋 ≻ ${prefix}kisahnabi _<query>_
║ ┃ 
┗━━━━━━━⭓
  
 ┏━━⭓ *『🧑🏻‍💻』Owner Menu*
 ║ ┃
 ║ ┃✗⃝👑 > evalcode
 ║ ┃✗⃝👑 x evalcode-2
 ║ ┃✗⃝👑 $ executor
 ║ ┃✗⃝👑 ≻ ${prefix}setppbot
 ║ ┃✗⃝👑 ≻ ${prefix}exif
 ║ ┃✗⃝👑 ≻ ${prefix}leave
 ║ ┃✗⃝👑 ≻ ${prefix}addprem
 ║ ┃✗⃝👑 ≻ ${prefix}delprem
 ║ ┃
 ┗━━━━━━━⭓
 
 🙏 *THANKS*
├ Xfarr api - Ra api - Kotz api
├ @yannnnn.zz_
├ Hardianto api
├ Baileys#multi-device
├ and all support
└──────

━━━━━━[KahfzXzyy-Md]━━━━━━


`+'     \`\`\`Powered by Nodejs\`\`\`'
}
