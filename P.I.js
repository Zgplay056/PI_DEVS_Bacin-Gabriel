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

        banco.push({ gasto: gasto , custo: parseFloat(custo) });
        document.getElementById('gasto').value = ''; // Limpa os campos
        document.getElementById('custo').value = '';
            //Chama a Função para Atualizar Automaticamente sem REALMENTE atualizar o Site
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
    //Função para enviar salários com a tecla 'ENTER'
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
            alert("O campo Salário está vazio");
            return;
        }
        
    
        let sobra = sal - totalDespesas;
    
        document.getElementById('sobra').innerHTML = `<hr> O total de suas despesas é R$ ${totalDespesas.toFixed(2)} e considerando sua receita de R$ ${sal.toFixed(2)}, sua receita é R$ ${sobra.toFixed(2)}`
        + " <br> <button onclick=\"limparTela(resposta,sobra)\">Limpar a Tela</button>";
    }
    
    
    // Exibir o total na tela das despesas na tela
    function exibirTotal() {
        const total = calcularTotalDespesas();
        sobra ();
    }
      
    // Função Para Limpar a Tela
     function limparTela (resposta, sobra) {
        document.getElementById("resposta").innerHTML = '';
        document.getElementById('sobra').innerHTML = '';
        banco = [];
     } 

    //Calculadora de juros compostos
    function calcularJurosCompostos() {
        var principal = parseFloat(document.getElementById('principal').value);
        var investimento = parseFloat(document.getElementById('investimento').value);
        var taxa = parseFloat(document.getElementById('taxa').value) / 100;
        var tempo = parseInt(document.getElementById('tempo').value);

        var montante = principal;
        var totalInvestido = principal;

        for (var i = 1; i <= tempo; i++) {
            montante *= (1 + taxa); // Aplica juros sobre o montante atual
            montante += investimento; // Adiciona o investimento mensal ao montante
            totalInvestido += investimento; // Atualiza o total investido
        }

        var juros = montante - totalInvestido;

        var resultado = `
            <p>Montante após ${tempo} meses: R$ ${montante.toFixed(2)}</p>
            <p>Total investido: R$ ${totalInvestido.toFixed(2)}</p>
            <p>Juros acumulados: R$ ${juros.toFixed(2)}</p>
        `;

        document.getElementById('resultadoJuros').innerHTML = resultado;
    }
