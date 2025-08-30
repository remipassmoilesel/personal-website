FROM ubuntu:22.04

ENV DEBIAN_FRONTEND="noninteractive";

RUN apt-get update && apt-get install -y curl build-essential

RUN curl -L https://github.com/jgm/pandoc/releases/download/3.1.12.1/pandoc-3.1.12.1-1-amd64.deb -o /tmp/pandoc.deb \
      && dpkg -i /tmp/pandoc.deb \
      && rm -rf /tmp/pandoc.deb

RUN apt-get update && apt-get install -y wkhtmltopdf

# See https://deb.nodesource.com/
RUN apt-get update && apt-get install -y ca-certificates curl gnupg && \
    curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg && \
    NODE_MAJOR=20 && \
    echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list && \
    apt-get update && apt-get install nodejs -y

RUN npm install --global pnpm

RUN useradd --create-home continuous-integration
USER continuous-integration


