var a = 10; 
function foo(){
  console.log(a);
};
function bar(){
  let a = 20; 
  foo();
};
bar(); 