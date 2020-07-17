export const customStyles = {
    option: (provided) => ({
        ...provided,
        color: '#965af0',
    }),
    menu: (provided) => ({
        ...provided,
        width: '100%',
        background: '#fff',
    }),
    container: (provided) => ({
        ...provided,
        // border: '1px solid white',
    }),
    menuList: (provided) => ({
        ...provided,
        border: '1px solid #965af0',
    }),
    control: (provided) => ({
        ...provided,
        boxShadow: 'none',
        color: '#965af0',
        background: 'transparent',
        borderRadius: '10px',
        cursor: 'pointer',
        border: '2px solid #965af0',
    }),
    placeholder: (provided) => ({
        ...provided,
        color: '#965af0',
        fontWeight: 'bold',

    }),
    singleValue: (provided) => ({
        ...provided,
        color: '#965af0',
    }),
};
