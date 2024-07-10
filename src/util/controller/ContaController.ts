import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from '../Colors';

export class ContaController implements ContaRepository{
    //a ContaControlle fica sublinhada antes de realizar o QuickFix para importar TODOS os métodos da conta repository
    //para isso, deve-se colocar o mouse sobre o nome ContaController e o próprio programa alertará o problema e dará a sugestão do QuickFix
    //ao realizar o QuickFix tudo que está a baixo aparecerá de forma genérica
    
    private listaContas: Array<Conta> = new Array<Conta>(); //Criamos um Array, do tipo Conta (Classe Abstrata), chamado listaContas
    numero: number = 0;  // Controlar os Números das Contas

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta !==  null)
            buscaConta.visualizar();
        else
            console.log("\nA conta: " + numero + " não foi encontrada!");
    }

    listarTodas(): void {
        for(let conta of this.listaContas) {
            conta.visualizar()
        }
    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
    console.log(colors.fg.green, "\nA Conta numero: " + conta.numero + " foi cadastrada com sucesso!", colors.reset)
    }

    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        if (buscaConta != null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log("\nA conta número: " + conta.numero + " foi atualizada com sucesso!");
        } else 
        console.log("\nA conta número: " + conta.numero + " não foi encontrada!")
    }

    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log("\nA conta número: " + numero + " foi deletada com sucesso!");
        } else 
        console.log("\nA conta número: " + numero + " não foi encontrada!")
    }

    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    
    // Métodos Auxiliares

    public gerarNumero(): number{
        return ++ this.numero;
    }

    public buscarNoArray(numero: number): Conta | null {
        
        for (let conta of this.listaContas){
            if (conta.numero === numero)
                return conta;
        }

        return null;
    }
}