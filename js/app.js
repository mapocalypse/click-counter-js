const images = document.getElementById("images");
var g_ContarClicks = 0;

images.onclick = function (event) {
    if (event.target.id == "fig1" || event.target.id == "fig2") { //se carregar na fig1 ou na fig2
        var fig1 = document.getElementById("fig1").src; //guardar a src da fig1 em uma variável, pq depois que ela passa a fig2, é "esmagada"

        document.getElementById("fig1").src = document.getElementById("fig2").src;
        document.getElementById("fig2").src = fig1;
    }
    if (g_ContarClicks <= 100) { //contar os clicks até 100 
        g_ContarClicks++;
        if (g_ContarClicks % 10 == 0) {
            alert("The number of clicks in this session multiple of 10.");
        }
        let tempContador = localStorage.getItem("contador"); //buscar o que foi criado no load

        tempContador++; //atualizar a cada click
        localStorage.setItem("contador", tempContador);
        document.getElementById("contador").innerHTML = "Total number of clicks since this page has existed: " + tempContador; //vai mostrar o contador atualizado a cada click
    }
}  

function showContador() { //para mostrar o contador assim que abrir a página, chamada no body do html
    let tempContador = localStorage.getItem("contador");

    if (tempContador == null) { //se for a primeira vez que a página é aberta, o contador não existe na local storage
        localStorage.setItem("contador", g_ContarClicks); //no load, cria a local storage com o g_contarClicks que é 0
        document.getElementById("contador").innerHTML = "The total number of clicks is " + g_ContarClicks;
    }
    else {
        document.getElementById("contador").innerHTML = "Total number of clicks since this page has existed: " + tempContador;
    }
}