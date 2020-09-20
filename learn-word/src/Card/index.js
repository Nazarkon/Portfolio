import React, { Component } from 'react';
import s from './Card.module.scss';
import 'antd/dist/antd.css'

class OneCard extends Component {

    state = {
        done: false
    }


    handleEvent(){
        const currValue = !this.state.done
        this.setState({
            done: currValue
        })
    }
    render(){
        const {eng , rus } = this.props
        return (
            <>  
                <div style={{backgroundColor: 'inherit',width: '100px', height: '100px' , perspective: '1000px' , textAlign: 'center' , margin: '10px'}} className={this.state.done ? s.flipCard : null} onClick={this.handleEvent.bind(this)}>
                    <div className={s.flipCardInner}>
                        <div className={s.flipCardFront}>
                        { eng }
                        </div>
                    <div className={s.flipCardBack}>
                        { rus }
                    </div>
                </div>
                </div>
                </>
                
        );
    }
}

export default OneCard;