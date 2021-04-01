export default () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./sw.js")
      .then((register) =>
        console.log(`Service worker register in: ${register.scope}`)
      )
      .catch((err) => console.log(`Error failed to register service worker`));
  }
};
