export function compute(num){
  if (num < 0) return 0;
  return num + 1;
}

export function greet(title){
  return `Welcome ${title}`;
}

export function getCurrencies(){
  return ['USD', 'EUR', 'CAD'];
}
