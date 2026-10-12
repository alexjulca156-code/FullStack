const nameInput = document.getElementById('name-input');
const addBtn = document.getElementById('add-btn');
const attendanceList = document.getElementById('attendance-list');

addBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  if (name === '') return;

  const now = new Date();
  
  // Formato de fecha: DD/MM/AAAA
  const date = now.toLocaleDateString();

  // Formato de hora: HH:MM:SS (con segundos)
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
});