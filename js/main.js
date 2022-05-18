function handleMask(event, mask) {
    with (event) {
        stopPropagation()
        preventDefault()
        if (!charCode) return
        var c = String.fromCharCode(charCode)
        if (c.match(/\D/)) return
        with (target) {
            var val = value.substring(0, selectionStart) + c + value.substr(selectionEnd)
            var pos = selectionStart + 1
        }
    }
    var nan = count(val, /\D/, pos) // nan va calcolato prima di eliminare i separatori
    val = val.replace(/\D/g,'')

    var mask = mask.match(/^(\D*)(.+9)(\D*)$/)
    if (!mask) return // meglio exception?
    if (val.length > count(mask[2], /9/)) return

    for (var txt='', im=0, iv=0; im<mask[2].length && iv<val.length; im+=1) {
        var c = mask[2].charAt(im)
        txt += c.match(/\D/) ? c : val.charAt(iv++)
    }

    with (event.target) {
        value = mask[1] + txt + mask[3]
        selectionStart = selectionEnd = pos + (pos==1 ? mask[1].length : count(value, /\D/, pos) - nan)
    }

    function count(str, c, e) {
        e = e || str.length
        for (var n=0, i=0; i<e; i+=1) if (str.charAt(i).match(c)) n+=1
        return n
    }
}




const $input = document.querySelector('[data-js="input"]');
$input.addEventListener("input", handleInput, false);

function handleInput(e) {
  e.target.value = phoneMask(e.target.value);
}

function phoneMask(phone) {
  return phone
    .replace(/\D/g, "")
    .replace(/^(\d)/, "($1")
    .replace(/^(\(\d{3})(\d)/, "$1) $2")
    .replace(/(\d{3})(\d{1,5})/, "$1-$2")
    .replace(/(-\d{4})\d+?$/, "$1");
}







const stars = document.querySelectorAll("#star");

stars.forEach((star) => {
    let duration = Math.random() * (1.2 - 0.6) + 0.6;
    star.style.animation = `stars $(duration)s infinite linear`;
});

window.addEventListener("load" , () => {
    const preloader = document.querySelector(".preloader");
    preloader.classList.add("preload-finish");
});