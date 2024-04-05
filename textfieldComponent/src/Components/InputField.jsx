const InputField = ({
  type,
  inputTitle,
  holder,
  required,
  disable,
  getValue,
  inputStyle,
  errorMessage,
  error,
  maxLength,
  minLength,
  options,
  value,
  labelStyle,
  ...rest
}) => {
  const handleChange = (event) => {
    getValue(event.target.value);
  };
  const renderInput = () => {
    switch (type) {
      case "text":
        return (
          <input
            type='text'
            placeholder={holder}
            disabled={disable}
            required={required}
            maxLength={maxLength}
            value={value}
            onChange={handleChange}
            style={inputStyle}
            {...rest}
          />
        );
      case "number":
        return (
          <input
            type='number'
            placeholder={holder}
            disabled={disable}
            required={required}
            minLength={minLength}
            maxLength={maxLength}
            value={value}
            onChange={handleChange}
            style={inputStyle}
            {...rest}
          />
        );
      case "select":
        return (
          <select
            disabled={disable}
            value={value}
            onChange={handleChange}
            style={inputStyle}
          >
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case "password":
        return (
          <input
            type='password'
            placeholder={holder}
            disabled={disable}
            required={required}
            minLength={minLength}
            maxLength={maxLength}
            value={value}
            onChange={handleChange}
            style={inputStyle}
            {...rest}
          />
        );
      case "currency":
        const formattedValue = value
          .toFixed(2)
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1,`);

        return (
          <input
            type='text'
            placeholder={holder}
            disabled={disable}
            value={formattedValue}
            style={inputStyle}
            {...rest}
          />
        );
      default:
        return (
          <input
            type='text'
            placeholder={holder}
            disabled={disable}
            style={inputStyle}
            {...rest}
          />
        );
    }
  };
  return (
    <div>
      <label htmlFor={inputTitle} style={labelStyle}>
        {inputTitle}
      </label>
      {renderInput()}
      {error && <div style={{ color: "red" }}>{errorMessage}</div>}
    </div>
  );
};

export default InputField;
