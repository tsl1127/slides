let $buttons = $('#buttonWrapper>button')
let $slides = $('#slides')
let $images = $slides.children('img') 
let current = 0

makeFakeSlides()
$slides.css({transform:'translateX(-400px)'})   //让1在当前窗口
bindEvents()

$('#next').on('click',function(){     
    goToSlide(current+1)
})

$('#previous').on('click',function(){
    goToSlide(current-1)
})

let timer = setInterval(function(){      //每隔2S自动播放
    goToSlide(current+1)
},2000)

$('.container').on('mouseenter',function(){    //鼠标进入悬停
    window.clearInterval(timer)
}).on('mouseleave',function(){
    timer = setInterval(function(){      //每隔2S自动播放
        goToSlide(current+1)
    },2000)
})



function bindEvents(){
    $('#buttonWrapper').on('click','button',function(e){
        let $button = $(e.currentTarget)
        let index = $button.index()
        goToSlide(index)
    })
}

    function goToSlide(index){
        if(index>=$buttons.length){
            index = 0
        }else if(index < 0) {
            index = $buttons.length-1
        }
        if(current === $buttons.length-1 && index ===0){  //说明你是从最后一张到第一张
            $slides.css({transform:`translateX(${-(($buttons.length)+1)*400}px)`})  
            .one('transitionend',function(){
                $slides.hide()
                .offset()
                $slides.css({transform:`translateX(${-(index+1)*400}px)`}) //要先隐藏再做动画，不然会被用户看穿
                .show()
            })   
        }else if(current === 0 && index === $buttons.length-1){  //说明你是从第一张到最后一张
            $slides.css({transform:'translateX(0px)'})  
            .one('transitionend',function(){
                $slides.hide()
                .offset()
                $slides.css({transform:`translateX(${-(index+1)*400}px)`}) //要先隐藏再做动画，不然会被用户看穿
                .show()
            })
        }else{
            $slides.css({transform:`translateX(${-(index+1)*400}px)`}) //正常走
        }
        current = index
    }

    // $buttons.eq(0).on('click',function(){
    //     if(current ===2){
    //         console.log('说明你是从最后一张到第一张')
    //         $slides.css({transform:'translateX(-1600px)'})  
    //         .one('transitionend',function(){
    //             $slides.hide()
    //             .offset()
    //             $slides.css({transform:'translateX(-400px)'}) //要先隐藏再做动画，不然会被用户看穿
    //             .show()
    //         })
    //     }else{
    //         $slides.css({transform:'translateX(-400px)'})       
    //     }
    //     current =0
    // })
    
    // $buttons.eq(1).on('click',function(){
    //         $slides.css({transform:'translateX(-800px)'})
    //         current=1
    // })
    
    // $buttons.eq(2).on('click',function(){
    //     if(current===0){
    //         console.log('说明你是从第一张到最后一张')
    //         $slides.css({transform:'translateX(0px)'})  
    //         .one('transitionend',function(){
    //             $slides.hide()
    //             .offset()
    //             $slides.css({transform:'translateX(-1200px)'}) //要先隐藏再做动画，不然会被用户看穿
    //             .show()
    //         })    
    //     }else{
    //         $slides.css({transform:'translateX(-1200px)'})
    //     }
    //     current =2
    // })




function makeFakeSlides(){
    let $firstCopy = $images.eq(0).clone(true)
    // console.log($firstCopy[0].outerHTML)
    let $lastCopy = $images.eq($images.length-1).clone(true)
    // console.log($lastCopy[0].outerHTML)
    $slides.append($firstCopy)  //把第一张放到最后去
    $slides.prepend($lastCopy)  //把最后一张放到最前面 
}