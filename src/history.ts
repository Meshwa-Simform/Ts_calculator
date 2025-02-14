let key = localStorage.length;

// Function to save history in local storage
function history(equation:string, Answer:number) {
    let data = {
        equation,
        Answer
    }
    localStorage.setItem(`history_${key}`, JSON.stringify(data));
    key++;
}

// Function to display history
function displayHistory() {
    let historyContent: HTMLElement | null = document.getElementById('history-content');
    if(!historyContent) return;
    historyContent.innerHTML = ''; // Clear previous history content

    for (let i = 0; i < localStorage.length; i++) {
        let key: string | null = localStorage.key(i);
        if (key) {
            if (key.startsWith('history_')) {
                let historyItem = JSON.parse(localStorage.getItem(key) || '{}');
                let historyEntry = document.createElement('div');
                historyEntry.innerHTML = `<p>${historyItem.equation} = </p><h4>${historyItem.Answer}</h4>`;
                historyContent.appendChild(historyEntry);
            }
        }
    }
    historyContent.scrollTop = historyContent.scrollHeight;
}

// Function to clear history
function clearHistory() {
    if (localStorage.length === 0) {
        alert("No history to clear.");
        return;
    }
    for (let i = localStorage.length - 1; i >= 0; i--) {
        let key: string | null = localStorage.key(i);
        if (key) {
            if (key.startsWith('history_')) {
                localStorage.removeItem(key);
            }
        }
    }
    key = 0;
    displayHistory(); // Re-display the empty history
}

export { history, displayHistory, clearHistory };