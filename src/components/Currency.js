import React,{ useContext } from 'react'
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
    const { dispatch } = useContext(AppContext);

    function handleChange(name) {
        switch(name){
            case "dollar":
                dispatch({
                    type: 'CHG_CURRENCY',
                    payload: '$',
                });
                return
            case "pound":
                dispatch({
                    type: 'CHG_CURRENCY',
                    payload: '£',
                });
                return;
            case "euro":
                dispatch({
                    type: 'CHG_CURRENCY',
                    payload: '€',
                });
                return
        }
        return  
    }
    return (
            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
                </div>
                <select className="custom-select" id="inputGroupSelect01" 
                    onChange={(event) => {
                        handleChange(event.target.value)
                    }}
                >
                        <option defaultValue>Choose...</option>
                        <option value="dollar" name="dollar"> Dollar $</option>
                        <option value="pound" name="pound">Pound £</option>
                        <option value="euro" name="euro">Euro €</option>
                </select>
            </div>
	);
}

export default Currency
