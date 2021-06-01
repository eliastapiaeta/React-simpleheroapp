import React from 'react';

import { ReactComponent as ImgWhatsapp } from '../../img/svg/whatsapp-4.svg';
import { ReactComponent as ImgTwitter } from '../../img/svg/twitter-4.svg';
import { ReactComponent as ImgTelegram } from '../../img/svg/telegram-4.svg';
import { ReactComponent as ImgSnapshat } from '../../img/svg/snapchat-4.svg';
import { ReactComponent as ImgFacebook } from '../../img/svg/facebook-5.svg';
import { ReactComponent as ImgInstagram } from '../../img/svg/instagram-9.svg';

import './footer.css';

export const Footer = () => {
    return (
        <footer className="bg-dark text-center text-white w-100 abajo">
            <div className="container p-4">
                <section className="mb-4 w-100">
                    <a className="btn btn-outline-light btn-floating m-1 a-IconSocialMedia" href="#!" role="button"
                    >
                        <ImgWhatsapp
                            className="iconSocialMedia"
                        />
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1 a-IconSocialMedia" href="#!" role="button"
                    >
                        <ImgTwitter
                            className="iconSocialMedia"
                        />
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1 a-IconSocialMedia" href="#!" role="button"
                    >
                        <ImgTelegram
                            className="iconSocialMedia"
                        />
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1 a-IconSocialMedia" href="#!" role="button"
                    >
                        <ImgSnapshat
                            className="iconSocialMedia"
                        />
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1 a-IconSocialMedia" href="#!" role="button"
                    >
                        <ImgFacebook
                            className="iconSocialMedia"
                        />
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1 a-IconSocialMedia" href="#!" role="button"
                    >
                        <ImgInstagram
                            className="iconSocialMedia"
                        />
                    </a>
                </section>

                <section className="w-100">
                    <form action="">
                        <div className="row d-flex justify-content-center">

                            <div className="col-auto">
                                <p className="pt-2">
                                    <strong>Subscríbete y sé el aporte que necesitamos</strong>
                                </p>
                            </div>

                            <div className="col-md-6 col-12">
                                <div className="form-outline form-white mb-4">
                                    <input type="email" id="form5Example2" className="form-control" />
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

                <section className="mb-4 w-100">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                        eum harum corrupti dicta, aliquam sequi voluptate quas.
                        </p>
                </section>

                <section className="w-100">
                    <div className="row">

                        <div className="col-lg-12 col-md-12 mb-12 mb-md-0">
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

            <div className="text-center p-3  w-100" style={{ backgroundColor: "rgb(0, 0, 0, 0.2)" }}>
                © 2020 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
        </footer>

    )
}
