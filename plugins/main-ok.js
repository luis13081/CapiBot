let handler = async (m, { conn, text, usedPrefix, command }) => {
conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/f61a7c96f3f86b6c5214f.png', m, { packname: "sticker by", author: "Elyas"
}
handler.tags = ['ok']
handler.command = /^ok$/i
export default handler
