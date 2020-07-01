import React from 'react'

// const Terminal = () => (
//     <div class="terminal">
//         <ul class="terminal__output"></ul>
//         <div class="terminal__input-wrapper">
//             <pre class="terminal__pre"><div class="terminal__input" contentEditable></div></pre>
//         </div>
//     </div>
// )

class Terminal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    handleClick(e) {
        if (this.node.contains(e.target)) {
            this.setState({ active: true });
        } else {
            this.handleClickOutside();
        }
        
    }

    handleClickOutside() {
        console.log('The body was clicked.');
        this.setState({ active: false });
    }

    handleChange(e) {
        console.log(e.target.value + "typing");
    }

    render () {
        return (
        <div className="terminal" onClick={this.handleClick} ref={node => this.node = node}>
            <div className="buttons">
                <div className="close"></div>
                <div className="minimize"></div>
                <div className="expand"></div>
            </div>
            <ul className="terminal__output"></ul>
            <div className="terminal__input-wrapper">
                <pre className="terminal__pre">
                    <div className={this.state.active ? 'terminal__input is-active': 'terminal__input'} 
                        contentEditable></div>
                </pre>
            </div>
        </div>
        );
    }
}

export default Terminal