import React, { Component } from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  padding: 20px;
  margin: 20px;
  background-color: rgba(255, 0, 0, 0.1);
  border: 1px solid #ff0000;
  border-radius: 4px;
  color: #ffffff;
`;

const ErrorTitle = styled.h2`
  color: #ff6b6b;
`;

const ErrorMessage = styled.pre`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 10px;
  border-radius: 4px;
  overflow: auto;
  max-height: 300px;
`;

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
        console.error("Error caught by ErrorBoundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <ErrorContainer>
                    <ErrorTitle>Something went wrong.</ErrorTitle>
                    <p>There was an error loading this component. You can continue using the rest of the site.</p>
                    {this.state.error && (
                        <ErrorMessage>
                            {this.state.error.toString()}
                            <br />
                            {this.state.errorInfo && this.state.errorInfo.componentStack}
                        </ErrorMessage>
                    )}
                </ErrorContainer>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary; 