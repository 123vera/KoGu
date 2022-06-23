var emitter = new Emitter();

emitter.on('some-event', function (arg1, arg2, arg3) { });
emitter.emit('some-event', 'arg1 value', 'arg2 value', 'arg3 value');
emitter.off('some-event');

class Emitter {
    constructor () {
        this.eventList = []
    }

    // 发布
    emit(name, params) {
        let event = this.eventList[name]
        event.forEach(i => {
            // if (i === fn) {
            i(params)
            // }
        })
    }

    // 订阅
    on(name, fn) {
        this.eventList[name].push(fn)
    }

    // 取消订阅
    off(name, fn) {
        let event = this.eventList[name]

        event.forEach((i, key) => {
            if (i === fn) {
                event.splice(key, 1)
            }
        })
    }
}