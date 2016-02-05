# Spring Boot e Docker

Projeto simples para demonstrar o uso de Spring Boot e Docker. 

O foco deste projeto é no uso do Docker Compose, para explorar a dependência (link) entre aplicação (Spring Boot) e o banco de dados (MySQL).

Vamos utilizar as portas 8080 e 3306 para este exemplo. Portanto, elas precisam estar disponíveis para uso no seu computador.

### Pré-requisitos
- O Maven deve estar instalado. Veja [como instalar o Maven aqui](https://maven.apache.org/install.html).
- O Docker deve estar instalado. Veja [como instalar o Docker aqui](https://docs.docker.com/engine/installation/).
- O Docker Compose deve estar instalado. Veja [como instalar o Docker Compose aqui](https://docs.docker.com/compose/install/).

### Passos para execução
1. Clonar o projeto localmente: `git clone https://github.com`
2. Empacotar a aplicação: `mvn package`
3. Subir os contêineres _web_ e _db_: `docker-compose up`
4. Criar um Post via JSON: `curl -H "Content-Type: application/json" -X POST -d '{"autor":"Bruno","titulo":"Primeiro post","texto":"Texto do primeiro post do blog!"}' http://localhost:8080/posts`
5. Visualizar os posts: http://localhost:8080/posts