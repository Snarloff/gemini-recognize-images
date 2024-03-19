# Gemini Recognize Images

https://github.com/Snarloff/gemini-recognize-images/assets/46792575/3cf0f1a1-cbf8-4d03-8569-18ae59a75d8c

O Gemini Recognize Images é um projeto desenvolvido com o objetivo de fornecer uma interface para o reconhecimento de imagens através da integração com a API do Gemini. Esta aplicação permite aos usuários enviar URLs de imagens, que são então processadas pela API do Gemini para extrair descrições detalhadas do conteúdo visual das imagens.

## Tecnologias Utilizadas

- **Next.js 14**: Next.js é um framework React que oferece funcionalidades avançadas para o desenvolvimento de aplicações web, incluindo renderização do lado do servidor, roteamento e suporte para CSS em módulos.
- **Tailwind CSS**: Tailwind CSS é uma biblioteca de utilitários CSS altamente personalizável que permite estilizar componentes de forma rápida e eficiente, utilizando uma abordagem baseada em classes utilitárias.
- **API do Gemini**: A API do Gemini é uma poderosa ferramenta que possui reconhecimento de imagem baseada em inteligência artificial. Ela oferece recursos avançados para analisar e descrever o conteúdo visual de imagens de forma precisa e detalhada.

## Funcionalidades Principais

- **Envio de URLs de Imagens**: Os usuários podem fornecer URLs de imagens através de um campo de entrada na interface da aplicação.
- **Processamento de Imagens com o Gemini**: As URLs das imagens fornecidas são enviadas para a API do Gemini, que realiza o processamento para extrair descrições detalhadas do conteúdo visual das imagens.
- **Exibição dos Resultados**: As descrições resultantes do processamento das imagens pelo Gemini são exibidas na interface da aplicação, permitindo aos usuários visualizar e interpretar as informações extraídas.

## Configuração do Projeto

1. **Instalação das Dependências**: Execute `npm install` para instalar todas as dependências do projeto.
2. **Configuração da Chave da API do Gemini**: É necessário possuir uma chave de API válida do Gemini para utilizar este projeto. Esta chave deve ser configurada no arquivo de ambiente `.env` conforme o exemplo fornecido no arquivo `.env.example`.

## Execução do Projeto

Após a configuração do projeto, você pode iniciar a aplicação executando o comando:

```bash
npm run dev
```

Isso iniciará o servidor de desenvolvimento do Next.js e disponibilizará a aplicação em `http://localhost:3000`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues relatando problemas, sugestões ou melhorias para o projeto. Pull requests também são encorajados.

---
