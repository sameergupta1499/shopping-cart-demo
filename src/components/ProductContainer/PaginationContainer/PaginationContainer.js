import React from "react";
import {connect} from 'react-redux';
import {updatePageState} from '../../../services/page/action'
import Pagination from "react-js-pagination";

function getTotalPages(tp,ppp){
    if(tp%ppp===0){
        return parseInt(tp/ppp)
    }
    return parseInt((tp/ppp)+1)
}

class PaginationContainer extends React.Component {
    constructor(props){
        super(props)
        this.onUpdatePage=this.onUpdatePage.bind(this)
    }
    onUpdatePage(page){
        this.props.onUpdatePage(page)
    }

    render(){
        //console.log(this.props.pageDetails)
        return (
            <>
                <div className ="pagination-container-wrapper">
                    <div className="PageStatusDisplay">Page {this.props.pageDetails.CurrentPage} of {getTotalPages(this.props.totalProducts,this.props.pageDetails.ProductPerPage)}</div>
                    <div className="pagination-container">
                        <Pagination
                            hideDisabled
                            hideNavigation
                            firstPageText='FIRST'
                            lastPageText='LAST'
                            activePage={this.props.pageDetails.CurrentPage}
                            itemsCountPerPage={this.props.pageDetails.ProductPerPage}
                            totalItemsCount={this.props.totalProducts}
                            pageRangeDisplayed={5}
                            onChange={page=>this.props.onUpdatePage(page)}
                        />
                    </div>
                </div>
            </>
        )
    }
}
//To get props to the component, and to get all product just return the state else type the specific props name you want.
//props argument is the props send by the parent component, to use just create a new key and put the props as the value in it.
const mapStateToProps = (state,props)=>{
    return {
        pageDetails:state.pageDetails,
        totalProducts:state.products.TotalProducts
    }
}
const mapActionsToProps={
    onUpdatePage:updatePageState
}
export default connect(mapStateToProps,mapActionsToProps) (PaginationContainer);