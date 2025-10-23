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
    <div class="modal-content glass-panel" style="max-width:600px;">
      <h3>Шахматная доска — ${name}</h3>
      <div id="board" style="width:100%;"></div>
      <div class="button-group">
        <button class="btn gray" onclick="this.closest('.modal').remove()">Закрыть</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  // Создание доски
  const board = Chessboard('board', {
    draggable: true,
    position: 'start',
    onDrop: (source, target, piece) => {
      console.log(`Перемещено ${piece} с ${source} на ${target}`);
      return 'snapback'; // пока фигуры просто возвращаются на место
    }
  });
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
