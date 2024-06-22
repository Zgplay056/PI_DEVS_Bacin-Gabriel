//Definindo os Bancos de Dados
var banco = [];

//Criando função com o laço de repetição
function mostrar() {
    var alterar = [];
    for (var i = 0; i < banco.length; i-=-1) {
        alterar += "Gasto " + (i + 1) + ": " + banco[i].gasto + "<br> Custo " + (i + 1) + ": " + banco[i].custo 
         + "    <button onclick=\"deletar(" + i + ")\">Remover</button><br>";
    }
    document.getElementById("resposta").innerHTML = alterar;
    //Função exibir total para automatizar a tela
    exibirTotal();
  
    
}
    //Criando a Função para Adicionar na Array
    function enviar() {
         //Enviando os conteúdo para o Banco de Dados
            let gasto = document.getElementById('gasto').value;
            let custo = document.getElementById('custo').value;
            if(gasto === "" || custo === "") {
                alert("Os campos Gasto e Custo NÃO PODEM SER VAZIOS!!!");
                return;
            } 
                console.log(gasto);
                console.log(custo);
        banco.push({ gasto: gasto , custo: parseFloat(custo) });
        document.getElementById('gasto').value = ''; // Limpa os campos
        document.getElementById('custo').value = '';
            //Chama a Função para Atualizar Automaticamente sem atualizar o Site
        mostrar();
        }

    //Remover tarefa a array
    function deletar(i) {
        // Usando splice para remover a tarefa
        banco.splice(i, 1);
        mostrar();
    }

    //Função para fazer a entrada de dados mais simples com a tecla 'ENTER'
    function enviar_gasto(event) {
        const tecla = event.key;

        if (tecla === 'Enter') {
            enviar();
        }
    }
    //Função para enviar salários
    function enviar_salario(event) {
        const tecla = event.key;

        if (tecla === 'Enter') {
            sobra();
        }
    }

    function calcularTotalDespesas() {
       
        return totalDespesas;
    }
var totalDespesas = "";

     function sobra () {
        const totalDespesas = banco.reduce((total, gasto) => total + gasto.custo, 0);
        let sal = parseFloat(document.getElementById('sal').value);
        console.log(sal)
        if (isNaN(sal)) {
            alert("O campo Salário não pode ser vazio");
            return;
        }
        
        
        let sobra = sal - totalDespesas;
    
        document.getElementById('sobra').innerHTML = `<hr> O total de suas despesas é R$ ${totalDespesas.toFixed(2)} e considerando sua receita de R$ ${sal.toFixed(2)}, sua receita é R$ ${sobra.toFixed(2)}`;
    }
    
    
    // Exibir o total na tela das despesas na tela
    function exibirTotal() {
        const total = calcularTotalDespesas();
        document.getElementById('total').innerHTML = `Total de despesas: R$`;
        sobra ();
    }
      
