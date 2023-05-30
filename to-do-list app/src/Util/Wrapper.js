import './Wrapper.css';

const Wrapper = props => {
    return(
        <div className="container">
            {props.children}
        </div>
    );
};

export default Wrapper;