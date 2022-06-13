
export default function CheckBox({id,className,text}) {
  return (
    <>
    <input
        type="checkbox"
        className={className}
        id={id}
    />
    <label className="custom-control-label text-sm"  >
        &nbsp;{text}
    </label>
    </>
  )
}
