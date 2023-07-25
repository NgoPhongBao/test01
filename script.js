const btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    console.log(deferredPrompt)
  deferredPrompt.prompt();
});
