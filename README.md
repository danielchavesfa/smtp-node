<a name="top"></a>

# SMTP com Node.js

<details>
  <summary>Índice</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#construido-com">Contruído com</a></li>
      </ul>
    </li>
    <li>
      <a href="#primeiros-passos">Primeiros passos</a>
      <ul>
        <li><a href="#prerequisitos">Pré-requisitos</a></li>
        <li><a href="#instalacao">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#uso">Caso de uso</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>
</details>

## Sobre o projeto

![Pequena demonstração](https://github.com/danielchavesfa/smtp-node/assets/93630038/9cb5a36b-43e9-46fc-af2c-69e3b7ad3163)

SMTP com Node.js é um pequeno projeto de envio de email usando SMTP usando o host do Hotmail, podendo também usar outro como Gmail.
A ideia aqui é apenas botar em prática conhecimentos adquiridos ao longo do tempo e documentar para futuros insights e aprimoramentos para meu portifólio pessoal. 🫡

<p align="right"><small>(<a href="#top">Voltar ao topo</a>)</small></p>

### Construído com

Por se tratar de apenas um projeto simples, usei apenas o simples. 😉

- Javascript Vanilla
- Node.js

<p align="right"><small>(<a href="#top">Voltar ao topo</a>)</small></p>

## Primeiros passos

Esse é um exemplo de você fazer uma cópia e fazer as devidas configurações para que você possa colocar o app para funcionar.

### Pré-requisitos

- Node.js
- npm

```sh
npm install npm@latest -g
```

### Instalação

Primeiro você precisa do pegar as configurações POP, IMAP ou SMTP do email que você quer usar, aqui vamos usar o Hotmail mesmo. Você pode achar essas informações nesse link ([POP, IMAP, and SMTP settings for Outlook.com - Microsoft Support](https://support.microsoft.com/en-us/office/pop-imap-and-smtp-settings-for-outlook-com-d088b986-291d-42b8-9564-9c414e2aa040#page-header)).

Você precisa pegar duas informações importantes para dar continuidade;
**SMTP server name**: _smtp-mail.outlook.com_
**SMTP port**: _587_

Depois disso, precisamos fazer a configuração das variáveis de ambiente no nosso projeto, eu fiz a configuração colocando o caminho `/backend/src/config/.env` você está livre para mudar no seu arquivo local _(não esqueça de mudar no script no package.json caso queira mudar)_.

![Exemplo de variáveis](https://github.com/danielchavesfa/smtp-node/assets/93630038/d6248d1f-f9e5-4149-9be4-4298e840c7e2)

Caso você queira fazer mudanças no corpo, no assunto do email, você pode fazer isso dentro da função `sendEmail` dentro do arquivo `server.js`.

Para mais informações acesse o site do "[Nodemailer: Exemplo de envio](https://nodemailer.com/about/#example)."

<p align="right"><small>(<a href="#top">Voltar ao topo</a>)</small></p>

## Caso de uso

Algo muito simples, depois que você configurar as variáveis de ambiente e iniciar o servidor, abra o arquivo HTML da pasta `/frontend/index.html` com o Live Server ou qualquer outra de sua preferência.
Faça o preenchimento do formulário e envie a mensagem, se tiver configurado da forma correta, chegará no email. 😉

<p align="right"><small>(<a href="#top">Voltar ao topo</a>)</small></p>

## Roadmap

- [x] Formulário de envio de email.

<p align="right"><small>(<a href="#top">Voltar ao topo</a>)</small></p>

## Contato

- [LinkedIn](https://www.linkedin.com/in/danielchavesfa/)
- [GitHub](https://github.com/danielchavesfa)
- [Instagram](https://www.instagram.com/danielchaves89/)
- [Link do Projeto](https://github.com/danielchavesfa/smtp-node)

<p align="right"><small>(<a href="#top">Voltar ao topo</a>)</small></p>
