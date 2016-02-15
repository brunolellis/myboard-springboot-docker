# Spring Boot e Docker

Projeto simples para demonstrar o uso de Spring Boot e Docker. 

O foco deste projeto é no uso do Docker Compose, para explorar a dependência (link) entre aplicação (Spring Boot) e o banco de dados (MySQL).

Vamos utilizar as portas 8080 e 3306 para este exemplo. Portanto, elas precisam estar disponíveis para uso no seu computador.

### Pré-requisitos
- O Maven deve estar instalado. Veja [como instalar o Maven aqui](https://maven.apache.org/install.html).
- O Docker deve estar instalado. Veja [como instalar o Docker aqui](https://docs.docker.com/engine/installation/).
- O Docker Compose deve estar instalado. Veja [como instalar o Docker Compose aqui](https://docs.docker.com/compose/install/).

### Passos para execução
1. Clonar o projeto localmente: `git clone https://github.com/brunolellis/myboard-springboot-docker.git`
2. Subir os contêineres _web_ e _db_: `docker-compose up`
3. Criar e visualizar posts: [http://localhost:8080](http://localhost:8080)

[![Build Status](https://api.travis-ci.org/brunolellis/myboard-springboot-docker.svg?branch=master)](https://travis-ci.org/brunolellis/myboard-springboot-docker)

### O que está realmente acontecendo?
É possível gerar uma imagem Docker a partir do Maven e esse processo é facilitado pelo plugin do [Spotify docker-maven-plugin](https://github.com/spotify/docker-maven-plugin).

O [pom.xml](https://github.com/brunolellis/myboard-springboot-docker/blob/spotify/pom.xml#L85) está configurado para utilizar o plugin citado acima e publicar uma imagem no Docker Hub. 

Dessa forma, ao executar o comando `mvn clean package docker:build -DpushImage` os seguintes passos serão executados:
1. Compilação e geração do pacote jar executável (`target/myboard-0.0.1-SNAPSHOT.jar`);
2. Criação de uma imagem conforme especificado no arquivo [Dockerfile](https://github.com/brunolellis/myboard-springboot-docker/blob/spotify/docker/Dockerfile), além das informações de nome, versão, etc no pom.xml;
3. Publicação da imagem no [Docker Hub](https://hub.docker.com/r/brunolellis/myboard/).
> Obs: a autenticação desse passo necessita de configuração do settings.xml do Maven conforme o seguinte trecho:
> `vi ~/.m2/settings.xml`
```xml
  <servers>
    <server>
      <id>docker-hub</id>
      <username>brunolellis</username>
      <password>{ENCRYPTED PASSWORD}</password>
    </server>
  </servers>
```

### Como executar tudo isso?
O arquivo [docker-compose.yml](https://github.com/brunolellis/myboard-springboot-docker/blob/spotify/docker-compose.yml) está configurando para ler a imagem "brunolellis/myboard" mais recente.

Ao executar o comando `docker-compose up`, o Docker fará a verificação se a sua imagem é a mais recente (e a atualização automaticamente, caso não seja) e executará essa imagem realizando o link com o contêiner mysql.

