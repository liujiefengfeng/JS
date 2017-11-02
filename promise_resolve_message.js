let myPromise = new Promise(function(resolve, reject) {
  setTimeout(function(){
  resolve('success resolve this message');
  }, 250);
});

myPromise.then(function(successMessage){
  console.log("Yay!" + successMessage);
});
