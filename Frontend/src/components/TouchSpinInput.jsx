import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Button, FormControl } from 'react-bootstrap';
import { TbMinus, TbPlus } from 'react-icons/tb';
const TouchSpinInput = ({
  min = 0,
  max = 100,
  value,
  setValue,
  className,
  inputClassName,
  buttonClassName,
  variant = 'light',
  size,
  ...props
}) => {
  const [localValue, setLocalValue] = useState(value ?? 0);
  const increment = () => {
    if (!props.readOnly) {
      setLocalValue(prev => {
        if (prev >= max) return prev;
        return prev + 1;
      });
    }
  };
  const decrement = () => {
    if (!props.readOnly) {
      setLocalValue(prev => {
        if (prev <= min) return prev;
        return prev - 1;
      });
    }
  };
  const handleChange = e => {
    const val = e.target.value;
    if (val === '') {
      setLocalValue(0);
      return;
    }
    const newValue = parseInt(val);
    if (newValue < min) {
      setLocalValue(min);
      return;
    }
    if (newValue > max) {
      setLocalValue(max);
      return;
    }
    setLocalValue(newValue);
  };
  useEffect(() => {
    if (setValue) {
      setValue(localValue);
    }
  }, [localValue]);
  return <div className={clsx('input-group touchspin', className, size === 'sm' && 'input-group-sm', size === 'lg' && 'input-group-lg')}>
            <Button variant={variant} className={clsx('floating', buttonClassName)} disabled={props.disabled} onClick={decrement}>
                <TbMinus />
            </Button>
            <FormControl type="number" size={size} min={min} max={max} value={localValue} onChange={handleChange} className={clsx('border-0', inputClassName)} {...props} />
            <Button variant={variant} className={clsx('floating', buttonClassName)} disabled={props.disabled} onClick={increment}>
                <TbPlus />
            </Button>
        </div>;
};
export default TouchSpinInput;