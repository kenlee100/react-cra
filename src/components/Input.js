const Input = ({text = 'text', id = 'id', value ='', onChangeHandler } ) => {
    return (
        <>
            <label htmlFor={id}  className="label">{text}</label>
            <input type="text" id={id} value={value} onChange={onChangeHandler} />
        </>
    )
}

export default Input