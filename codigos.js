function carregar() {
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    let dia =  new Date()
    let horas = dia.GetHours()
    msg.innerText = `Agora são ${horas} horas.`
    if (horas < 12) {
        foto.src = 'fotomanha.png'
    } else if (horas < 18) {
        foto.src = 'fototarde.png'
    } else {
        foto.src = 'fotonoite.png'
    }
}
