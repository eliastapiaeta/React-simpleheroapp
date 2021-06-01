import { useState } from 'react';
import stringParser from '../../helpers/stringParser'; // Parsea el query de búsqueda;
import { BoxShowResult } from '../ui/BoxShowResult';
import { FormSearch } from '../ui/FormSearch';

// import { useAsyncHook } from '../../hooks/useAsyncHook';


export const SearchScreen = ({ history }) => {

    // Query Búsqueda 
    const historyLocationSearch = (history.location.search); //'quilting'; //'q=DC%20&%20Superman&27&Kal';
    const querySearch = String(stringParser.getInArray(historyLocationSearch));

    // use
    const [printResultInScreen, setPrintResultInScreen] = useState(false);
    // const [heroes, loading] = useAsyncHook(querySearch, 3);
    // const [booleanToSearchHero, setBooleanToSearchHero] = useState(false);

    // métodos
    const printResultInScreen_fn = (results) => {
        setPrintResultInScreen(results);
    }

    // console.log(heroes, loading);


    console.log('Me he ejecutado SearchScreen');

    return (
        <>
            <div className="mx-4" style={{
                height: 'fit-content'
            }}>
                <h1>Search Screen</h1>
                <hr />
            </div>

            <div className="row mx-2" style={{
                flexGrow: 1,
                // minHeight: '-webkit-fill-available',
                minHeight: '55vh',
            }}>
                <div className="col-md-6 col-sm-12 col-xs-12" style={{ backgroundColor: 'aqua' }} >

                    <div className="row" >
                        <div className="col-md-12 col-sm-3 col-xs-12">
                            <h4 style={{
                                inlineSize: 'max-content',
                            }}>Search Form</h4>
                        </div>
                        <div className="col-md-12 col-sm-9 col-xs-12">
                            <FormSearch
                                querySearch={querySearch}
                                printResultInScreen_fn={printResultInScreen_fn}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12" style={{ display: "contents", backgroundColor: 'bisque' }}>
                    {
                        printResultInScreen && <BoxShowResult
                            results={printResultInScreen}
                        />
                    }
                </div>
            </div >
        </>
    )
}