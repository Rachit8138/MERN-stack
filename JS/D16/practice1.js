let start=['january','july','march','august'];
// final: july, june, march, august
/* start.splice(0,1);
start.splice(1,0,'june') */
start.splice(0,2,'july','june');
console.log(start);

lang=['c','c++','java','javascript','html','sql','home'];
console.log(lang.reverse().indexOf('javascript'));