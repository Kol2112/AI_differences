function calculate() {
    var principal = parseFloat(document.getElementById('principal').value);
    var interest = parseFloat(document.getElementById('interest').value) / 100 / 12; // Oprocentowanie miesięczne
    var months = parseInt(document.getElementById('months').value);
    var startDate = new Date(document.getElementById('start-date').value);

    // Obliczanie miesięcznej raty
    var x = Math.pow(1 + interest, months);
    var monthlyPayment = (principal * x * interest) / (x - 1);

    // Obliczanie dat płatności
    var paymentDates = [];
    for (var i = 0; i < months; i++) {
        var date = new Date(startDate.getFullYear(), startDate.getMonth() + i, 1);
        paymentDates.push(date.toLocaleDateString('pl-PL', { year: 'numeric', month: 'long', day: 'numeric' }));
    }

    // Wyświetlanie wyniku i dat płatności
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = 'Miesięczna rata: ' + monthlyPayment.toFixed(2) + ' PLN';

    var paymentDatesElement = document.getElementById('payment-dates');
    paymentDatesElement.innerHTML = '<h3>Daty płatności:</h3><ul>';
    paymentDates.forEach(function(date) {
        paymentDatesElement.innerHTML += '<li>' + date + '</li>';
    });
    paymentDatesElement.innerHTML += '</ul>';
}