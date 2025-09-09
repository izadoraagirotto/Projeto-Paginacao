// Selecionando elementos DOM
const startBtn = document.querySelector("#startBtn"),
    endBtn = document.querySelector("#endBtn"),
    prevNext = document.querySelectorAll(".prevNext"),
    numbers = document.querySelectorAll(".link");
// Definindo uma etapa inicial
let currentStep = 0;
// Função para atualizar os estados dos botões
const updateBtn = () => {
    // Se estamos no último passo
    if (currentStep === 4) {
        endBtn.disabled = true;
        prevNext[1].disabled = true;
    } else if (currentStep === 0) {
        // Se estamos no primeiro passo
        startBtn.disabled = true;
        prevNext[0].disabled = true;
    } else {
        endBtn.disabled = false;
        prevNext[1].disabled = false;
        startBtn.disabled = false;
        prevNext[0].disabled = false;
    }
};
// Adicionar ouvintes de eventos aos links numéricos
numbers.forEach((number, numIndex) => {
    number.addEventListener("click", (e) => {
        e.preventDefault();
        // Defina a etapa atual para o link do número clicado
        currentStep = numIndex;
        // Remover a classe "ativa" do link do número ativo anteriormente
        document.querySelector(".active").classList.remove("active");
        // Adicione a classe "ativa" ao link do número clicado
        number.classList.add("active");
        updateBtn(); // Atualizar os estados dos botões
    });
});
// Adicione ouvintes de eventos aos botões "Anterior" e "Próximo"
prevNext.forEach((button) => {
    button.addEventListener("click", (e) => {
        // Aumentar ou diminuir a etapa atual com base no botão clicado
        currentStep += e.target.id === "next" ? 1 : -1;
        numbers.forEach((number, numIndex) => {
            // Alternar a classe "ativa" nos links numéricos com base na etapa atual
            number.classList.toggle("active", numIndex === currentStep);
            updateBtn(); // Atualizar os estados dos botões
        });
    });
});
// Adicionar ouvinte de eventos ao botão "Iniciar"
startBtn.addEventListener("click", () => {
    // Remover a classe "ativa" do link do número ativo anteriormente
    document.querySelector(".active").classList.remove("active");
    // Adicione a classe "ativa" ao primeiro link numérico
    numbers[0].classList.add("active");
    currentStep = 0;
    updateBtn(); // Atualizar os estados dos botões
    endBtn.disabled = false;
    prevNext[1].disabled = false;
});
// Adicionar ouvinte de eventos ao botão "Fim"
endBtn.addEventListener("click", () => {
    // Remover a classe "ativa" do link do número ativo anteriormente
    document.querySelector(".active").classList.remove("active");
    // Adicione a classe "ativa" ao último link numérico
    numbers[4].classList.add("active");
    currentStep = 4;
    updateBtn(); // Atualizar os estados dos botões
    startBtn.disabled = false;
    prevNext[0].disabled = false;
});