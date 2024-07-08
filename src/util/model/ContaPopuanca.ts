import { Conta } from "./Conta";

export class ContaPoupanca extends Conta {
  //ASSINATURA DA CLASSE conta corrente como HERANÇA da CLASSE conta

  private _aniversario: number;
  //atributo exclusivo da classe conta poupança
  //o PRIVATE é usado para manter o dado encapsulado
  //atributos privados são iniciados com o underline

  constructor(
    numero: number,
    agencia: number,
    tipo: number,
    titular: string,
    saldo: number,
    aniversario: number
  ) {
    super(numero, agencia, tipo, titular, saldo);
    this._aniversario = aniversario;
  }

  public get aniversario() {
    return this._aniversario;
  }

  public set limite(aniversario: number) {
    this._aniversario = aniversario;
  }

  public visualizar(): void {
    super.visualizar();
    console.log("Aniversario da Conta: " + this._aniversario);
  }
}
