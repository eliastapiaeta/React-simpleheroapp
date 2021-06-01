import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {

    const { heroeId } = useParams();
    console.log(heroeId);

    const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

    console.log(hero);

    if (!hero) {
        return <Redirect to='/' />
    }

    const handleReturn = () => {
        if (history.length <= 2) {
            hero.publisher === 'Marvel Comics' && history.push('/marvel');
            hero.publisher === 'DC Comics' && history.push('/dc');
        } else {
            history.goBack();
        }
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    return (
        <>
            <main className="container">

                <div className="row">
                    <div className="col-md-8">

                        <h3 className="pb-4 mb-4 fst-italic border-bottom">
                            {superhero}
                        </h3>

                        <article className="blog-post">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col-5">
                                    <img
                                        src={`../assets/heroes/${heroeId}.jpg`}
                                        alt={superhero}
                                        className="img-thumbnail animate__animated animate__pulse"
                                    />
                                </div>
                                <div className="col-7 p-3 d-flex flex-column position-static  animate__animated animate__fadeInRight">
                                    <strong className="d-inline-block mb-2 text-success">{publisher}</strong>
                                    <h3 className="mb-0">{superhero}</h3>
                                    <hr />
                                    <p className="card-text mb-auto">
                                        <li className="list-group-item"><b>Alter ego: </b> {alter_ego} </li>
                                        <li className="list-group-item"><b>Publisher: </b> {publisher} </li>
                                        <li className="list-group-item"><b>First appearance: </b> {first_appearance} </li>
                                        <li className="list-group-item"><b>Characters: </b> {characters} </li>
                                    </p>
                                    <button
                                        className="btn btn-outline-info"
                                        onClick={handleReturn}
                                    >
                                        Return
                                    </button>
                                </div>
                            </div>
                        </article>

                    </div>

                    <div className="col-md-4">
                        <div className="p-4 mb-3 bg-light rounded">
                            <h4 className="fst-italic">About</h4>
                            <p className="mb-0">Saw you downtown singing the Blues. Watch you circle the drain. Why don't you let me stop by? Heavy is the head that <em>wears the crown</em>. Yes, we make angels cry, raining down on earth from up above.</p>
                        </div>

                        <div className="p-4">
                            <h4 className="fst-italic">Archives</h4>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Accordion Item #1
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Accordion Item #2
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Accordion Item #3
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </main>



            <footer className="bg-dark mt-auto py-3 text-center text-white">
                <div className="container p-4">
                    <section className="mb-4">
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-facebook-f"></i
                        ></a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-twitter"></i
                        ></a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-google"></i
                        ></a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-instagram"></i
                        ></a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-linkedin-in"></i
                        ></a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-github"></i
                        ></a>
                    </section>

                    <section className="">
                        <form action="">
                            <div className="row d-flex justify-content-center">

                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>

                                <div className="col-md-5 col-12">
                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="form5Example2" className="form-control" />
                                        <label className="form-label" htmlFor="form5Example2">Email address</label>
                                    </div>
                                </div>

                                <div className="col-auto">
                                    <button type="submit" className="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>

                            </div>
                        </form>
                    </section>



                    <section className="mb-4">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                            repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                            eum harum corrupti dicta, aliquam sequi voluptate quas.
                        </p>
                    </section>

                    <section className="">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Links</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 4</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Links</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 4</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Links</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 4</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Links</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 4</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="text-center p-3" style={{ backgroundColor: "rgb(0, 0, 0, 0.2)" }}>
                    © 2020 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
            </footer>

        </>
    )
}
