import { createApp } from './main'

const { app, store } = createApp()

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}
console.log(app)
app.errorHandler = (err, instance, info) => {
    // report error to tracking services
    console.log(err,'err')
    console.log(instance,'instance')
    console.log(info,'info')
}
app.$mount('#app')
