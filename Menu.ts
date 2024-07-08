import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Conta } from "./src/util/model/Conta";
// import { ContaCorrente } from "./src/util/model/ContaCorrente";
// import { ContaPoupanca } from "./src/util/model/ContaPopuanca";

let opcao: number;

//CONTAS TESTE
export function main() {
const conta: Conta = new Conta(1, 123, 1, "Thrall Martelo da Perdição", 10000.0);
    conta.visualizar();
    conta.sacar(10500.0);
    conta.visualizar();
    conta.depositar(5000.0);
    conta.visualizar();

const conta1: Conta = new Conta(2, 123, 1, "Voljin Lancanegra", 20000.0);
    conta1.visualizar();
    conta1.sacar(15000.0);
    conta1.visualizar();
    conta1.depositar(5000.0);
    conta1.visualizar();

// const contacorrente: ContaCorrente = new ContaCorrente(3, 456, 1, "Garrosh Grito Infernal", 50000.0, 70000.0);
//       contacorrente.visualizar();
//       contacorrente.sacar(10000.0);
//       contacorrente.visualizar();
//       contacorrente.depositar(20000.0);
//       contacorrente.visualizar();

// const contapoupanca: ContaPoupanca = new ContaPoupanca(4, 789, 2, "Sylvanas Correventos", 90000.0, 300.0);
//       contapoupanca.visualizar();
//       contapoupanca.sacar(50000.0);
//       contapoupanca.visualizar();
//       contapoupanca.depositar(10000.0);
//       contapoupanca.visualizar();
//     let opcao: number;

    while (true) {

        console.log(colors.bg.black, colors.fg.redstrong, 
                    "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
        console.log("                                                     ");
        console.log("                    BANCO DA HORDA                    ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
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
                    "\n\nCriar Conta\n\n", colors.reset);
                
                keyPress()
                break;
            case 2:
                console.log(colors.fg.redstrong, 
                    "\n\nListar todas as Contas\n\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.redstrong, 
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.redstrong, 
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.redstrong, 
                    "\n\nApagar uma Conta\n\n", colors.reset);

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

