<h1 align="center"> Vtex Points </h1>
<h6 align="center"> Travellog#3 </h6>

<hr>

### Descrição: 

<p> Projeto de contabilização e visualização de pontos por compra criado para o e-commerce VTEX da dona Maria.</p>
<p> Temos como foco nesse projeto retornar os pedidos do usuário diretamente da nossa api conectada á VTEX, para assim criar um histórico de transações entre o cliente e a loja que também seja capaz de retornar o total de pontos bônus em um bloco customizável.</p>

<hr>

### Conteúdo

* [Fluxograma](#Fluxograma:)

* [Documentação da API](#Documentação da API:)

    * [Get Request's](#Get Request's:)
    
    * [Post Request's](#Post Request's:)
    
    * [Patch Request's](#Patch Request's:)
    
* [Technologias Usadas](#Technologias Usadas:)
    
* [Organizacional](#Organizacional:)

* [Dificudades no desenvolvimento](#Dificudades no desenvolvimento:)

### Fluxograma:

<div align="center">
<img src="https://user-images.githubusercontent.com/85533288/180102552-b15ea13f-289e-43ad-a4c6-57166ee05e1e.png" width="500px"/>
</div>
  
<hr>
  
### <h2>Documentação da API: </h2>

  #### Get Request's: 
  Essa rota da API é utilizada para a configuração do hook, e retoma o número de pontos que o usuário possui.
   <p></p>
   <p></p>
   <p></p>
   
  #### Post Request's: 
  Essa rota é usada para quando ocorre a confirmação de compra na loja
  para que tenha a validação e o salvamento dos pontos no masterdata. Verifica se já tem usuário, e se tiver acaba atualizando-o.
   <p></p>
   <p></p>
   <p></p>
   
  #### Patch Request's:
  Caso o usuário já possui pontos no banco de ele é redirecionado para um patch que atualiza seu histórico de compras e seus pontos.
   <p></p>
   <p></p>
   <p></p>

  #### Obs.:
  Durante o cancelamento das compras o sistema acionaria o hook que efetuaria a retirada dos pontos no masterdata. Porém isso não foi verificado, mas seria caso         tivessemos mais tempo. Foi feito o calculo verificando o funcionamento com Insomnia, mais não foi verificado na api que está na aws. Para os endpoins foi utilizada     a AWS onde foi criado um servidor em Node.js com express, o qual foi criado com ssh e certificado https para que o hook funcione corretamente.
  <p></p>
  <p></p>
  <p></p>
<hr>

### <h2>Organizacional: </h2>

<a href="https://trello.com/b/VZvKLDVt/api-pontos-organizacional" >Trello</a>

<hr>

<div>
<img src="https://media.giphy.com/avatars/VTEXCommerce/vyFCi9OWdzLC.GIF" width=100px align="right"/>
<img src="https://pbs.twimg.com/media/DyLSj2WXcAARVtw.png" width=100px align="right"/>
</div>
