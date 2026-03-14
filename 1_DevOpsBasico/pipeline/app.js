function soma(a, b) {
    return a + b;
  }
  
  if (require.main === module) {
    console.log("Aplicação iniciada com sucesso!");
  }
  
  module.exports = { soma };