const faqsbtn = document.querySelectorAll('.btn')

faqsbtn.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        btn.parentNode.classList.toggle('active')
    })
})