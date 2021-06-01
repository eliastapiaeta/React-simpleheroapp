import { Link } from 'react-router-dom';
import './miniDetailHero.css';

export const MiniDetailHero = ({ id, dataHero }) => {

    // console.log('----------------------CARD--------------------');
    // console.log(dataHero);

    return (
        <Link to={`./hero/${dataHero.id}`} style={{
            cursor: 'pointer',
            textDecoration: 'unset',
            color: 'currentcolor'
        }}>
            <div className="card" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                    <div className="col-3 divIMG"                >
                        <img
                            src={`./assets/heroes/${dataHero.id}.jpg`}
                            // className="card-img"
                            alt={dataHero.superhero}
                            style={{
                                width: "80%",
                                height: 100,
                                objectFit: 'cover',
                                objectPosition: '20% 10%'
                            }}
                        />

                        {/* <svg
                            className="bd-placeholder-img"
                            style={{
                                width: "80%",
                                height: 100,

                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            aria-label="Placeholder: Image"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false">
                            <title>Placeholder</title>
                            <rect style={{ width: "100%", height: "100%" }}></rect>
                            <text style={{ marginRight: '.3em' }}>Image</text>
                        </svg> */}
                    </div>
                    <div className="col">
                        <div className="card-body MyCard-body">
                            <div className="row">
                                <div className="col-8">
                                    <p
                                        style={{
                                            fontSize: 17,
                                            fontWeight: 'bold',
                                            marginTop: -10,
                                            marginBottom: 'auto'
                                        }}
                                    >
                                        {dataHero.superhero}

                                    </p>
                                </div>
                                <div className="col-4">
                                    <p
                                        style={{
                                            fontSize: 11,
                                            marginBottom: 0,
                                            textAlign: 'center',
                                        }}>match with</p>
                                </div>
                            </div>
                            <small
                                className="text-muted"
                                style={{
                                    fontSize: 'small',
                                }}
                            >
                                {`${dataHero.category}. ${dataHero.publisher}`}
                            </small>
                            <div className="my-div-cardText">
                                <p
                                    className="card-text"
                                    style={{
                                        margin: 0
                                    }}
                                >
                                    {dataHero.resume}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr style={{ margin: 'unset' }} />
        </Link>
    )
}
