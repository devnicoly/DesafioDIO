# DesafioDIO

[ Português ](#português) | [ English ](#english)

---

<a name="português"></a>
## Português

Projeto desenvolvido durante um bootcamp da DIO (Digital Innovation One) com o objetivo de praticar lógica de programação e conceitos de JavaScript, incluindo classes, métodos, estruturas condicionais (`if/else if` e `switch`) e modularização.

O projeto é dividido em três lógicas principais:

1. Um sistema de heróis que possuem nome, idade e tipo, e executam ataques diferentes conforme sua classe.
2. Um cálculo de ranqueada, que determina o nível de um herói com base no saldo entre vitórias e derrotas.
3. Uma classificação de nível de jogador com base na quantidade de XP acumulada.

---

### Estrutura do projeto

O projeto é composto por três arquivos principais:

- **classesJogo.js**: Contém a definição da classe `Heroi`, com atributos (nome, idade, tipo) e o método `atacar()`, que usa `switch` para definir o ataque conforme o tipo do herói.
- **ranqueada.js**: Contém a função `saldoRanqueada(vitorias, derrotas)`, que calcula o saldo (vitórias menos derrotas) e retorna o nível correspondente.
- **ind.js**: Arquivo principal (entry point) que contém a classificação de nível por XP do jogador e executa o programa, exibindo os resultados no console.

---

### Como funciona

#### Parte 1 - Heróis

Cada herói é criado a partir da classe `Heroi`, recebendo nome, idade e tipo. Ao chamar o método `atacar()`, o programa verifica o tipo do herói e exibe no console qual ataque foi utilizado.

Tipos de herói e seus ataques:

| Tipo       | Ataque                  |
|------------|-------------------------|
| mago       | usou magia              |
| guerreiro  | usou espada             |
| monge      | usou artes marciais     |
| ninja      | usou shuriken           |
| outro      | usou um ataque indefinido |

#### Parte 2 - Ranqueada

A função `saldoRanqueada` recebe a quantidade de vitórias e derrotas, calcula o saldo e retorna uma mensagem com o nível correspondente.

Regras de níveis:

| Saldo (vitórias - derrotas) | Nível     |
|-----------------------------|-----------|
| Menor que 10                | Ferro     |
| 11 a 20                     | Bronze    |
| 21 a 50                     | Prata     |
| 51 a 80                     | Ouro      |
| 81 a 90                     | Diamante  |
| 91 a 100                    | Lendário  |
| 101 ou mais                 | Imortal   |

#### Parte 3 - Classificação por XP

O jogador `welldorm` possui 5720 de XP, e o programa verifica em qual faixa de XP o valor se encaixa e exibe o nível correspondente.

Regras de níveis por XP:

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

Para os heróis criados no código:

```
O mago atacou usando usou magia
O guerreiro atacou usando usou espada
```

Para a ranqueada com 500 vitórias e 90 derrotas:

```
O herói tem saldo de 410 e está no nível: Imortal
```

Para o jogador `welldorm` com 5720 de XP:

```
welldorm É nível Ouro.
```

---

### Código

Abaixo, os arquivos do projeto.

#### classesJogo.js

```javascript
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque indefinido';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi1 = new Heroi('Herói1', 25, 'mago');
heroi1.atacar();

const heroi2 = new Heroi('Herói2', 30, 'guerreiro');
heroi2.atacar();

module.exports = Heroi;
```

#### ranqueada.js

```javascript
function saldoRanqueada(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    let level;

    if (saldo < 10) {
        level = "Ferro";
    } else if (saldo >= 11 && saldo <= 20) {
        level = "Bronze";
    } else if (saldo >= 21 && saldo <= 50) {
        level = "Prata";
    } else if (saldo >= 51 && saldo <= 80) {
        level = "Ouro";
    } else if (saldo >= 81 && saldo <= 90) {
        level = "Diamante";
    } else if (saldo >= 91 && saldo <= 100) {
        level = "Lendário";
    } else if (saldo >= 101) {
        level = "Imortal";
    }

    let mensagem = "O herói tem saldo de " + saldo + " e está no nível: " + level;

    return mensagem;
}

let resultado = saldoRanqueada(500, 90);
console.log(resultado);

module.exports = saldoRanqueada;
```

#### ind.js

```javascript
let player = "welldorm";
let xP = 5720;
let nivel;

if (xP < 1000) {
    nivel = " É nível Ferro.";
} else if (xP >= 1001 && xP <= 2000) {
    nivel = " É nível Bronze.";
} else if (xP >= 2001 && xP <= 5000) {
    nivel = " É nível Prata.";
} else if (xP >= 5001 && xP <= 7000) {
    nivel = " É nível Ouro.";
} else if (xP >= 7001 && xP <= 8000) {
    nivel = " É nível Platina.";
} else if (xP >= 8001 && xP <= 9000) {
    nivel = " É nível Ascendente.";
} else if (xP >= 9001 && xP <= 10000) {
    nivel = " É nível Imortal.";
} else if (xP >= 10001) {
    nivel = " É nível Radiante.";
}

console.log(player + nivel);
```

---

### Melhorias futuras

- Permitir entrada dinâmica de dados pelo usuário.
- Adicionar testes automatizados para as funções.
- Criar uma interface visual com HTML e CSS.
- Refatorar para usar objetos de mapeamento ao invés de vários `else if`.

---

### Autora

Desenvolvido por Nicoly Alves dos Santos.

LinkedIn: https://www.linkedin.com/in/devnicoly  
GitHub: https://github.com/devnicoly

---

### Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, estudar e modificar.

---

<a name="english"></a>
## English

Project developed during a DIO (Digital Innovation One) bootcamp with the goal of practicing programming logic and JavaScript concepts, including classes, methods, conditional structures (`if/else if` and `switch`), and modularization.

The project is divided into three main features:

1. A hero system where each hero has a name, age, and type, and performs different attacks depending on their class.
2. A ranked match calculation that determines a hero's rank based on the balance between wins and losses.
3. A player level classification based on accumulated XP.

---

### Project structure

The project consists of three main files:

- **classesJogo.js**: Contains the definition of the `Heroi` (Hero) class, with attributes (name, age, type) and the `atacar()` (attack) method, which uses `switch` to define the attack based on the hero type.
- **ranqueada.js**: Contains the `saldoRanqueada(vitorias, derrotas)` function, which calculates the balance (wins minus losses) and returns the corresponding rank.
- **ind.js**: Main file (entry point) that contains the player level classification based on XP and runs the program, displaying the results in the console.

---

### How it works

#### Part 1 - Heroes

Each hero is created from the `Heroi` class, receiving a name, age, and type. When the `atacar()` method is called, the program checks the hero type and displays which attack was used in the console.

Hero types and their attacks:

| Type       | Attack                  |
|------------|-------------------------|
| mago       | usou magia              |
| guerreiro  | usou espada             |
| monge      | usou artes marciais     |
| ninja      | usou shuriken           |
| other      | usou um ataque indefinido |

#### Part 2 - Ranked match

The `saldoRanqueada` function receives the number of wins and losses, calculates the balance, and returns a message with the corresponding rank.

Rank rules:

| Balance (wins - losses) | Rank      |
|-------------------------|-----------|
| Less than 10            | Iron      |
| 11 to 20                | Bronze    |
| 21 to 50                | Silver    |
| 51 to 80                | Gold      |
| 81 to 90                | Diamond   |
| 91 to 100               | Legendary |
| 101 or more             | Immortal  |

#### Part 3 - XP-based classification

The player `welldorm` has 5720 XP, and the program checks which XP range the value falls into and displays the corresponding rank.

XP rank rules:

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

For the heroes created in the code:

```
O mago atacou usando usou magia
O guerreiro atacou usando usou espada
```

For the ranked match with 500 wins and 90 losses:

```
O herói tem saldo de 410 e está no nível: Imortal
```

For the player `welldorm` with 5720 XP:

```
welldorm É nível Ouro.
```

---

### Code

Below are the project files.

#### classesJogo.js

```javascript
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque indefinido';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi1 = new Heroi('Herói1', 25, 'mago');
heroi1.atacar();

const heroi2 = new Heroi('Herói2', 30, 'guerreiro');
heroi2.atacar();

module.exports = Heroi;
```

#### ranqueada.js

```javascript
function saldoRanqueada(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    let level;

    if (saldo < 10) {
        level = "Ferro";
    } else if (saldo >= 11 && saldo <= 20) {
        level = "Bronze";
    } else if (saldo >= 21 && saldo <= 50) {
        level = "Prata";
    } else if (saldo >= 51 && saldo <= 80) {
        level = "Ouro";
    } else if (saldo >= 81 && saldo <= 90) {
        level = "Diamante";
    } else if (saldo >= 91 && saldo <= 100) {
        level = "Lendário";
    } else if (saldo >= 101) {
        level = "Imortal";
    }

    let mensagem = "O herói tem saldo de " + saldo + " e está no nível: " + level;

    return mensagem;
}

let resultado = saldoRanqueada(500, 90);
console.log(resultado);

module.exports = saldoRanqueada;
```

#### ind.js

```javascript
let player = "welldorm";
let xP = 5720;
let nivel;

if (xP < 1000) {
    nivel = " É nível Ferro.";
} else if (xP >= 1001 && xP <= 2000) {
    nivel = " É nível Bronze.";
} else if (xP >= 2001 && xP <= 5000) {
    nivel = " É nível Prata.";
} else if (xP >= 5001 && xP <= 7000) {
    nivel = " É nível Ouro.";
} else if (xP >= 7001 && xP <= 8000) {
    nivel = " É nível Platina.";
} else if (xP >= 8001 && xP <= 9000) {
    nivel = " É nível Ascendente.";
} else if (xP >= 9001 && xP <= 10000) {
    nivel = " É nível Imortal.";
} else if (xP >= 10001) {
    nivel = " É nível Radiante.";
}

console.log(player + nivel);
```

---

### Future improvements

- Allow dynamic data input by the user.
- Add automated tests for the functions.
- Create a visual interface with HTML and CSS.
- Refactor to use mapping objects instead of multiple `else if` statements.

---

### Author

Developed by Nicoly Alves dos Santos.

LinkedIn: https://www.linkedin.com/in/devnicoly  
GitHub: https://github.com/devnicoly

---

### License

This project is licensed under the MIT License. Feel free to use, study, and modify it.
