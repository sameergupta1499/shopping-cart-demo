import React from "react";
import {useSelector,useDispatch} from 'react-redux';
import {updateProducts,updateBrands} from '../../actions'

function DummyComponent() {
    const currentPage = useSelector(state=>state.CurrentPage)
    const dispatch = useDispatch()
    return (
        <>
            <div className="dummy-component">
                <button onClick={()=>dispatch(updateProducts())}>Fetch Products</button>
                <button onClick={()=>dispatch(updateBrands())}>Fetch Brands</button>
                <p>product-container-header</p>
            </div>
       </>
    )
}
export default DummyComponent