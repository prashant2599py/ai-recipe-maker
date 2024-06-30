import URL from "../.env"
const videoSection = document.querySelector("section");
const loader = document.querySelector('.container')



let api;
document.getElementById('recipe-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const text = document.getElementById('inputvalue').value;

    api = `${URL}}?q=${encodeURIComponent(text)}`

    loader.style.display = "block"; // Show loader before fetching data

    setTimeout(getVideos, 3000); // Add a delay before fetching videos
});

function getVideos(){
    fetch(api)
        .then(res => res.json())
            .then(data => {
                loader.style.display = "none";
                data.items.forEach(element => {
                    videoSection.innerHTML += `
                    <a target="_blank" href="https://www.youtube.com/watch?v=${element.snippet.resourceId.videoId}" class="yt-video"/>
                        <img src="${element.snippet.thumbnails.maxres.url}" />
                        <h3>${element.snippet.title}</h3>
                        </a>` 
                });
    }).catch(err => {
        loader.style.display = "none";
        videoSection.innerHTML = '<h3>Sorry! Something went wrong</h3>'
    })
}

