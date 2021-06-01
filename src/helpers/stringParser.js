const parse = (location) => {

    console.log('-------');

    console.log(typeof location);

    console.log(location.length);

    const replaceObelo = location.replace(/%20/g, ' ');

    console.log(replaceObelo);

    const locationArray = replaceObelo.replace('?', '').split('&');

    console.log(locationArray);

    let result = {};
    locationArray.forEach(e => {

        console.log(e.trim());

        const [clave, valor] = e.trim().split('=');
        result = { ...result, [clave]: valor }
    });

    console.log(result);

    console.log('-------');
    return result;
}

const holaMundo = () => {
    console.log('Hola');
}

const getInArray = (string) => {

    const isNotEmptyOrInvalid = (string !== '?q=') && string;

    const replaceCharacterToSpace = isNotEmptyOrInvalid && string.replace(/%20|q=|\s/g, ' '); // /%20|q=|\s|[$-/:-?{-~!"_`\[\]]/g

    const array = isNotEmptyOrInvalid && replaceCharacterToSpace.replace('?', '').split('&');

    let narray = [];
    isNotEmptyOrInvalid &&
        array.forEach(e => {
            narray.push(e.trim());
        });

    return narray;
}

const stringToHTML = (response) => {
    // var frag = document.createDocumentFragment();
    // for (var x = 0; x < 10; x++) {
    //     var li = document.createElement("li");
    //     li.innerHTML = "List item " + x;
    //     frag.appendChild(li);
    // }
    let frag = document.createRange().createContextualFragment('<div>One</div><div>Two</div>');
    return frag;
}

export default {
    parse,
    holaMundo,
    getInArray,
    stringToHTML
};
