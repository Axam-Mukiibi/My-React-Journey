import './Frame.css';

const OutsideFrame = (props) => {
    return (
        <div className="container">{props.children}</div>
    );
};

export default OutsideFrame;