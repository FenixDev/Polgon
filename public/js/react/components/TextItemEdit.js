import reg from '../reg.js';
function TextItemEdit({ txt, onSave, onCancel }) {
    var val = txt ? txt.trim() : '';
    var [value, setValue] = React.useState(val);
    var [isDisabled, setIsDisabled] = React.useState(!val);

    var onSaveClk = () => {
        onSave(value);
    }

    var onCancelClk = () => {
        setValue("");
        setIsDisabled(true);
        onCancel();
    }

    var onChangeTxt = (e) => {
        var val = e.target.value;
        if (val == " ") {
            val = val.trim();
        }
        setValue(val);
        if (value) {
            if (value.length == 1 && !isDisabled) {
                setIsDisabled(true);
            }
            else if (isDisabled) {
                setIsDisabled(false);
            }
        }
    }

    return (
        <div className="cat-item-edit">
            <input type="text" className="txt" onChange={onChangeTxt} value={value} />
            <button onClick={onSaveClk} disabled={isDisabled}>
                {reg.save}
            </button>
            <button onClick={onCancelClk}>
                {reg.cancel}
            </button>
        </div>
    );
}

export default TextItemEdit;