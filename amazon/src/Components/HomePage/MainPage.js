import React,{Component} from 'react';
import AdversetimentOne from './AdversetimentOne/AdversetimentOne';
import AdversetimentFour from './AdversitementFour/AdversitementFour';
import './Mainpage.css';
class MainPage extends Component{
    constructor(props){
        super(props);
        this.state = { }
    }
    render() {
        return(
            <div className="mainpage">
                <div style={{paddingTop: '260px' , display: 'flex',flexWrap: 'wrap'}}>  
                    <AdversetimentOne/>
                    <AdversetimentFour/>
                    <AdversetimentFour/>
                    <AdversetimentFour/>
                    <AdversetimentFour/>
                    <AdversetimentFour/>
                </div>
            </div> 
        ) ;
    }
}
export default MainPage;