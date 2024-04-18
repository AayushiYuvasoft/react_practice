export async function api(person){
  const delay= person==='Bob'?2000 :200;
return new Promise((resolve ,reject)=>{
 const idd= setTimeout(()=>{
    resolve('This is ' + person + '’s bio.');
  },delay)

})

}