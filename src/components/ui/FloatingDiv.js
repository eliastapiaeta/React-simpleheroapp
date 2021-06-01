import React from 'react';
import './floatingDiv.css';
import { MiniDetailHero } from './MiniDetailHero';

export const FloatingDiv = React.memo(({ showHide_resultBoxSearch, heroes: list_heroes = [] }) => {
    const click = (e) => {
        e.preventDefault();
        showHide_resultBoxSearch();
        console.log('clicked');
    }

    // console.log('-FloatingDiv________XD');
    // console.log(showHide_resultBoxSearch, list_heroes);

    let all = {};
    let comic = {};
    let movie = {};
    let anime = {};

    if ((list_heroes !== []) && (list_heroes[0] !== undefined)) {
        list_heroes[0].data.map((heroes) => {
            // console.log(heroes.category);
            all[heroes.id] = heroes;
            if (heroes.category === 'comic') {
                return comic[heroes.id] = heroes;
            }
            if (heroes.category === 'movie') {
                return movie[heroes.id] = heroes;
            }
            if (heroes.category === 'anime') {
                return anime[heroes.id] = heroes;
            }
            return heroes;
        });
    } else {
        // console.log('vacio');
    }

    // (Object.keys(all).length !== 0) && console.log(all);
    const heroes_all = (Object.keys(all).length !== 0) && Object.entries(all);
    // (Object.keys(comic).length !== 0) && console.log(comic);
    const heroes_comic = (Object.keys(comic).length !== 0) && Object.entries(comic);
    // (Object.keys(movie).length !== 0) && console.log(movie);
    const heroes_movie = (Object.keys(movie).length !== 0) && Object.entries(movie);
    // (Object.keys(anime).length !== 0) && console.log(anime);
    const heroes_anime = (Object.keys(anime).length !== 0) && Object.entries(anime);

    // heroes_all.map((hero) => {
    //     console.log(hero);
    //     console.log(hero[1]);
    // })

    return (
        <div className="card text-center shadow">
            <div className="card-header ">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all" type="button" role="tab" aria-controls="all" aria-selected="true">
                            Todos
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="comic-tab" data-bs-toggle="tab" data-bs-target="#comic" type="button" role="tab" aria-controls="comic" aria-selected="false">Comic</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="movie-tab" data-bs-toggle="tab" data-bs-target="#movie" type="button" role="tab" aria-controls="movie" aria-selected="false">Movie</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="anime-tab" data-bs-toggle="tab" data-bs-target="#anime" type="button" role="tab" aria-controls="anime" aria-selected="false">Anime</button>
                    </li>
                    <li className="nav-item close">
                        <button onClick={click} className="btn-close" type="button" aria-label="Close"></button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">

                        {
                            // heroes_all && heroes_all.map((dataHero) => {
                            //     console.log(dataHero[1]);
                            // })
                            heroes_all && heroes_all.map((dataHero, i) => <MiniDetailHero key={i} dataHero={dataHero[1]} />)
                        }

                    </div>
                    <div className="tab-pane fade" id="comic" role="tabpanel" aria-labelledby="comic-tab">

                        {
                            // comic && comic.map((dataHero, i) => <Card key={i} dataHero={dataHero} />)
                            heroes_comic && heroes_comic.map((dataHero, i) => <MiniDetailHero key={i} dataHero={dataHero[1]} />)
                        }

                    </div>
                    <div className="tab-pane fade" id="movie" role="tabpanel" aria-labelledby="movie-tab">

                        {
                            // movie && movie.map((dataHero, i) => <Card key={i} dataHero={dataHero} />)
                            heroes_movie && heroes_movie.map((dataHero, i) => <MiniDetailHero key={i} dataHero={dataHero[1]} />)
                        }

                    </div>
                    <div className="tab-pane fade" id="anime" role="tabpanel" aria-labelledby="anime-tab">
                        {
                            heroes_anime && heroes_anime.map((dataHero, i) => <MiniDetailHero key={i} dataHero={dataHero[1]} />)
                        }
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button
                        className="btn btn-primary MyButton"
                        type="button"
                    >
                        Más resultados
                    </button>
                </div>
            </div>
        </div >

    )
})
