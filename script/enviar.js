function CadastroCliente(){
    var cliente = {
        nome:"",
        email:"",
        telefone:"",
        mensagem:""
    };

    cliente.nome = document.getElementById("nomef").value;

    cliente.email = document.getElementById("emailf").value;

    cliente.telefone = document.getElementById("telefonef").value;

    cliente.mensagem = document.getElementById("mensagemf").value;

    clienteE = Object.create(cliente);
    document.getElementById("nomec").innerHTML = clienteE.nome;
    document.getElementById("emailc").innerHTML = clienteE.email;
    document.getElementById("telefonec").innerHTML = clienteE.telefone;
    document.getElementById("mensagemc").innerHTML = clienteE.mensagem;
    
}