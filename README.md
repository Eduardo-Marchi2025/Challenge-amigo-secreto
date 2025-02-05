Amigo Secreto

Introdução

Este projeto é um dos desafio do curso Logica em Programação, da Oracle Next Education (ONE), realizado pela Oracle em parceria com a Alura, com o objetivo de capacitar talentos em tecnologia. Neste Exercício, estamos criando uma página da web onde é possível realizar o sorteio de um amigo secreto.

Acesse a aplicação através deste link do GitHub Pages!

Como Executar o Projeto
- Navegador web atualizado
- Git instalado3

Instalação

.Acesse o site: https://github.com/Eduardo-Marchi2025/Challenge-amigo-secreto/tree/main/challenge-amigo-secreto_pt-main3

Telas de Aplicação

Tela Inicial

Na Web 

![TelaWeb](https://github.com/user-attachments/assets/2e8c1735-d64b-4c20-9c89-8e1ba97b2cf5) 

Com Mobile

![TelaMobile](https://github.com/user-attachments/assets/438d12f6-eef0-4abc-a36e-576208ab88d2)


Tela com Lista de Amigos

![Tela_com_Lista_Amigos](https://github.com/user-attachments/assets/58aaf7e4-3a87-4f5a-9a51-ac7780784c0c)

Tela Sorteando Nomes

![Tela_Com_Nome_Sorteado](https://github.com/user-attachments/assets/0b93be79-0ab0-41c1-b168-7fa7167a2ac8)


Funcionalidades


Adicionar Amigos:

- Ao clicar em "Adicionar", ou apertar o "Enter" no seu teclado o nome do amigo inserido no campo aparecerá em uma lista abaixo.

  - Se o campo de texto estiver vazio ou o nome já estiver na lista, um alerta solicitará que você digite um nome válido.
	
  - Se o nome contiver caracteres diferentes de letras, uma mensagem indicará que o nome é inválido.
	
  - Para adicionar mais de um amigo por vez, separe os nomes por vírgula (ex: Eduardo, Rafaela, Guilherme).

 ![Campo_Inserir_nomes_e_Reset](https://github.com/user-attachments/assets/0e70f0f4-d318-4a0a-b244-4357b0542c78)

	  
  Sorteio Aleatório:

- Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e exibido na tela.

  - O sorteio termina quando todos os nomes da lista já tiverem sido sorteados.
	
  - Se for preciso interromper o sorteio, e inserir novos nomes, masta clicar no botão "Reset" ao lado do botão "Adionar" que toda a lista é apagada.
	
  - Quando todos os mnomes forem sorteados, aparece um alerta informando, e ao clicar no "OK" da mensagem, toda a lista é apagada, e pode começar de novo.

 ![Botao_Sortear_Amigo](https://github.com/user-attachments/assets/e2f3ae9c-f0a5-4c31-9ef3-456b59aec2ae)

	
Tecnologias Utilizadas

![Logos_HTML5_CSS3_JS](https://github.com/user-attachments/assets/72ca7e65-ae9e-43f3-8f62-3c24d83fb4dc)


Descrição Técnica

aplicativo.js

O arquivo app.js contém a lógica principal da aplicação de sorteio de amigo secreto. Abaixo está uma descrição das principais funções e variáveis ​​utilizadas:

Variáveis ​​Globais:

- amigos: Matriz que armazena a lista de amigos.
  
- sorteioRealizado: Booleano que indica se o sorteio já foi realizado.
  
- toRemove: String que armazena o nome do amigo a ser removido após o sorteio.
  
- sorteado: String que armazena o nome do amigo classificado.

Funções

- capitalizar(texto) : Coloca a primeira letra de cada palavra em segurança.

- validaCampoVazio(texto) : Verifica se o campo está vazio.

- validaDuplicado(amigo) : Verifique se o amigo já foi adicionado à lista.

- validaTrataInput(amigoInput) : Valida e trata a entrada do usuário, verificando se o campo está vazio, se contém apenas letras e se o amigo já foi adicionado.

- adicionarAmigo() : Adiciona um amigo à lista, permitindo a adição de vários amigos separados por vírgula.

- sortearAmigo() : Realiza o sorteio de um amigo da lista, garantindo que o sorteio não seja repetido e que o nome sorteado não seja o próprio.

- atualizarListaAmigos() : Atualiza uma lista de amigos no HTML.

- reiniciarAmigoSecreto() : Limpe a lista de amigos e reinicie o sorteio.

- Resultado() : Oculta o resultado do sorteio e reinicia a aplicação se todos os nomes já ocultados tiverem sido sorteados.

- limparElemento(elemento) : Limpa o valor de um elemento HTML.

 - alterarValorElemento(elemento, valor) : Altera o valor de um elemento HTML.

Essas funções funcionam juntas para fornecer a funcionalidade completa do aplicativo de sorteio de amigo secreto, desde a adição de amigos até a realização e reinício do sorteio.

Quem contribuiu com o projeto:

- Os instrutores dos cursos.
- No forum da Alura: Armano Barros Alves Junior (https://cursos.alura.com.br/user/armano-junior) e  Luis Dias (https://cursos.alura.com.br/user/diaslasd)
- Varios Parceiros do Discord.
- Muitos sites, pesquisa e muita persistência.

Contato para usuários que tiverem dúvidas sobre o projeto:

- Aqui mesmo no GitHub
- No Discord, entro todos os dias.
- Via e-mail: eduardo.marchi@gmail.com
  
  



  
