import { useForm } from '../../hooks/useForm';
import React, { useState } from 'react';
import { FloatingDiv } from './FloatingDiv';

import { useAsyncHook } from '../../hooks/useAsyncHook';

import './formSearch.css';

import { ReactComponent as ImgDelete } from '../../img/svg/delete-sign.svg';

export const FormSearch = ({ querySearch, printResultInScreen_fn }) => {

    // use
    const [formValues, handleInputChange] = useForm({
        searchText: querySearch
    });
    const { searchText } = formValues;
    const [showSelectOptions, setShowSelectOptions] = useState(false);
    const [bool_toSearchHero, set_boolToSearchHero] = useState(false);
    const [toSearchHero, setToSearchHero] = useState('');

    const [heroes, loading] = useAsyncHook(toSearchHero, bool_toSearchHero, 12);
    // console.log(heroes, loading);

    // console.log('Me he ejecutado FormSearch!!!!');

    // Métodos 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('--handleSubmit--');
        (searchText.trim() !== '') && showHide_resultBoxSearch(true);
        (searchText.trim() !== '') && toSearchHeroForFloatingDiv(true);
        handleInputChange({
            target: {
                name: 'searchText',
                value: searchText
            }
        });
    }
    const toSearchHeroForFloatingDiv = (booleanOption) => {
        set_boolToSearchHero(booleanOption);
        setToSearchHero(searchText);
    }
    const handleOnBlur = (e) => {
        e.preventDefault();
        // console.log('handleOnBlur handleOnFocusInput!!!!');
        // console.log('searchText::: ', searchText);
        (searchText === '') && showHide_resultBoxSearch(false);
    }
    const showHide_resultBoxSearch = (option) => {
        setShowSelectOptions(option);
        !option && toSearchHeroForFloatingDiv(false);
        // console.log('::setShowSelectOptions ', option);
    }
    const handleOnClick_btnDelete = (e) => {
        e.preventDefault();
        // console.log('¡¡¡¡¡handleOnClick_btnDelete!!!!!');
        showHide_resultBoxSearch(false);
        handleInputChange({
            target: {
                name: 'searchText',
                value: ''
            }
        });
    }

    return (
        <div style={{ position: 'relative' }}>
            <form onSubmit={handleSubmit} style={{ backgroundColor: 'crimson', padding: '5px' }}>
                <div className="input-group mb-3"
                    style={{
                        position: 'relative',
                    }}
                >
                    <input
                        type="text"
                        className="form-control"
                        style={{
                            paddingRight: '3rem'
                        }}
                        placeholder="Find your hero"
                        aria-label="Find your hero"
                        aria-describedby="button-searchHero"
                        name="searchText"
                        autoComplete="off"
                        value={searchText}
                        onChange={handleInputChange}
                        onBlur={handleOnBlur}
                    />
                    <ImgDelete
                        className="mx-2 imgDelete"
                        width="20px"
                        height="20px"
                        style={{ visibility: (searchText === '') ? 'hidden' : 'visible' }}
                        onClick={handleOnClick_btnDelete}
                    />
                    <button
                        className="btn btn-outline-secondary"
                        type="submit"
                        id="button-searchHero">
                        Search...
                    </button>
                </div>
            </form>
            {
                showSelectOptions && <FloatingDiv
                    showHide_resultBoxSearch={showHide_resultBoxSearch}
                    heroes={heroes}
                />
            }
        </div >
    )
}
