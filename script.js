
function createElement(tag, attributes = {}, textContent = '') {
  const element = document.createElement(tag);
  for (const abc in attributes) {
    element.setAttribute(abc, attributes[abc]);
  }
  if (textContent) {
    element.textContent = textContent;
  }
  return element;
}

const textArea = createElement('textArea', { id: 'inputText', placeholder: 'Enter words here ...' });
const submitButton = createElement('button', { id: 'submitButton' }, 'Submit');
const tableContainer = createElement('div', { id: 'resultTable' });


const root = document.getElementById('root');
root.appendChild(textArea);
root.appendChild(submitButton);
root.appendChild(tableContainer);


document.getElementById('submitButton').addEventListener('click', function() {
  const inputText = document.getElementById('inputText').value.trim();
  const words = inputText.split(/\s+/);
  const frequencyTable = {};

 
  words.forEach(word => {
    frequencyTable[word] = (frequencyTable[word] || 0) + 1;
  });

  const sortedWords = Object.keys(frequencyTable).sort((a, b) => frequencyTable[b] - frequencyTable[a]);

  //Clears previous result
  tableContainer.innerHTML = '';


  const table = createElement('table');
  const tableHead = createElement('tr');
  tableHead.appendChild(createElement('th', {}, 'Word Name'));
  tableHead.appendChild(createElement('th', {}, 'Word Frequency'));
  table.appendChild(tableHead);

  
  sortedWords.slice(0, 5).forEach(word => {
    const row = createElement('tr');
    row.appendChild(createElement('td', {}, word));
    row.appendChild(createElement('td', {}, frequencyTable[word]));
    table.appendChild(row);
  });

  
  tableContainer.appendChild(table);

  console.log(frequencyTable);
});
