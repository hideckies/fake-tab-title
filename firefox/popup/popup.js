const codeForFake = `
(function() {
    let titleList = [
        { "title": "Google", "icon": "./icons/icon-32.png" },
        { "title": "Wikipedia, the free encyclopedia", "icon": "./icons/icon-32.png" }
    ]
    
    var randNum = Math.floor(Math.random() * titleList.length);
    document.title = titleList[randNum].title;
}());
`;

function onExecuted(result) {
    let errorP = document.getElementById("error")
    errorP.innerHTML = result;
}

function onError(error) {
    let errorP = document.getElementById("error");
    errorP.innerHTML = error;
}

document.addEventListener('DOMContentLoaded', () => {
    let checked = JSON.parse(localStorage.getItem('checkboxState'));
    document.getElementById('checkbox').checked = checked;
});

document.addEventListener('click', (e) => {
    function fake(tabs) {
        for (let tab of tabs) {
            browser.tabs.executeScript(
                tab.id,
                {
                    file: '/content_scripts/fake.js'
                }
            )
            .then(onExecuted, onError);
        }
    }

    function reset(tabs) {
        for (let tab of tabs) {
            browser.tabs.executeScript(
                tab.id,
                {
                    file: '/content_scripts/reset.js'
                }
            )
            .then(onExecuted, onError);
        }
    }

    function reportError(error) {
        var errorP = document.getElementById("error");
        errorP.innerHTML = error;
    }

    if (e.target.id === "checkbox") {
        // Set checkbox state to local storage
        localStorage.setItem('checkboxState', e.target.checked);

        if (e.target.checked) {
            browser.tabs.query({})
                .then(fake)
                .catch(reportError);
            return;
        } 
        if (!e.target.checked) {
            browser.tabs.query({})
                .then(reset)
                .catch(reportError);
            return;
        }
    }
});