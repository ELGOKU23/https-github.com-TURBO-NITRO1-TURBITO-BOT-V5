
function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

  m.reply(`
╭•⋆҈͜͡◄⫘.❯⋆✪⋆❮.⫘▻⋆҈͜͡•╮
╽❮TURBO NITRO BOT❯
┃⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆
┃❮❮❮❮ GRUPOS ❯❯❯❯❯
╰•⋆҈͜͡.➣❂ᵗᵘʳᵇⁱᵗᵒ ᵇᵒᵗ❂◄⋆҈͜͡•╯

☣️Suscríbete YouTube

 INSTALA TURBO BOT
https://youtu.be/9Rnsv_gUWuI

🧿 GRUPOS WHATSAPP

 🧑🏻‍💻 TURBO BOT 🤖

https://chat.whatsapp.com/JOJW1aCk3Zi1nAGO8SUap6

🧿 LINKS XIMENA 🇲🇽

 ENLACES Y APORTES
 
https://chat.whatsapp.com/Kk93aQjcJHgAt5gDxYoJ5Y

🧿 CINEMANÍA 2022

PELÍCULAS Y APORTES

https://chat.whatsapp.com/BVwp52esPYb2uT59KzIY4N

🧿 ENLACES JOKABED

 ENLACES Y APORTES

https://chat.whatsapp.com/F25XhvTxXbO7HOgXRq1l1l

🧿 TORNEOS DEL BAN

SORTEÓ DE GRUPOS, NÚMEROS MÁS

https://chat.whatsapp.com/L4YCR4lqjf2LpjRrWjzfeK

☣️ NÚMEROS VIRTUALES

https://youtube.com/c/N%C3%BAmerosVirtualesyMasbyshiryu


╭╾┅≼☬≽𓀬≼☬≽┅╼╮
┃❮❮❮ CANAL OFC ❯❯❯
┃Apoya al Bot ❤️
┃ https://youtube.com/c/TURBONTR1
╰•⋆҈͜͡.𝐓𝐔𝐑𝐁𝐎⋆𝐍𝐈𝐓𝐑𝐎⋆҈͜͡•╯`) 


}

handler.help = ['owner']
handler.tags = ['main']

handler.command = ['owner', 'creator', 'creador', 'dueño', 'tbowner'] 


export default handler
