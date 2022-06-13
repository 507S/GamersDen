
export default function TextInput({
  labelIcon,
    type,
  name,
  placeholder,
  tabIndex
}) {
  return (
    <>
      <span>
        <i className={labelIcon}></i>
      </span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        tabindex={tabIndex}
        required
      />
      </>
  );
}
