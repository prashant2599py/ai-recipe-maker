const videoSection = document.querySelector("section");
const loader = document.querySelector('.container')


// document.getElementById('recipe-form').addEventListener("submit", function(event){
//     event.preventDefault();

//     const text = document.getElementById('inputvalue').value;
    
//     const URL = `https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyApD-zTzkXsCUmAv1QfBbLtqdn-0YJg6Sw&q=${text}&type=video&part=snippet`;
    
//     loader.style.display = "block";
    
//     setTimeout(getVideos, 3000);
// })
// function getVideos(){
    
//     fetch(URL)
//         .then(res => res.json())
//             .then(data => {
//                 loader.style.display = "none";
//                 data.items.forEach(element => {
//                     videoSection.innerHTML += `
//                     <a target="_blank" href="https://www.youtube.com/watch?v=${element.snippet.resourceId.videoId}" class="yt-video"/>
//                         <img src="${element.snippet.thumbnails.maxres.url}" />
//                         <h3>${element.snippet.title}</h3>
//                         </a>` 
//                 });
//     }).catch(err => {
//         loader.style.display = "none";
//         videoSection.innerHTML = '<h3>Sorry! Something went wrong</h3>'
//     })
// }

document.getElementById('recipe-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const text = document.getElementById('inputvalue').value;

    const URL = `https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyApD-zTzkXsCUmAv1QfBbLtqdn-0YJg6Sw&q=${text}&type=video&part=snippet`;

    loader.style.display = "block"; // Show loader before fetching data

    setTimeout(getVideos, 3000); // Add a delay before fetching videos
});

function getVideos(){
    fetch(URL)
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

