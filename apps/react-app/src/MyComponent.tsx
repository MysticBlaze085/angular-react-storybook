import '@rhapsody/angular/esm2022/ang-test/lib/ang-test-web-component';

import React from 'react';

// Declare custom element to be used in JSX
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'my-element': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}

// React component using the Angular Elements web component
const MyReactComponent = () => {
    return (
        <div>
            {/* Use the Angular Elements web component */}
            <my-element></my-element>
        </div>
    );
};

export default MyReactComponent;