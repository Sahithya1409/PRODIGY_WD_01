window.addEventListener('scroll',function() {
    const nav=document.getElementById('navbar');
    if(this.window.scrollY > 50) {
        nav.style.backgroundColor='darkblue';
    }else{
        nav.style.backgroundColor='';
    }
})