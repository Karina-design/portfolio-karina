document.querySelectorAll('video').forEach(video => {
    video.addEventListener('mouseenter', () => {
        video.currentTime = 0; // Start from the beginning 
        video.play();
    });
    video.addEventListener('mouseleave', () => {
        video.pause();
    
    });
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbyHB19xaIlyM3xx0A06eL4J8gq53PW078j3u9t-9i1xQlGgTAqK6sSm3PVNRcn40BrF4Q/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML= "Message sent successfully";
        setTimeout(() => {
            msg.innerHTML = "";
        }, 5000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message));
});