var msg = "INFO"
var notification = document.querySelector('notification');
var INFO = 'INFO'
WARNING = 'WARN'
ERROR = 'ERR'
CONFIRM = 'CONFIRM'



switch (msg) {
    case INFO:
        notification.classList.add('info');
        notification.innerText = 'info';
    case WARNING:
        notification.classList.add('warnong');
        notification.innerText = 'warnong';
        break;
    case ERROR:
        notification.classList.add('error');
        notification.innerText = 'error';
        break;
    case CONFIRM:
        notification.classList.add('confirm');
        notification.innerText = 'confirm';
        break;
    default:
        notification.innerText = 'defoult log';
        break;
    }


