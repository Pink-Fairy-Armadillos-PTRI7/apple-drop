import React, { Component } from 'react';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Something went wrong:', {
      error,
      errorInfo: errorInfo.componentStack,
    });
    this.setState({
      hasError: true,
      error,
      errorInfo: errorInfo.componentStack.slice(
        5,
        errorInfo.componentStack.indexOf('(') - 1
      ),
    });
    console.log(this.state.errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          Something went wrong: {JSON.stringify(this.state.error.message)}
          <br /> Component: {JSON.stringify(this.state.errorInfo)}
          <br /> Please try again
        </div>
      );
    }

    return this.props.children;
  }
}
