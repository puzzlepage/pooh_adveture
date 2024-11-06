function hashCode(str) {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

function getAddress(puzzle_target) {
    var puzzle_dict = {
        "messages.html": "messages.html",
        "thanks.html": "thanks.html"
    }
    return puzzle_dict[puzzle_target]
}

function handlePwd(user_pwd, true_hash, puzzle_target) {
    if(event.key === 'Enter') {
        console.log(hashCode(user_pwd.value))
        if (hashCode(user_pwd.value) == true_hash) {
            document.location.href=getAddress(puzzle_target);
        }
        else {
            let currBg = window.getComputedStyle(user_pwd.parentElement).backgroundColor;
            user_pwd.parentElement.style.backgroundColor = 'rgba(255, 49, 49)';
            setTimeout(removeFlash, 50, user_pwd.parentElement, currBg);
        }
    }
}

function removeFlash(element, bg_val) {
    element.style.backgroundColor = bg_val
}
