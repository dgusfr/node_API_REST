# Use uma imagem oficial do Node.js como imagem pai. A versão Alpine é menor.
FROM node:18-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copia package.json e package-lock.json para aproveitar o cache do Docker
COPY package*.json ./

# Instala as dependências da aplicação para o ambiente de produção
RUN npm install --production

# Copia o restante do código-fonte da aplicação
COPY src/ ./src/

# A aplicação escuta nesta porta
EXPOSE 3000

# Comando para iniciar a aplicação
CMD [ "node", "src/server.js" ]