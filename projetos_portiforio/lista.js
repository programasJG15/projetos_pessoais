   document.getElementById('add').addEventListener('click', function(){
        const tarefa = document.getElementById('tarefa').value;
        const datainput = document.getElementById('data').value;

        if (tarefa.trim() !== '' && datainput !== '') {
         //criação do elemento li
        const lista = document.getElementById('lista-tarefas');
        const li = document.createElement('li');
        //função data 
        
        const data = new Date(datainput)
        const dia  = String(data.getDate()).padStart(2, '0');
        const mes  = String(data.getMonth() + 1).padStart(2, '0');
        const ano  = data.getFullYear();

        // função hora
        const hora = String(data.getHours()).padStart(2, '0');
        const minuto = String(data.getMinutes()).padStart(2, '0');
        const dataFormatada = `${dia}/${mes}/${ano} ${hora}:${minuto}`;

         li.textContent = tarefa + " - " + dataFormatada;

        const botaoremover = document.createElement('button');
        botaoremover.textContent = "x";
        botaoremover.className = "btn btn-danger btn-sm ms-2";
        botaoremover.addEventListener('click', function(){
            li.remove();
        });
        li.appendChild(botaoremover);
        lista.appendChild(li);
    }
        document.getElementById('tarefa').value = '';
        document.getElementById('data').value = '';
            
    });