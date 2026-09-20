# DesafioDIO

[ Português ](#português) | [ English ](#english)

---

<a name="português"></a>
## Português

Projeto desenvolvido durante um bootcamp da DIO (Digital Innovation One) com o objetivo de praticar lógica de programação e conceitos de JavaScript, incluindo modularização, classes e estruturas condicionais.

O programa classifica um jogador em um nível (ranking) com base na quantidade de XP (pontos de experiência) acumulada.

---

### Estrutura do projeto

O projeto é composto por três arquivos principais:

- **classesJogo.js**: Contém a definição da classe `Jogador`, que representa um jogador com nome e XP, além de métodos para exibir o nível.
- **ranqueada.js**: Contém a lógica de classificação dos níveis com base nas faixas de XP (Ferro, Bronze, Prata, Ouro, Platina, Ascendente, Imortal, Radiante).
- **ind.js**: Arquivo principal (entry point) que importa as classes e funções e executa o programa, exibindo o resultado no console.

---

### Como funciona

O jogador é instanciado com um nome e uma quantidade de XP. A função de classificação verifica em qual faixa de XP o valor se encaixa e retorna o nível correspondente. O resultado é exibido no console.

### Regras de níveis

| Faixa de XP      | Nível       |
|------------------|-------------|
| Menos de 1000    | Ferro       |
| 1001 a 2000      | Bronze      |
| 2001 a 5000      | Prata       |
| 5001 a 7000      | Ouro        |
| 7001 a 8000      | Platina     |
| 8001 a 9000      | Ascendente  |
| 9001 a 10000     | Imortal     |
| 10001 ou mais    | Radiante    |

---

### Tecnologias utilizadas

- JavaScript
- Node.js (para executar no terminal)

---

### Como executar

#### Pré-requisitos

- Ter o Node.js instalado.

#### Passo a passo

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/DesafioDIO.git
```

2. Entre na pasta do projeto:

```bash
cd DesafioDIO
```

3. Execute o arquivo principal:

```bash
node ind.js
```

---

### Exemplo de saída

Para um jogador com 5720 de XP:

```
welldorm É nível Ouro.
```

---

### Código

Abaixo, exemplos de como os arquivos podem ser estruturados.

#### ranqueada.js

```javascript
function classificarNivel(xP) {
    if (xP < 1000) {
        return "Ferro";
    } else if (xP >= 1001 && xP <= 2000) {
        return "Bronze";
    } else if (xP >= 2001 && xP <= 5000) {
        return "Prata";
    } else if (xP >= 5001 && xP <= 7000) {
        return "Ouro";
    } else if (xP >= 7001 && xP <= 8000) {
        return "Platina";
    } else if (xP >= 8001 && xP <= 9000) {
        return "Ascendente";
    } else if (xP >= 9001 && xP <= 10000) {
        return "Imortal";
    } else if (xP >= 10001) {
        return "Radiante";
    }
}

module.exports = classificarNivel;
```

#### classesJogo.js

```javascript
const classificarNivel = require('./ranqueada');

class Jogador {
    constructor(nome, xP) {
        this.nome = nome;
        this.xP = xP;
        this.nivel = classificarNivel(xP);
    }

    exibirNivel() {
        return `${this.nome} É nível ${this.nivel}.`;
    }
}

module.exports = Jogador;
```

#### ind.js

```javascript
const Jogador = require('./classesJogo');

const player = new Jogador("welldorm", 5720);
console.log(player.exibirNivel());
```

---

### Autora

Desenvolvido por [Nicoly Alves dos Santos].

LinkedIn: https://www.linkedin.com/in/devnicoly  
GitHub: https://github.com/devnicoly

---

### Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, estudar e modificar.

---

<a name="english"></a>
## English

Project developed during a DIO (Digital Innovation One) bootcamp with the goal of practicing programming logic and JavaScript concepts, including modularization, classes, and conditional structures.

The program classifies a player into a rank (level) based on their accumulated XP (experience points).

---

### Project structure

The project consists of three main files:

- **classesJogo.js**: Contains the definition of the `Jogador` (Player) class, which represents a player with a name and XP, along with methods to display the rank.
- **ranqueada.js**: Contains the ranking logic based on XP ranges (Iron, Bronze, Silver, Gold, Platinum, Ascendant, Immortal, Radiant).
- **ind.js**: Main file (entry point) that imports the classes and functions and runs the program, displaying the result in the console.

---

### How it works

The player is instantiated with a name and an XP amount. The ranking function checks which XP range the value falls into and returns the corresponding rank. The result is displayed in the console.

### Rank rules

| XP Range         | Rank        |
|------------------|-------------|
| Less than 1000   | Iron        |
| 1001 to 2000     | Bronze      |
| 2001 to 5000     | Silver      |
| 5001 to 7000     | Gold        |
| 7001 to 8000     | Platinum    |
| 8001 to 9000     | Ascendant   |
| 9001 to 10000    | Immortal    |
| 10001 or more    | Radiant     |

---

### Technologies used

- JavaScript
- Node.js (to run in the terminal)

---

### How to run

#### Requirements

- Node.js installed.

#### Step by step

1. Clone the repository:

```bash
git clone https://github.com/seu-usuario/DesafioDIO.git
```

2. Enter the project folder:

```bash
cd DesafioDIO
```

3. Run the main file:

```bash
node ind.js
```

---

### Example output

For a player with 5720 XP:

```
welldorm É nível Ouro.
```

---

### Code

Below are examples of how the files can be structured.

#### ranqueada.js

```javascript
function classificarNivel(xP) {
    if (xP < 1000) {
        return "Ferro";
    } else if (xP >= 1001 && xP <= 2000) {
        return "Bronze";
    } else if (xP >= 2001 && xP <= 5000) {
        return "Prata";
    } else if (xP >= 5001 && xP <= 7000) {
        return "Ouro";
    } else if (xP >= 7001 && xP <= 8000) {
        return "Platina";
    } else if (xP >= 8001 && xP <= 9000) {
        return "Ascendente";
    } else if (xP >= 9001 && xP <= 10000) {
        return "Imortal";
    } else if (xP >= 10001) {
        return "Radiante";
    }
}

module.exports = classificarNivel;
```

#### classesJogo.js

```javascript
const classificarNivel = require('./ranqueada');

class Jogador {
    constructor(nome, xP) {
        this.nome = nome;
        this.xP = xP;
        this.nivel = classificarNivel(xP);
    }

    exibirNivel() {
        return `${this.nome} É nível ${this.nivel}.`;
    }
}

module.exports = Jogador;
```

#### ind.js

```javascript
const Jogador = require('./classesJogo');

const player = new Jogador("welldorm", 5720);
console.log(player.exibirNivel());
```

---

### Author

Developed by [Nicoly Alves dos Santos].

LinkedIn: https://www.linkedin.com/in/devnicoly  
GitHub: https://github.com/devnicoly

---

### License

This project is licensed under the MIT License. Feel free to use, study, and modify it.
