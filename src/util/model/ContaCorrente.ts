import { Conta } from "./Conta";

export class ContaCorrente extends Conta {
  //ASSINATURA DA CLASSE conta corrente como HERANÇA da CLASSE conta

  private _limite: number;
  //atributo exclusivo da classe conta corrente
  //o PRIVATE é usado para manter o dado encapsulado
  //atributos privados são iniciados com o underline

  constructor(
    numero: number,
    agencia: number,
    tipo: number,
    titular: string,
    saldo: number,
    limite: number
  ) {
    super(numero, agencia, tipo, titular, saldo);
    this._limite = limite;
  }

  public get limite() {
    return this._limite;
  }

  public set limite(limite: number) {
    this._limite = limite;
  }

  public sacar(valor: number): boolean {
    if (this.saldo + this._limite < valor) {
      console.log("\nSaldo Insuficiente! ");
      return false;
    }
    this.saldo = this.saldo - valor;
    return true;
  }

  public visualizar(): void {
    super.visualizar();
    console.log("Limite: " + this._limite.toFixed(2));
  }
}
