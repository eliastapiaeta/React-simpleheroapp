import React from 'react';
import stringParser from '../helpers/stringParser';
import getKeyByValue from '../selectors/getKeyByValue';

export function useAsyncHook(searchUrl, toSearchHero = true, limit = 0) {

    const [result, setResult] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {

        // console.log(searchUrl);

        async function fetchData() {

            
            if (toSearchHero) {
                
                console.log('--___useAsyncHook___--');
                console.log('searchUrl: ',searchUrl);
                console.log('toSearchHero: ',toSearchHero);
                console.log('limit: ',limit);

                try {
                    const url = (searchUrl !== '?q=') && await stringParser.getInArray(searchUrl);
                    const response = (searchUrl !== '?q=') && await getKeyByValue.getKeyByValue(url, limit);

                    console.log('url.length: ', url.length);
                    console.log('response.length: ', response[0]['data'].length);
                    console.log('response: ', response[0]['data']);

                    (searchUrl !== '?q=') && setLoading(true);
                    // setArrUrl(url);
                    (searchUrl !== '?q=') && setResult(response);

                } catch (error) {
                    setLoading("null");
                    console.log(error);
                }
            }

        }

        if (searchUrl !== "") {
            fetchData();
        }


    }, [searchUrl, limit, toSearchHero]);

    // console.log('.-----result useAsyncHook::: ', result);

    return [result, loading];
}