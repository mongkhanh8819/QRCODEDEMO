const btnCreateQr = document.querySelector('.btn-createqr')
const wrapper = document.querySelector('.wrapper')
const inputForm = document.querySelector('.form input')
btnCreateQr.addEventListener('click', () => {
    const valueInput = inputForm.value
    if(!valueInput) return
    btnCreateQr.innerText = 'Generate QR Code...'
    const qrImg = document.querySelector('.qr-img')
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valueInput}`
    
    qrImg.addEventListener('load', ()=>{
        wrapper.classList.add('active')
    btnCreateQr.innerText = 'Generate QR Code'

    })
    
    
    
    inputForm.addEventListener('keyup', () => {
    wrapper.classList.remove('active')

    })
    
})