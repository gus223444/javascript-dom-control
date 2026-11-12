const tabs=document.querySelectorAll('.tabs li')
const contents= document.querySelectorAll('.content')


init(0)

function init(num){
    tabs[num].classList.add('active')
    contents[num].classList.add('on')
}

function reset(){
    for(let i=0 ;i<tabs.length;i++){
        
        tabs[i].classList.remove('active')
        contents[i].classList.remove('on')
    }
}


tabs.forEach(function(tab,i){
    tab.addEventListener('click',function(){
        console.log(i)
        reset()
        init(i)
    })

})