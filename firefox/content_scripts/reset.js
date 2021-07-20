function reset() {
    let value = localStorage.getItem(window.location.href);
    console.log(value)

    if (value == null) {
        return
    } else {
        document.title = value;
    }
}

reset();