import { useState } from "react"
import { PropTypes } from 'prop-types';

export const AddCategory = ({julio}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2) {
            julio((cate) => [inputValue, ...cate]);
        };
    }

    return (
        <form onSubmit={handleSubmitForm}>
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </div>
        </form>
    )
};

AddCategory.propTypes = {
    julio: PropTypes.func.isRequired
};