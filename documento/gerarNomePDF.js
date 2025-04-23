export function gerarNomePDF({ empresa, plano, modalidade }) {
  const normalizar = texto => texto.replace(/\s+/g, '_');
  return `Proposta_TomTicket_${normalizar(empresa)}-${normalizar(plano)}(${normalizar(modalidade)}).pdf`;
}
