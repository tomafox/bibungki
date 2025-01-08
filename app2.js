let userName = '';

function openLetter() {
    document.getElementById('letterGreeting').innerText = `Surat permintaan maaf untuk ${userName}`;
    showPage('page3');
}

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');
}

function goToPage2() {
    userName = document.getElementById('nameInput').value;
    document.getElementById('userNameDisplay').innerText = userName;
    showPage('page2');
}

function goToPage4() {
    showPage('page4');
}

function forgive() {
    showPage('page5');
}

function transformNoButton() {
    const noButton = document.getElementById('noButton');
    noButton.innerText = "mau bangeeeetlah";
    noButton.onclick = forgive;
}

function redirectToLine() {
    window.location.href = 'https://line.me/ti/p/azzalias';
}
