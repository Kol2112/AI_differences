function calculateMonthlyPayment(amount, interest, months) {
    // Formula to calculate monthly payment
    const monthlyInterestRate = interest / 12;
    const payment = amount * (monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -months)));
    return payment;
}
function calculateTotalInterest(amount, interest, months) {
    // Formula to calculate total interest
    const totalInterest = amount * interest * months / 100;
    return totalInterest;
}
function oblicz() {
    const kwota = parseFloat(document.getElementById('kwota').value);
    const oprocentowanie = parseFloat(document.getElementById('oprocentowanie').value) / 100;
    const okres_spłaty = parseInt(document.getElementById('okres_spłaty').value);
    const data_pierwszej_spłaty = new Date(document.getElementById('data_pierwszej_spłaty').value);

    const rata_miesieczna = calculateMonthlyPayment(kwota, oprocentowanie, okres_spłaty);
    const koszt_odsetek = calculateTotalInterest(kwota, oprocentowanie, okres_spłaty);

    document.getElementById('rata_miesieczna').textContent = rata_miesieczna.toFixed(2) + " zł";
    document.getElementById('koszt_odsetek').textContent = koszt_odsetek;
}