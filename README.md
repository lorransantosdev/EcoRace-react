# Eco Race - Projeto Sustentável de Corrida com Simulação em Miniatura 🚗🌱

## Desenvolvedores:
- **Enzo Santos**
- **Lorran Santos**
- **Kathe Oliveira**

---

## 📄 Descrição do Projeto

O **Eco Race** é um projeto interativo que permite aos usuários **registrar e comparar os tempos de suas corridas** com o tempo adaptado (proporcional) aos tempos do corredores reais da fórmula E nas pistas. Inspirado pela sustentabilidade e inovação do campeonato mundial de Fórmula E, o Eco Race utiliza **miniaturas de carros de controle remoto** para simular uma experiência de corrida competitiva.

### 🎯 Objetivo do Projeto
- Proporcionar uma experiência prática e educativa sobre a importância da sustentabilidade e inovação no automobilismo.
- Incentivar a competição saudável por meio de desafios de tempo em circuitos famosos.
- Facilitar o registro e a comparação dos tempos de volta, permitindo aos usuários verem como se saem em relação aos melhores tempos registrados no site.

---

## 🔧 Tecnologias Utilizadas
- **Frontend:**
  - React.js
  - Tailwind CSS
  - Vite.js (como build tool)
  - JavaScript
- **Backend:**
  - Manipulação de dados através do `localStorage` do navegador.
- **Imagens e Ícones:**
  - Arquivos SVG e imagens para simulação dos circuitos e logos.

---

## 🛠️ Sistema de Cadastro e Login com `localStorage`

O **Eco Race** possui um sistema de **cadastro e login** totalmente integrado com o `localStorage` do navegador. Isso permite que as informações dos usuários sejam armazenadas localmente, proporcionando uma experiência de uso rápida e segura.

### 📥 Funcionalidades do Sistema de Cadastro e Login:
1. **Cadastro de Usuários:**
   - Os usuários podem se cadastrar fornecendo **nome**, **e-mail** e **senha**.
   - As informações são validadas para garantir que todos os campos estejam preenchidos corretamente.
   - Após o cadastro, os dados são armazenados no `localStorage` usando o e-mail como chave principal.

2. **Login de Usuários:**
   - Os usuários podem fazer login fornecendo o **e-mail** e **senha** cadastrados.
   - O `localStorage` é utilizado para verificar se o e-mail existe e se a senha fornecida é correta.
   - Após o login bem-sucedido, o e-mail do usuário é armazenado para acompanhar as atividades e manter os registros de desempenho no projeto.

3. **Armazenamento de Dados:**
   - O `localStorage` é utilizado para armazenar:
     - Dados de **tempo** das voltas.
     - Quantidade de **Carbon Coins** acumulados.
     - Informações do usuário (nome, e-mail, tempo total).

### 🗂️ Como o Sistema Funciona:

- **Cadastro:**
  - As informações fornecidas no cadastro são salvas no `localStorage` em formato JSON.
  - Exemplo:
    ```json
    {
      "enzo@example.com": {
        "nome": "Enzo Santos",
        "email": "enzo@example.com",
        "senha": "senha123",
        "totalSeconds": 0,
        "carbonsCoins": 0
      }
    }
    ```
- **Login:**
  - O sistema verifica se o e-mail existe no `localStorage`.
  - Compara a senha fornecida com a armazenada.
  - Se os dados coincidirem, o usuário é autenticado e pode acessar o sistema.

### 🔄 Atualização de Dados
Cada vez que o usuário completa uma corrida ou acumula `Carbon Coins`, o `localStorage` é atualizado com os novos valores, mantendo um histórico atualizado do desempenho e progresso do usuário.

---

## 🌿 Sustentabilidade na Fórmula E

