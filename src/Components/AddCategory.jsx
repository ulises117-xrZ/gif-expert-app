import React, { useState } from "react";
import PropTypes from 'prop-types';
export const AddCategory = ({setCategories, categories}) => {
    const [inputValue, setInputValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!inputValue.trim()){
            alert("no data");
            return;
        }
        setCategories( cats => [ inputValue ,...cats ]);
        setInputValue("");
    };
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}