# Seu IMC

Uma aplicação web simples para calcular o Índice de Massa Corporal (IMC) a partir do peso e altura informados pelo usuário.

## 📋 Funcionalidades

- Entrada de peso e altura.
- Cálculo automático do IMC ao clicar em "Enviar".
- Exibição da classificação do IMC (Abaixo do Peso, Peso Normal, Sobrepeso, Obesidade).
- Validação dos campos para garantir que apenas números sejam inseridos.
- Interface responsiva e moderna.

## 🚀 Como usar

1. Clone ou baixe este repositório.
2. Abra o arquivo [`index.html`](index.html) em seu navegador.
3. Digite seu peso (em kg) e altura (em metros, ex: 1.80).
4. Clique em **Enviar** para ver seu IMC e a classificação correspondente.

## 🛠️ Estrutura do Projeto

- [`index.html`](index.html): Estrutura principal da página.
- [`js/index.js`](js/index.js): Lógica de cálculo e validação do IMC.
- [`style/style.css`](style/style.css): Estilos e responsividade da aplicação.

## 📏 Fórmula do IMC

O IMC é calculado pela fórmula:

```
IMC = peso / (altura * altura)
```

Onde `peso` está em quilogramas (kg) e `altura` em metros (m). A classificação é feita com base nos seguintes intervalos:

- Abaixo do Peso: IMC < 18.5
- Peso Normal: 18.5 <= IMC < 24.9
- Sobrepeso: 25 <= IMC < 29.9
- Obesidade: IMC >= 30

## 📄 Licença

Este projeto está sob a licença MIT.

---

Desenvolvido por Swetony Ancelmo.
