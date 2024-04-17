// const videoSection = document.querySelector("section");
const loader = document.querySelector('.container-loading')
const searchQuery = document.getElementsByClassName('instructions').value;

const URL = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=15&playlistId=UUe2JAC5FUfbxLCfAvBWmNJA&key=AIzaSyCiV_95H5JSpcusw4xqMM5wUx2Nq7mXWAo';


setTimeout(fetchYoutubeData, 1000);
function fetchYoutubeData(){
    
    fetch(URL)
        .then(res => res.json())
            .then(data => {
                loader.style.display = "none";
                data.items.forEach(element => {
                    searchQuery.innerHTML += `
                    <a target="_blank" href="https://www.youtube.com/watch?v=${element.snippet.resourceId.videoId}" class="yt-video"/>
                        <img src="${element.snippet.thumbnails.maxres.url}" />
                        <h3>${element.snippet.title}</h3>
                        </a>` 
                });
    }).catch(err => {
        loader.style.display = 'none';
        // searchQuery.innerHTML = '<h3>Sorry Something went wrong</h3>'
    })
}



// try{
//     const fetchData = async (URL)=> {
//         const response = await fetch(URL)
//         const result  = await response.json();
//         result.items.forEach(element => {
//             videoSection.innerHTML += `
//                     <a target="_blank" href="https://www.youtube.com/watch?v=${element.snippet.resourceId.videoId}" class="yt-video"/>
//                         <img src="${element.snippet.thumbnails.maxres.url}" />
//                         <h3>${element.snippet.title}</h3>
//                     </a>` 
//         })
//     }

// }catch(err){
//     videoSection.innerHTML = '<h3>Sorry something went wrong </h3>'
// }