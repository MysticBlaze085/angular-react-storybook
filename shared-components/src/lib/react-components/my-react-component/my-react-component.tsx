import styles from './my-react-component.module.scss';

/* eslint-disable-next-line */
export interface MyReactComponentProps {}

export function MyReactComponent(props: MyReactComponentProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyReactComponent!</h1>
    </div>
  );
}

export default MyReactComponent;
