let n
初始化 ()
setInterval(()=> {   
    makeLeave(getImage(n))  //
    .one('transitionend',(e)=>{
        makeEnter($(e.currentTarget))
    })
    makeCurrent(getImage(n+1))  
    n += 1 
}, 3000);


//下面为封装的函数

function getImage(n){
   return  $(`.images >img:nth-child(${x(n)})`)
}


function x(n){
    if(n>3){
        n = n%3
        if(n===0){
            n=3
        }
    }
    return n
}

function 初始化 (){
    n=1
    $(`.images >img:nth-child(${n})`).addClass('current')  
   .siblings().addClass('enter')
}

function makeCurrent($node){
    $node.removeClass('enter leave').addClass('current')  //用空格隔开，一次可以移除多个类
    return $node     //如果不加，则makeLeave的返回值是undefined
}

function makeLeave($node){
    $node.removeClass('enter current').addClass('leave')  //用空格隔开，一次可以移除多个类
    return $node    //如果不加，则makeLeave的返回值是undefined
}

function makeEnter($node){
    $node.removeClass('leave current').addClass('enter')  //用空格隔开，一次可以移除多个类
    return $node    //如果不加，则makeLeave的返回值是undefined
}




// setTimeout(function() {
//     $('.images >img:nth-child(1)').removeClass('current').addClass('leave') 
//     .one('transitionend',(e)=>{
//         $(e.currentTarget).removeClass('leave').addClass('enter')
//     })
//     $('.images >img:nth-child(2)').removeClass('enter').addClass('current')    
// }, 3000);


// setTimeout(function() {
//     $('.images >img:nth-child(2)').removeClass('current').addClass('leave') 
//     .one('transitionend',(e)=>{
//         $(e.currentTarget).removeClass('leave').addClass('enter')
//     })
//     $('.images >img:nth-child(3)').removeClass('enter').addClass('current')    
// }, 6000);

// setTimeout(function() {
//     $('.images >img:nth-child(3)').removeClass('current').addClass('leave') 
//     .one('transitionend',(e)=>{
//         $(e.currentTarget).removeClass('leave').addClass('enter')
//     })
//     $('.images >img:nth-child(1)').removeClass('enter').addClass('current')    
// }, 9000);

// setTimeout(function() {
//     $('.images >img:nth-child(1)').removeClass('current').addClass('leave') 
//     .one('transitionend',(e)=>{
//         $(e.currentTarget).removeClass('leave').addClass('enter')
//     })
//     $('.images >img:nth-child(2)').removeClass('enter').addClass('current')    
// }, 12000);
