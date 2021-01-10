 ( 
     function(){
        let socials = document.querySelectorAll('.social div');
        console.log(socials)
        socials.forEach((social,index)=>{
            social.style.animation =`movein .9s cubic-bezier(.51,.92,.24,1.15) forwards ${index/9+.2}s`

        })
 }()
 )