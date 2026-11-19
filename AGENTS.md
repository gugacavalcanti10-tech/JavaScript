# Diretrizes do Repositório

## Estrutura e organização

Este repositório contém aulas introdutórias de JavaScript e anotações de estudo. Cada diretório `aulaNN/` contém uma aula independente: o arquivo `index.html` carrega o `aula.js` da mesma pasta. Crie novas aulas seguindo esse padrão de nomes. A pasta `EloqueResumo/` reúne resumos do livro; o arquivo `cap1` contém as anotações originais do primeiro capítulo e `README.md` apresenta sua versão em Markdown. Não há diretórios separados para testes ou recursos visuais.

## Comandos de desenvolvimento

Não há gerenciador de pacotes, etapa de compilação ou servidor de desenvolvimento configurado. Abra o `index.html` da aula no navegador e use o console das ferramentas de desenvolvedor para acompanhar a saída. Por exemplo, abra `aula04/index.html` para estudar operadores aritméticos. Se o Node.js estiver instalado, execute `node aula04/aula.js` para rodar esse exemplo no terminal. Após alterar uma aula, verifique se há erros no console do navegador.

## Estilo de código e nomes

Siga o estilo da aula alterada; os exemplos existentes variam no uso de ponto e vírgula. Use quatro espaços para indentar o HTML, escolha nomes de variáveis descritivos e escreva comentários curtos que expliquem o conceito ensinado. Prefira `const` para valores que não serão alterados e `let` para variáveis que receberão novos valores, exceto quando a aula demonstrar outra forma de declaração. Mantenha a referência ao `aula.js` da própria pasta.

## Orientações para testes

Não há ferramenta de testes automatizados nem exigência de cobertura. Execute cada aula alterada e compare a saída do console com os exemplos e comentários. Para alterações específicas do navegador, confira também a página no navegador. Se adicionar testes ou ferramentas, documente aqui como executá-los.

## Commits e solicitações de alteração

O histórico disponível usa mensagens curtas com um prefixo de tipo, por exemplo: `docs: inicia anotações do curso e resumos do livro de JavaScript`. Siga esse padrão quando possível. Nas solicitações de alteração (pull requests), descreva as aulas ou anotações modificadas e como foram verificadas; vincule uma issue relacionada, quando houver, e inclua capturas de tela para alterações visíveis na página.