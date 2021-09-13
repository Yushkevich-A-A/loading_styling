export default class ControllerWidget {
    constructor(widget) {
        this.widget = widget;
        this.init();
    }

    init() {
        this.registerServiceWorker();
    }

    registerServiceWorker() {
        if (navigator.serviceWorker) {
            window.addEventListener('load', async () => {
                try {
                    await navigator.serviceWorker.register(
                        '/service.worker.js', { scope: './'}
                    )
                } catch (e) {
                    console.log(e)
                }
            })
        }
    }
}