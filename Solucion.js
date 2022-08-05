function daysToXmas(date) {
  const d = new Date("Dec 25, 2021");
  let diferencia=Date.parse(d)-Date.parse(date);
  let a = Math.ceil(diferencia/86400000);
  if (diferencia===0)
  return 0
  else
    
    return a;
}
