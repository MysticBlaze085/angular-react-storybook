import * as React from 'react';
import styles from './test-react-component.module.css';

/* eslint-disable-next-line */
export interface TestReactComponentProps {}

export function TestReactComponent(props: TestReactComponentProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TestReactComponent!</h1>
    </div>
  );
}

export default TestReactComponent;
