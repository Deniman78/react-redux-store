import React, { Component } from 'react';
import ErrorIndecator from '../error-indecator';

class ErrorBoundray extends Component {
    state = {
        hasError: false,
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        const { hasError } = this.state;
        return <>{hasError ? <ErrorIndecator /> : this.props.children}</>;
    }
}

export default ErrorBoundray;
