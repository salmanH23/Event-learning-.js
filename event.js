// document.getElementById('owl').onclick = function(){
    //     alert("owl clicked")
    // }

    // attachEvent()
    // jQuery - on
    // 

    // document.getElementById('images').addEventListener('click', function(e){
    //     console.log("clicked inside the ul");
    // }, false)

    // document.getElementById('owl').addEventListener('click', function(e){
    //     console.log("owl clicked");
    //     e.stopPropagation()
    // }, false)

    // document.getElementById('google').addEventListener('click',function(e){
    //     e.preventDefault();
    //     e.stopPropagation()
    //     console.log("google clicked");
    // }, false)

    document.querySelector('#images').addEventListener('click', function(e){
        console.log(e.target.tagName);
       if (e.target.tagName === 'IMG') {
            console.log(e.target.id);
       }
       let removeit = e.target.parentNode;
       //removeIt.parentNode.removeChild(removeIt)
       removeit.remove()

    });