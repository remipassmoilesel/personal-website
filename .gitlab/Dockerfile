FROM ubuntu:22.04

ENV DEBIAN_FRONTEND="noninteractive";

RUN apt-get update && apt-get install -y curl build-essential

RUN curl -L https://github.com/jgm/pandoc/releases/download/2.11.2/pandoc-2.11.2-1-amd64.deb -o /tmp/pandoc.deb \
      && dpkg -i /tmp/pandoc.deb \
      && rm -rf /tmp/pandoc.deb \
      && apt-get install -y texlive texlive-fonts-extra

RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash && apt-get install nodejs

RUN useradd --create-home continuous-integration
USER continuous-integration


