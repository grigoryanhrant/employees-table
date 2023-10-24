import Toggle from 'react-toggle';
import "./Toggler.scss";

type Props = {
    label: string;
    onChange: (() => void) | undefined;
    id: string;
    checked: boolean;
}

const Toggler = ({label, onChange, id, checked}: Props) => {
    return (
        <>
            <Toggle
                icons={false}
                id={id}
                checked={checked}
                onChange={onChange}/>
            <label className={"customCheckboxLabel"} htmlFor={id}>{label}</label>
        </>
    );
};

export default Toggler;