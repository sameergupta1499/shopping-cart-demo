import React from "react";
import {connect} from 'react-redux';
import {updatePageState} from '../../../services/page/action'

class PaginationContainer extends React.Component {
    constructor(props){
        super(props)
        this.onUpdatePage=this.onUpdatePage.bind(this)
    }
    componentDidMount() {
        this.props.onUpdatePage()
    }
    onUpdateProducts(){
        this.props.onUpdatePage()
    }
    render(){
        console.log(this.props.products.pageDetails)
        return (
            <>
                <div className="pagination-container">
                    <p>{this.props.pageDetails}</p>
                </div>
           </>
        )
    }
}
//To get props to the component, and to get all product just return the state else type the specific props name you want.
//props argument is the props send by the parent component, to use just create a new key and put the props as the value in it.
const mapStateToProps = (state,props)=>{
    return {
        pageDetails:state.pageDetails
    }
}
const mapActionsToProps={
    onUpdatePage:updatePageState
}
export default connect(mapStateToProps,mapActionsToProps) (PaginationContainer);