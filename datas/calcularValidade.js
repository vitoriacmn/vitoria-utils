export function calcularValidade(dias = 10) {
  const hoje = new Date();
  hoje.setDate(hoje.getDate() + dias);
  return hoje.toLocaleDateString('pt-BR');
}
