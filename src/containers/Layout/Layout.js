import React, {Component} from 'react';
import classes from './Layout.css';
import Aux from '../../UI/Aux/Aux';
import Toolbar from '../../components/Toolbar/Toolbar';

//src/components/Toolbar/Toolbar.js

class Layout extends Component {
    render(){
        return(
            <Aux>
                <Toolbar />
                <main className={classes.Content}>
                    <div> Layout example</div>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout