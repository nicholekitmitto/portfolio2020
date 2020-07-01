import React from 'react'

class Banner extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const el = document.querySelector('.lamp');
        const body = document.querySelector('body');
        const handleToggle = () => {
        el.classList.toggle('lamp__is-on');
        body.classList.toggle('night');
        }

        el.onclick = () => handleToggle();
        el.addEventListener('keyup', (event) => {
        if(event.keyCode === 13 || event.keyCode === 32) {
            handleToggle();
        }
        });
    }

    render () {
        return (
            <div className="banner">

                <div className="lamp" tabindex="0" onClick={this.handleClick}>
                    <div className="pole"></div>
                    <div className="tippity"></div>
                    <div className="top"></div>
                    <div className="main"></div>
                    <div className="bottom"></div>
                    <div className="bulb"></div>
                    <div className="light"></div>
                </div>

                <div class="container">
                    <div class="potted">
                        <div class="pot">
                            <div class="top"></div>
                            <div class="bottom"></div>
                        </div>
                        <div class="plant">
                            <div class="leaf-middle"></div>
                            <div class="leaf-right"></div>
                            <div class="leaf-back"></div>
                        </div>
    
                    </div>
                    
                    <div class="shelf"></div>
                </div>

                
            </div>
        );
    }
};

export default Banner