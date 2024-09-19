let inputFile = document.querySelector('#fileInput') as HTMLInputElement;

inputFile.addEventListener('change', async (e) => {
  if (!inputFile.files) return 
  let reader = new FileReader();

 console.log(await inputFile.files[0].text())

});
