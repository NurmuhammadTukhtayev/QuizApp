import React, {useState} from 'react';

const Variants = ({create}) => {
    const [inputList, setInputList] = useState([{variant: "" }]);

    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, {variant: "" }]);
    };

    //return variant
    create(inputList)

    return (
        <div className="select">
            <h2>Variants</h2>
            {inputList.map((x, i) => {
                return (
                    <div className="box">
                        <input
                            name="variant"
                            placeholder="variants"
                            onChange={e => handleInputChange(e, i)}
                        />
                        <div>
                            {inputList.length !== 1 && <button
                                className="mr10"
                                onClick={() => handleRemoveClick(i)}>Remove</button>}
                            {inputList.length - 1 === i && <button className="btn-box" onClick={handleAddClick}>More</button>}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Variants;