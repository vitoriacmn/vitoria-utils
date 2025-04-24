# vitoria-utils

Repositório de funções utilitárias reutilizáveis, escritas em JavaScript, para facilitar o desenvolvimento de projetos comerciais, de proposta ou automação de tarefas.

---

## Funções disponíveis

### 📁 formatacao

#### `formatarMoeda(valor)`
Formata um número para o padrão de moeda brasileira (R$).

---

### 📁 datas

#### `calcularValidade(dias = 10)`
Retorna uma data formatada no padrão brasileiro, somando a quantidade de dias desejada a partir de hoje.

---

### 📁 math

#### `calcularDesconto(valorOriginal, percentual)`
Aplica um percentual de desconto sobre o valor original.

#### `calcularValorTotal(valorUnitario, quantidade, modalidade)`
Calcula o valor total com base na quantidade e modalidade de pagamento (`Mensal`, `Semestral`, `Anual`).

---

### 📁 documento

#### `gerarNomePDF({ empresa, plano, modalidade })`
Gera dinamicamente um nome de arquivo para uma proposta em PDF, padronizando espaços com underscores `_`.

---

## Como usar

Importar essas funções diretamente nos projetos JavaScript:

```js
import { formatarMoeda } from './formatacao/formatarMoeda.js';
