const SUPABASE_URL = 'https://ggrxyvoclospylivhver.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdncnh5dm9jbG9zcHlsaXZodmVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4NjQ5MTksImV4cCI6MjA1NDQ0MDkxOX0.As3Ls7eFH27abiax-AeBFgtHQFC0eyfFKmkEZyxmbvk';
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

document.getElementById('shift-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const shift = document.getElementById('shift').value;

    // Supabaseにデータを送信
    const { data, error } = await supabase.from('shifts').insert([{ name, date, shift }]);

    if (error) {
        console.error('エラー:', error);
    } else {
        alert('シフトが登録されました！');
    }

    document.getElementById('shift-form').reset();
});

async function loadShifts() {
    const { data: shifts, error } = await supabase.from('shifts').select('*');
    if (error) {
        console.error('エラー:', error);
        return;
    }

    const shiftList = document.getElementById('shift-list');
    shiftList.innerHTML = '';

    shifts.forEach(shift => {
        const listItem = document.createElement('li');
        listItem.textContent = `${shift.name} - ${shift.date} - ${shift.shift}`;
        shiftList.appendChild(listItem);
    });
}

loadShifts();