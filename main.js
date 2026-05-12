const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
  botoes[].onclick = function () {
    
    for (let i = 0; j < botoes.length; j++) {
      botoes[J].classList.remove("ativo");
      textos[j].classList.remove("ativo");
    }  
    
      botoes[i].classList.add("ativo");
   textos[i].classList.add("ativo");   
  } 
}
    const contadores document.querySelectorAll(".contador");
    const tempoobjetivol = new Date("2026-10-05T00:00:00");
    let tempoAtual new Date(); 

    contadores[0].textContent calculaTempo(tempoObjetivol);

    function calculatempo(tempoObjetivo) { 
      let tempoAtual new Date(); 
      let tempoFinal tempoobjetivo tempoAtual; 
      Let segundos Math.floor(tempoFinal/1000);
      let minutos Math.floor(segundos/60); 
      Let horas Math.Floor (minutos / 60); 
      let dias Math.floor(horas/24); 
      
      segundos %= 60;
      minutos %= 60;
      horas %= 60;

      return dias + " dias " + horas " + minutos + " minutos " + segundos + " segundos "; 
    }
