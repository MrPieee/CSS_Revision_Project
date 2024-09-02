const navber = document.getElementById('navber');

const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');


openBtn.addEventListener("click" , () => {
    navber.style.display='block'
    if(navber.style.display='none'){
        navber.style.display='block';
        closeBtn.style.display ='inline';
        openBtn.style.display ='none';
    }else{
        navber.style.display='none';
        closeBtn.style.display ='none';
        openBtn.style.display ='inline';
    }
});


closeBtn.addEventListener('click',()=>{
    if(navber.style.display='block'){
        navber.style.display='none';
        closeBtn.style.display ='none';
        openBtn.style.display ='inline';
    }else{
        navber.style.display='block';
        closeBtn.style.display ='inline';
        openBtn.style.display ='none';
    }
});

