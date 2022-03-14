import React, { Component } from "react";
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="background">
          <h1 className="error-message">Something Went Wrong!!!</h1>
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
