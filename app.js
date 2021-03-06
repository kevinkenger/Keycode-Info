const body = document.body;
keyEl = document.getElementById('key').firstElementChild;
keyEl.textContent = 'press a key to get the keycode';
body.addEventListener('keydown', (e) => {
    if ( e.which == 9 ) {
        e.preventDefault();
    }
    let key = e.code.toLowerCase();
    if ( key.includes('key') ) {
         key = key.replace(/key/i, '');
    } else if ( key.includes('digit') ) {
        key = key.replace(/digit/i, '');
    } else {
        switch ( e.which ) {
            case 16:
                key = 'shift';
                break;
            case 17:
                key = 'control';
                break;
            case 18:
                key = 'alt';
                break;
            case 20:
                key = 'caps lock';
                break;
            case 37:
                key = 'left arrow';
                break;
            case 38:
                key = 'up arrow';
                break;
            case 39:
                key = 'right arrow';
                break;
            case 40:
                key = 'down arrow';
                break;
            case 219:
                key = 'left bracket';
                break;
            case 221:
                key = 'right bracket';
                break;
            default:
                break;
        }
    }

    document.getElementById('keycode').textContent = e.which;
    keyEl.textContent = key;
    keyEl.parentNode.className = 'pressed';
});

body.addEventListener('keyup', () => {
    keyEl.parentNode.className = '';
});