A **Fórmula E** é o primeiro campeonato mundial de corridas totalmente elétrico, que visa promover a sustentabilidade e o desenvolvimento de novas tecnologias para veículos elétricos. Com circuitos localizados em cidades emblemáticas ao redor do mundo, a Fórmula E se compromete a utilizar energia limpa e tecnologias sustentáveis, além de realizar iniciativas que reduzem o impacto ambiental do evento.

### Por Que a Fórmula E é Sustentável?
1. **Uso de Energia Limpa:** Todos os carros são movidos por baterias elétricas, eliminando as emissões de gases de efeito estufa durante as corridas.
2. **Promoção de Inovação:** As tecnologias desenvolvidas na Fórmula E são testadas e otimizadas para serem utilizadas em carros de passeio, ajudando a acelerar a adoção de veículos elétricos no mercado automotivo.
3. **Iniciativas de Redução de Resíduos:** Desde a reciclagem de baterias até o uso de materiais mais sustentáveis na fabricação dos carros, a Fórmula E se compromete a reduzir o desperdício em todas as áreas do campeonato.
4. **Conscientização Ambiental:** A Fórmula E promove campanhas educacionais para conscientizar o público sobre a importância da sustentabilidade e do uso de energia renovável.

### Impacto Ambiental da Fórmula E
Ao contrário de outras categorias do automobilismo, a Fórmula E foca na **neutralidade de carbono**, buscando compensar suas emissões através de práticas como reflorestamento e uso de energia renovável em suas operações. Isso faz da Fórmula E um exemplo de como eventos de grande escala podem ser realizados de forma mais consciente e com menor impacto ambiental.

---

## 🏁 Funcionalidades do Eco Race

### ⚙️ Sistema de Contador de Tempo
- Os usuários podem iniciar e parar um contador para marcar o tempo de suas voltas nos circuitos com seus carrinhos de controle remoto.
- O tempo é registrado e comparado com o tempo recorde da Fórmula E e dos tempos no site, permitindo uma análise da eficiência e do desempenho de cada piloto.

### 🌍 Simulação de Circuitos Famosos
- Os usuários podem visualizar e competir em miniaturas de circuitos famosos, como:
  - **Circuito de Mônaco**
  - **Circuito da Cidade do México**

### 🔄 Registro e Comparação de Desempenho
- Após registrar o tempo no contador, o usuário pode comparar seu desempenho com outros tempos já registrados no site.
- A interface exibe os **tempos recordes** e o **tempo do usuário**, permitindo uma comparação direta e estimulando a competição saudável.

### 💡 Aprendizado Sobre Eficiência Energética
- Além da simulação das corridas, o Eco Race possui um sistema que relaciona a eficiência dos carros de corrida em miniatura com os carros reais, incentivando o aprendizado sobre consumo de energia e aerodinâmica.

### 🔄 Armazenamento de Dados
- Utiliza o `localStorage` para armazenar os tempos dos usuários e suas pontuações em `Carbon Coins`, uma métrica de incentivo que simula a moeda sustentável do projeto.

---

## 📈 Relacionamento com o Tamanho Real e Miniatura

A simulação foi dimensionada de forma proporcional (regra de 3 e divisões das quantidades de voltas) para proporcionar uma experiência de aprendizado significativa:

- **Carros de Fórmula E Reais:**
  - Comprimento: 5 metros.
  - Tempo médio de volta no Circuito de Mônaco: 50 minutos e 15 segundos.

- **Carros do Projeto Eco Race:**
  - Comprimento: 0,40 metros (40 cm) aproximadamente.
  - Tempo médio simulado: Proporcional ao tempo real, ajustado para o tamanho reduzido.

---

## 📝 Considerações Finais

O **Eco Race** não é apenas um projeto, mas um convite para entender a importância da sustentabilidade e inovação tecnológica. Através de competições, comparações e experimentos, nosso objetivo é motivar a próxima geração a adotar práticas mais conscientes e sustentáveis, não apenas no esporte, mas em todos os aspectos da vida.

---

##Aproveite a corrida e ajude a construir um futuro mais verde! 🌍✨
