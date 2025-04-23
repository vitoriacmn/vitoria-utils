export function calcularValorTotal(valorUnitario, quantidade, modalidade) {
  const multiplicador = { Mensal: 1, Semestral: 6, Anual: 12 };
  return valorUnitario * quantidade * (multiplicador[modalidade] || 1);
}
