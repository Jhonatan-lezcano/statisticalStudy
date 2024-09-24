import { Parser } from "./utils/parser.js";


let inputFile = document.querySelector('#fileInput') as HTMLInputElement;
let selectColumns = document.getElementById('selectColumns') as HTMLDivElement;
let vectorTable: string[][] = []

function handleMakeStudy(e: HTMLButtonElement) {
  console.log(e)
  console.log('handleMakeStudyyyyyy')
}

function handleCheckbox(e: HTMLInputElement) {
  console.log(e)
  console.log('handleCheckbox')
}

inputFile.addEventListener('change', async (e) => {
  
  if (!inputFile.files) return 
  if (inputFile.files.length > 1) {
    console.log('Please select only one file')
    return
  }


  selectColumns.innerHTML = ''

  const fileDocument = await inputFile.files[0].text()
  vectorTable.push(...Parser(fileDocument));
  });
  
  console.log(vectorTable)
  const headers = vectorTable[0]
  selectColumns.innerHTML += /*html*/`
    <h2>Selecione as colunas</h2>
    <div class="columns">
    ${headers.map((header) => /*html*/`
      <label>
      <input type="checkbox" name="${header}" onclick="handleCheckbox()">
      ${header}
      </label>
      `).join('')}
      </div>
      <button id='btnMakeStudy' onclick="handleMakeStudy()">Make study</button>
      `


  