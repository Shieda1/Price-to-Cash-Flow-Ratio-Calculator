// https://www.omnicalculator.com/finance/price-to-cash-flow-ratio

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const pricetocashflowratioRadio = document.getElementById('pricetocashflowratioRadio');
const cashflowRadio = document.getElementById('cashflowRadio');
const numberofsharesoutstandingRadio = document.getElementById('numberofsharesoutstandingRadio');
const pricepershareRadio = document.getElementById('pricepershareRadio');

let pricetocashflowratio;
let cashflow = v1;
let numberofsharesoutstanding = v2;
let pricepershare = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

pricetocashflowratioRadio.addEventListener('click', function() {
  variable1.textContent = 'Cash flow';
  variable2.textContent = 'Number of shares outstanding';
  variable3.textContent = 'Price per share';
  cashflow = v1;
  numberofsharesoutstanding = v2;
  pricepershare = v3;
  result.textContent = '';
});

cashflowRadio.addEventListener('click', function() {
  variable1.textContent = 'Price to cash flow ratio';
  variable2.textContent = 'Number of shares outstanding';
  variable3.textContent = 'Price per share';
  pricetocashflowratio = v1;
  numberofsharesoutstanding = v2;
  pricepershare = v3;
  result.textContent = '';
});

numberofsharesoutstandingRadio.addEventListener('click', function() {
  variable1.textContent = 'Price to cash flow ratio';
  variable2.textContent = 'Cash flow';
  variable3.textContent = 'Price per share';
  pricetocashflowratio = v1;
  cashflow = v2;
  pricepershare = v3;
  result.textContent = '';
});

pricepershareRadio.addEventListener('click', function() {
  variable1.textContent = 'Price to cash flow ratio';
  variable2.textContent = 'Cash flow';
  variable3.textContent = 'Number of shares outstanding';
  pricetocashflowratio = v1;
  cashflow = v2;
  numberofsharesoutstanding = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(pricetocashflowratioRadio.checked)
    result.textContent = `Price to cash flow ratio = ${computepricetocashflowratio().toFixed(2)}`;

  else if(cashflowRadio.checked)
    result.textContent = `Cash flow = ${computecashflow().toFixed(2)}`;

  else if(numberofsharesoutstandingRadio.checked)
    result.textContent = `Number of shares outstanding = ${computenumberofsharesoutstanding().toFixed(2)}`;

  else if(pricepershareRadio.checked)
    result.textContent = `Price per share = ${computepricepershare().toFixed(2)}`;
})

// calculation

// cash flow per share = cash flow / number of shares outstanding
// price to cash flow ratio = price per share / cash flow per share

function computepricetocashflowratio() {
  return Number(pricepershare.value) / (Number(cashflow.value) / Number(numberofsharesoutstanding.value));
}

function computecashflow() {
  return (Number(pricepershare.value) / Number(pricetocashflowratio.value)) * Number(numberofsharesoutstanding.value);
}

function computenumberofsharesoutstanding() {
  return Number(cashflow.value) / (Number(pricepershare.value) / Number(pricetocashflowratio.value));
}

function computepricepershare() {
  return Number(pricetocashflowratio.value) * (Number(cashflow.value) / Number(numberofsharesoutstanding.value));
}