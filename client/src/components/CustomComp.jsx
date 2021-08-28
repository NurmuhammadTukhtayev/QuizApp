import Select, { components } from 'react-select';

const controlStyles = {
    borderRadius: '1px solid red',
    background:'transparent',
    textAlign:"center",
    maxWidth:"50%",
    marginLeft:"25%",
    padding: '5px',
    color: 'white',
};

const ControlComponent = props => (
    <div style={controlStyles}>
        {<p>Choose the category</p>}
        <components.Control {...props} />
    </div>
);

export default function CustomControl({categories}){
        return (
            <Select
                isClearable
                components={{ Control: ControlComponent}}
                isSearchable
                name="color"
                options={categories}
            />
        );
}