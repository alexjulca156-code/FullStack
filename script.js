const nameInput = document.getElementById('name-input');
const addBtn = document.getElementById('add-btn');
const attendanceList = document.getElementById('attendance-list');
const totalCount = document.getElementById('total-count');
const clearBtn = document.getElementById('clear-btn');

let count = 0;

addBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  if (name === '') return;

  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
  });

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${name}</span>
    <span class="time">${date} - ${time}</span>
  `;

  attendanceList.appendChild(li);
  nameInput.value = '';

  // Actualizar contador
  count++;
  totalCount.textContent = count;
});

// Limpiar toda la lista
clearBtn.addEventListener('click', () => {
  attendanceList.innerHTML = '';
  count = 0;
  totalCount.textContent = count;
});