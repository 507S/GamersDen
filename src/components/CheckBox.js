import classes from "../designs/CheckBoxControl.module.css"
export default function CheckBox({id,text}) {
  return (
    <>
    <input
        type="checkbox"
        className={classes["custom-control-label"]}
        id={id}
    />
    <label className={`${classes["custom-control-label"]} text-sm`}  >
        &nbsp;{text}
    </label>
    </>
  )
}
