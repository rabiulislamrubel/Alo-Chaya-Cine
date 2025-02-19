

const data = [
    {
        "id": "0101",
        "cover": "once-in-ho.jpg",
        "title": "Once Upon a Time... in Hollywood",
        "description": "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
        "genre": "Comedy/Drama",
        "rating": 5,
        "price": 140,
        "trending": true,
        "newRelease": false,
        "comingSoon": false
    },
    {
        "id": "0102",
        "cover": "marriage-strory.jpg",
        "title": "Marriage Story",
        "description": "Noah Baumbach's incisive and compassionate look at a marriage breaking up and a family staying together.",
        "genre": "Comedy/Drama",
        "rating": 3,
        "price": 90,
        "trending": true,
        "newRelease": false,
        "comingSoon": false
    },
    {
        "id": "0103",
        "cover": "pain-and-gain.jpg",
        "title": "Pain & Gain",
        "description": "A trio of bodybuilders in Florida get caught up in an extortion ring and a kidnapping scheme that goes terribly wrong.",
        "genre": "Action/Comedy/Crime/Drama",
        "rating": 4,
        "price": 100,
        "trending": true,
        "newRelease": false,
        "comingSoon": false
    },
    {
        "id": "0104",
        "cover": "parasite.jpg",
        "title": "Parasite",
        "description": "All unemployed, Ki-taek and his family take peculiar interest in the wealthy and glamorous Parks, as they ingratiate themselves into their lives and get entangled in an unexpected incident.",
        "genre": "Comedy, Drama, Thriller",
        "rating": 4,
        "price": 250,
        "trending": true,
        "newRelease": false,
        "comingSoon": false
    },
    {
        "id": "0105",
        "cover": "iron-man.png",
        "title": "Iron Man",
        "description": "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
        "genre": "Action/Adventure/Sci-fi",
        "rating": 5,
        "price": 100,
        "trending": true,
        "newRelease": false,
        "comingSoon": false
    },
    {
        "id": "0106",
        "cover": "bogota.jpg",
        "title": "Bogota: City of the Lost",
        "description": "Young man moving to Colombia with his family for a better life, but he ends up living from hand to mouth. He later goes against all odds to dominate Bogota's black market.",
        "genre": "Crime/Drama/Thriller",
        "rating": 4,
        "price": 110,
        "trending": false,
        "newRelease": true,
        "comingSoon": false
    },
    {
        "id": "0107",
        "cover": "ballot.jpg",
        "title": "Ballot",
        "description": "A teacher pays an increasingly steep price for defending the democratic process of the election.",
        "genre": "Political Thriller/Comedy/Drama/Thriller",
        "rating": 3,
        "price": 90,
        "trending": false,
        "newRelease": true,
        "comingSoon": false
    },
    {
        "id": "0108",
        "cover": "pushpa_2.jpg",
        "title": "Pushpa 2: The Rule",
        "description": "A smuggling kingpin faces off against a vengeful rival while manipulating politics, making big deals, and navigating tense confrontations. A public apology leads to a dramatic showdown, ending with challenge.",
        "genre": "Action/Crime/Drama/Thriller",
        "rating": 5,
        "price": 140,
        "trending": false,
        "newRelease": true,
        "comingSoon": false
    },
    {
        "id": "0109",
        "cover": "singham_again.jpg",
        "title": "Singham Again",
        "description": "A new chase is coming - with reference to the epic Ramayana, Singham and his team face an ambiguous villain in order to save his wife.",
        "genre": "Action/Drama",
        "rating": 4,
        "price": 100,
        "trending": false,
        "newRelease": true,
        "comingSoon": false
    },
    {
        "id": "0110",
        "cover": "Back_in_action.jpg",
        "title": "Back in Action",
        "description": "Former CIA spies Emily and Matt are pulled back into espionage after their secret identities are exposed.",
        "genre": "Action/Drama",
        "rating": 4,
        "price": 130,
        "trending": false,
        "newRelease": true,
        "comingSoon": false
    },
]


function getMovieList() {
    return data;
}

function getTrendingMovieList() {
    const filterTrendingMovies = data.filter((movie) => movie.trending);
    return filterTrendingMovies;
}

function getNewReleaseMovieList() {
    const filterReleaseMovie = data.filter((movie) => movie.newRelease);
    return filterReleaseMovie;
}


function getComingSoonMovieList() {
    const filterComingSoonMovie = data.filter((movie) => movie.comingSoon);
    return filterComingSoonMovie;
}



export { getComingSoonMovieList, getMovieList, getNewReleaseMovieList, getTrendingMovieList };

