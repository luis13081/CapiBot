export async function all(m, conn) {
//let username = conn.getName(m.sender)
let user = global.db.data.users[m.sender]  
if (!m.message)
return
if (!user.desbloquear)
return !0
if (+new Date() > user.desbloquear) {
  
setTimeout(() => {
user.banned = false
this.sendHydrated(m.chat, '*Fue desbloqueado después de 15 Segundos, NO HAGA SPAM*', wm, null, null, null, null, null, [
[null, null]], null)}, 15000)
        
user.desbloquear = null
}} 
