import React from 'react';

export default function measure(ComposedComponent) {
    return (
        class Measure extends React.Component {
            state = {};

            componentWillUnmount() {
                window.removeEventListener('resize', this.resize);
            }
            componentDidMount() {
                this._parent = this.refs.container.parentNode;
                window.addEventListener('resize', this.resize);
                this.resize();
            }
            resize = () => {
                this.setState({
                    containerHeight: this._parent.offsetHeight,
                    containerWidth: this._parent.offsetWidth,
                    clientHeight: this._parent.clientHeight,
                    clientWidth: this._parent.clientWidth,
                });
            };
            render() {
                console.log('measure', this.state);
                return (
                    <div ref="container">
                        <ComposedComponent
                            ref="component"
                            {...this.state}
                            {...this.props} />
                    </div>
                );
            }
        }
    );
}
