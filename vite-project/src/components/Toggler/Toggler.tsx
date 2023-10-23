import Toggle from 'react-toggle';
import "./Toggler.scss";

type Props = {
    label: string;
    onChange: () => void;
}

const Toggler = (props: Props) => {
    const {label, onChange} = props;

    return (
        <>
            <Toggle
                defaultChecked={false}
                icons={false}
                id={"toggler"}
                onChange={onChange}/>
            <label className={"customCheckboxLabel"} htmlFor="toggler">{label}</label>
        </>
    );
};

export default Toggler;