import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { ContaCorrente } from "./src/util/model/ContaCorrente";
import { ContaPoupanca } from "./src/util/model/ContaPopuanca";
import { ContaController } from "./src/util/controller/ContaController";

//Como a Classe Conta se tornou uma Classe Abstrata, não é possível instanciar Objetos desta Classe 
//Por esse motivo os exemplos de Conta foram apagados (Thrall e Voljin)

export function main() {

let opcao, numero, agencia, tipo, saldo, limite
let aniversario: number;
let titular: string;
 const tipoContas = ['Conta Corrente', 'Conta Poupanca'];

let contas: ContaController = new ContaController();

console.log("\nCriar Contas\n"); //Contas pré criadas para facilitar os testes - listar contas
let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 456, 1, "Garrosh Grito Infernal", 50000.0, 70000.0);
contas.cadastrar(cc1);
let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 456, 1, "Lich King", 100000, 50000.0);
contas.cadastrar(cc2);
let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 789, 2, "Sylvanas Correventos", 90000.0, 300.0);
contas.cadastrar(cp1);
let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 789, 2, "Ragnaros", 900000.0, 30000.0);
contas.cadastrar(cp2);
contas.listarTodas();

    while (true) {

        console.log(colors.bg.black, colors.fg.redstrong, 
                    "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
        console.log("                                                     ");
        console.log("                    BANCO DA HORDA                    ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
        console.log("                                                     ", 
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.greenstrong, 
                "\nBANCO DA HORDA - GOBLINS, GOBLINS, GOBLINS!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.redstrong, 
                    "\n\nCadastrar Conta\n\n", colors.reset);

                console.log("Digite o número da agência: ");
                agencia = readlinesync.questionInt("");

                console.log("Digite o nome do Titular da conta: ");
                titular = readlinesync.question("");

                console.log("\nDigite o tipo da conta: ");
                tipo = readlinesync.keyInSelect(tipoContas, "", {cancel: false}) +1;

                console.log("\nDigite o saldo da conta (Gold): ");
                saldo = readlinesync.questionFloat("");

                switch(tipo){
                    case 1:
                        console.log("Digite o Limite da Conta (Gold): ");
                        limite = readlinesync.questionFloat("");
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite));
                        break;
                    case 2:
                        console.log("Digite o Dia do aniversario da Conta Poupanca: ");
                        aniversario = readlinesync.questionFloat("");
                        contas.cadastrar(
                            new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
                        break;
                }

            keyPress()
            break;


            case 2:
                console.log(colors.fg.redstrong, 
                    "\n\nListar todas as Contas\n\n", colors.reset);
                    contas.listarTodas();

                keyPress()
                break;

        
            case 3:
                console.log(colors.fg.redstrong, 
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);
                    console.log("Digite o número da conta: ");
                    numero = readlinesync.questionInt();
                    contas.procurarPorNumero(numero);

                keyPress()
                break;


            case 4:
                console.log(colors.fg.redstrong, 
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);

                    console.log("Digite o número da Conta: ");
                    numero = readlinesync.questionInt();

                    let conta = contas.buscarNoArray(numero);

                    if (conta != null) {

                        console.log("Digite o número da agência: ");
                        agencia = readlinesync.questionInt();

                        console.log("Digite o nome do titular da conta: ");
                        titular = readlinesync.question();

                        tipo = conta.tipo;

                        console.log("Digite o Saldo da conta (Gold): ");
                        saldo = readlinesync.questionFloat();

                        switch (tipo){
                            case 1:
                                console.log("Digite o Limite da Conta (Gold): ");
                                limite = readlinesync.questionFloat();
                                contas.atualizar(
                                    new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                                    break;
                            case 2:
                                console.log("Digite o Aniversario da Conta Poupanca: ");
                                aniversario = readlinesync.questionInt();
                                contas.atualizar(
                                    new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario))
                                    break;
                        }
                    } else {
                        console.log(colors.fg.redstrong, "\nA Conta número: " + numero + "não foi encontrada!", colors.reset)
                    }


                keyPress()
                break;

            
            case 5:
                console.log(colors.fg.redstrong, 
                    "\n\nApagar uma Conta\n\n", colors.reset);

                    console.log("Digite o numero da conta: ");
                    numero = readlinesync.questionInt("");
                    contas.deletar(numero);

                keyPress()
                break;


            case 6:
                console.log(colors.fg.redstrong, 
                    "\n\nSaque\n\n", colors.reset);

                keyPress()
                break;
            case 7:
                console.log(colors.fg.redstrong, 
                    "\n\nDepósito\n\n", colors.reset);

                keyPress()
                break;
            case 8:
                console.log(colors.fg.redstrong, 
                    "\n\nTransferência entre Contas\n\n", colors.reset);

                keyPress()
                break;
            default:
                console.log(colors.fg.redstrong, 
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }
}

function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Paulo Dante Coelho Neto");
    console.log("Generation Brasil - generation@generation.org");
    console.log("https://github.com/dantekhann/ProjetoBanco");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();

