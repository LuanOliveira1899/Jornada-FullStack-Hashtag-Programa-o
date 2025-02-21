import React from "react";

const App2 = () => {
  return <div>App2</div>;
};

export default App2;

//rafce

// Arrow function
// const App2 = () => <h1>Olá Mundo!</h1>;

// Nomeação de Componente
// PascalCase

// Nomeação de Variável, Função...
// camelCaseCorcundaDoCamelo

// export default, posso importar com qualquer nome e sem chaves
// export "sem defalut", só posso importar entre chaves e com o nome exportado

// Self closing tag
// <Header></Header>
// <Header/>

// element.style {
// background-color: antiquewhite;
// padding: 20px;
// margin: 20px;
// border: solid Spx black;
// /*box-sizing: content-box; */
//  width: 500px;
// }

// Nomeação de classes em CSS
// Metodologia BEM
// Blocks
// Elements
// Midifiers
// bloco__elemento--modificador
// header
// header__link
// header__link--small
// item-list__header
//

// Tag vazia em react se chama fragment ou fragmento

// Componentes recebem "props" (argumentos

// // {items === 5 ? (
//   <>
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//   </>
// // ) : (
//   <>
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//   </>
// )})

// {Array(items)
//   .fill()
//   .map((currenteValue, index) => (
//     <SingleItem key={`${title} -${index}`} />
