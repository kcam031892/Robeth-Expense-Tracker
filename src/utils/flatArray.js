export const flatArray = (array) => {
  const obj = array.reduce((acc,obj) => {
    if(acc[obj.category]) {
      acc[obj.category].amount = acc[obj.category].amount + obj.amount;
    }else {
      acc[obj.category] = obj;
    }
    return acc;
  },{});
  
  return Object.values(obj);
}