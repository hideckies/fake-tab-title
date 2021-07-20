function fake() {
    // Set title to local storage
    localStorage.setItem(window.location.href, document.title);

    let titleList = [
        "Google",
        "Wikipedia, the free encyclopedia"
    ]
    
    var randNum = Math.floor(Math.random() * titleList.length);
    // Set title
    document.title = titleList[randNum];
    // Remove icon
    var linkTags = document.getElementsByTagName("link");
    for (let link of linkTags) {
        if (link.rel.includes('icon')) {
            link.href = "https://hdks.org/fake-tab-title/fake-favicon.png";
        }
    }
}

fake();