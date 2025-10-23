function openModal() {
  document.getElementById('modal').classList.remove('hidden');
}
function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}

function openChessBoard(name) {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content glass-panel">
      <h3>Шахматная доска — ${name}</h3>
      <iframe src="https://lichess.org/embed?theme=auto&bg=dark"
        style="width:100%; height:480px; border:0; border-radius:10px;"
        allowfullscreen>
      </iframe>
      <div class="button-group">
        <button class="btn gray" onclick="this.closest('.modal').remove()">Закрыть</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

function saveT() {
  const name = document.getElementById('name').value.trim();
  const game = document.getElementById('game').value;
  const prize = document.getElementById('prize').value;
  const crypto = document.getElementById('crypto').value;

  if (!name) return alert('Введите название турнира');

  const list = document.getElementById('list');
  document.querySelector('.placeholder')?.remove();

  const div = document.createElement('div');
  div.className = 'tournament';
  div.innerHTML = `
    <span>${name} — ${game.toUpperCase()} (${prize || 0} ${crypto})</span>
    ${game === 'chess'
      ? `<button class="btn orange" onclick="openChessBoard('${name}')">Играть</button>`
      : `<button class="btn gray" disabled>Скоро</button>`
    }
  `;
  list.appendChild(div);
  closeModal();
}

