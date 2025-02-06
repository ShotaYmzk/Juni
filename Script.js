document.getElementById('shift-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const shift = document.getElementById('shift').value;

    const shiftList = document.getElementById('shift-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${name} - ${date} - ${shift}`;
    shiftList.appendChild(listItem);

    // フォームをリセット
    document.getElementById('shift-form').reset();
});
