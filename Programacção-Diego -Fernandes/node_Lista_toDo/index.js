
        var $lista=document.querySelector('ul')
        var $toDo=document.querySelector('#toDo')
        var $botao=document.querySelector('#btn')
        
        

        
        $botao.addEventListener('click', addtoDo)
     


        
        function addtoDo(){
            var toDo2='<li>' + $toDo.value + '</li>'
            $lista.innerHTML += toDo2
            $toDo.value=''
            $toDo.focus()
        }
        
        $toDo.addEventListener('keyup' , function(e){
            //console.log(e.keyCode) keyCode=13

            if (e.keyCode===13) {
                addtoDo()
            }
        })

     

        

    