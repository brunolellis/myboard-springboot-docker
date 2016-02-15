FROM java:openjdk-8-jdk
MAINTAINER Bruno Lellis "https://github.com/brunolellis"

RUN mkdir /app
ADD myboard-0.0.1-SNAPSHOT.jar /app

WORKDIR /app

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/app/myboard-0.0.1-SNAPSHOT.jar"]