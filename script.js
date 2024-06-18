document.addEventListener('DOMContentLoaded', () => {
    
    const searchBar = document.querySelector('.search-bar input');
    searchBar.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const movies = document.querySelectorAll('.movie-card');
        movies.forEach(movie => {
            const title = movie.querySelector('h3').innerText.toLowerCase();
            if (title.includes(query)) {
                movie.style.display = 'block';
            } else {
                movie.style.display = 'none';
            }
        });
    });

    
    const profile = document.querySelector('.profile');
    profile.addEventListener('mouseenter', () => {
        profile.querySelector('.dropdown').style.display = 'block';
    });
    profile.addEventListener('mouseleave', () => {
        profile.querySelector('.dropdown').style.display = 'none';
    });
});
