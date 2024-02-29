
const quantidades = document.querySelectorAll(".quantidade");
const valoresUnitarios = document.querySelectorAll(".valor-unitario");
const totals = document.querySelectorAll(".total");


totals.forEach((total, index) => {
    const quantidade = Number(quantidades[index].textContent);
    const valorUnitario = Number(valoresUnitarios[index].textContent.replace('R$', '').replace(',', '.'));

    total.textContent = 'R$' + (quantidade * valorUnitario).toFixed(2).replace('.', ',');
});
