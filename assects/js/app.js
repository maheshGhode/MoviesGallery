
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=3'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

let cl = console.log
 
const moviep = document.getElementById("movieposter");
const search = document.getElementById("search");

function findmovie(event){
    if(event.key === "Enter"){
        let fname = event.target.value.toLowerCase().trim();
        // cl(fname)
        let findArray = results.filter(movie => movie.title.toLowerCase().trim().includes(fname));
        cl(findArray);
        movieArray(findArray);         
    }else{
        movieArray(results);
    };
};


function movieArray(arr){
    let final = ` `;
    arr.forEach(element => {
        final += `
        <div class="col-md-3">
          <div class="card">
             <div class="card-body">
                 <figure class="poster">
                     <img src="${IMG_PATH}${element.poster_path}" alt="${element.original_title}" title="${element.original_title} class="img-fluid">
                     <figcaption>
                         <div class="row">
                             <div class="col-9">
                                <h4>${element.original_title}</h4>
                             </div>
                             <div class="col-3">
                                <h6 class="${colors(element.vote_average)}">${(element.vote_average)}</h6>
                             </div>
                         </div>
                     </figcaption>
                     <div class="overviwe none">
                        <h4>${element.original_title}</h4>
                        <p>${element.overview}</p>
                     </div>
                 </figure>
             </div>
           </div>
     </div>
        `

    });
    moviep.innerHTML = final;
}

movieArray(results);


function colors(rating){
    if(rating >= 7){
        return 'green'
    }else if(rating >= 5){
        return 'orange'
    }else {
        return 'pink'
    } 
    
}



search.addEventListener("keyup", findmovie);