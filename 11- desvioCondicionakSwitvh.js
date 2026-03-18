// Switvh Case -> estrutura de decisão usada quando queremos comparar o valor de
// uma variável com vários possíveis resultados.
//REGRA DO PROF CASTELLO - se tiver mais que 3 computadores,faça um switch case

// Exemplo 01 - MENU
// Neste exemplo a variável menuSelecionado guardará o nome de uma opção de menu.
// O switch verifica qual foi a opção escolhida e exibe uma mensagem correspondente

let menuSelecionado = "Home";
switch (menuSelecionado) {
case "Home":
        console.log("Voce clicou no link 'Home'");
        break;
case "Quem somos":
    console.log("Voce clicou no link 'Quem somos'");
    break;
case "Contato":
    console.log("Voce clicou no link 'Contato'");
    break;
case "Redes sociais":
    console.log("Voce clicou no link 'Redes sociais'");
    break;
case "Pague um café":
     console.log("Voce clicou no link 'Pague um café'");
     break; 

    default:
    console.log("Opção incorreta, selecione uma opção no menu!");
    break;
}

