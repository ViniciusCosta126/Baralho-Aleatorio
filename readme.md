# Baralho Aleatório

## Instalar dependências
Quando realizar o download ou clone do repositório, de o comando:
* yarn install ou npm install

Assim você instalara todas as dependências que precisa para conseguir rodar o projeto com todas as dependências. 
## Rodar projeto
Depois de instaladas todas as dependências do projeto rode o comando:
* yarn dev ou npm run dev

Isso fara com que um servidor de desenvolvimento comece a rodar e você consiga visualizar o projeto em um ambiente local. Cada alteração que for realizada na hora que for salva ele ja atualizara o ambiente novamente.

## Gerar build do projeto
Para buildar o projeto é bem simples você precisara rodar o comando:
* yarn build ou npm run build

Isso fará com que ele build o projeto e traga os arquivos para produção. Esses arquivos ficarão dentro da pasta dist

### Pagina Home

Nesta primeira página temos um simples formulário, onde você precisa digitar um nome para que consiga avançar para a próxima etapa. Depois que digitar o nome desejado basta clicar no botão ver cartas para que consiga ver as cartas aleatórias que foram trazidas da api.

### Pagina de Cards
Nesta página será feita a apresentação das 5 cartas aleatórias que foram montadas com o componente Card, onde ele pega algumas informações que a api retorna e monta o card.
Você poderá executar duas funções nesta pagina, a primeira seria para puxar novas cartas, encontrara um botão que poderá ser clicado ate 3 vezes assim trazendo 3 novas cartas para a tela, a cada clique a aplicação fara uma nova requisição a api e e mostrar as informações em forma de carta.
A segunda função será a de embaralhar as cartas. Ela nao tem um limite de vezes que pode ser clicada e tem um funcionamento bem simples, ela pega o array de cartas e executa o comando sort() para embaralhar o array, depois disso ele atualiza o estado da aplicação para atualizar o front end.


