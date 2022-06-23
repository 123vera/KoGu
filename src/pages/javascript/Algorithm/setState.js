class Component {
    constructor () {
        this.state = {}
    }

    setState(state, callback) {
        this.state = { ...this.state, state }
        callback && callback(state)
    }

}

let com = new Component()
