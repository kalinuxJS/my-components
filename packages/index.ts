import Button from './Button/lib/Button.js'
import Alert from './Alert/lib/Alert.js'

const Libs = [
    Button,
    Alert
]

function install(Vue) {
    Libs.forEach((lib) => lib.install(Vue))
}

export {
    Button,
    Alert
}

export default {
    install
}


