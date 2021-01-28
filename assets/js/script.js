/* Barra de status de leitura: */

const container = document.getElementById("container");

let bar = document.createElement("div");

bar.style.height = "1px";
bar.style.width = "0";
bar.style.backgroundColor = "#9e0b0f";
bar.style.position = "fixed";
bar.style.top = "0px";
bar.style.left = "0";
bar.style.zIndex = "9999";
bar.style.transition = "0.1s";

document.body.append(bar);

function updateBar() {
  // Top position on y-axis:
  var scrollY = window.scrollY;

  // window.innerHeight = Height of the visible window display:
  var difference = container.clientHeight - window.innerHeight;

  var scroll = scrollY / difference;
  var position = scroll * 100;

  bar.style.width = position + "%";
}

window.addEventListener("load", () => {
  document.addEventListener("scroll", updateBar);
});

/* Alterando imagens on mouse over: */

// var image = document.getElementById("inicio-pinacograma");

// var iconeDesenvolvedor = document.getElementById("icone-desenvolvedor");
// var iconeArtista = document.getElementById("icone-artista");
// var iconeEscritor = document.getElementById("icone-escritor");

// var textoDesenvolvedor = document.getElementById("descricao-desenvolvedor");
// var textoArtista = document.getElementById("descricao-artista");
// var textoEscritor = document.getElementById("descricao-escritor");

// if(iconeDesenvolvedor!=null || iconeArtista!=null || iconeEscritor!=null || 
//   textoDesenvolvedor!=null || textoArtista!=null || textoEscritor!=null ){

//     iconeDesenvolvedor.addEventListener('mouseover', function(){
//       image.src = "assets/img/inicio/desenvolvedor.png"
//     })
    
//     iconeDesenvolvedor.addEventListener('mouseout', function(){
//       image.src = "assets/img/inicio/daniel-brito-pinacograma.gif"
//     })
    
//     iconeArtista.addEventListener('mouseover', function(){
//       image.src = "assets/img/inicio/artista.png"
//     })
    
//     iconeArtista.addEventListener('mouseout', function(){
//       image.src = "assets/img/inicio/daniel-brito-pinacograma.gif"
//     })
    
//     iconeEscritor.addEventListener('mouseover', function(){
//       image.src = "assets/img/inicio/escritor.png"
//     })
    
//     iconeEscritor.addEventListener('mouseout', function(){
//       image.src = "assets/img/inicio/daniel-brito-pinacograma.gif"
//     })
    
//     textoDesenvolvedor.addEventListener('mouseover', function(){
//       image.src = "assets/img/inicio/desenvolvedor.png"
//     })
    
//     textoDesenvolvedor.addEventListener('mouseout', function(){
//       image.src = "assets/img/inicio/daniel-brito-pinacograma.gif"
//     })
    
//     textoArtista.addEventListener('mouseover', function(){
//       image.src = "assets/img/inicio/artista.png"
//     })
    
//     textoArtista.addEventListener('mouseout', function(){
//       image.src = "assets/img/inicio/daniel-brito-pinacograma.gif"
//     })
    
//     textoEscritor.addEventListener('mouseover', function(){
//       image.src = "assets/img/inicio/escritor.png"
//     })
    
//     textoEscritor.addEventListener('mouseout', function(){
//       image.src = "assets/img/inicio/daniel-brito-pinacograma.gif"
//     })
// }