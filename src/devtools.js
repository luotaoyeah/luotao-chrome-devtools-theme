var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        chrome.devtools.panels.applyStyleSheet(xhr.responseText);
    }
};
xhr.open('GET', '/styles.css');
xhr.send();
