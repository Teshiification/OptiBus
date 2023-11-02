export interface FormProps {
  title: string;
  value: any;
  setData: any;
}

const labelClassName = 'text-xs italic text-slate-500';
const inputClassName = 'w-80 bg-white/10 rounded p-1';
export const Form = (props: FormProps) => {
  const GenerateInput = () => {
    return typeof props.value === 'number'
      ? GenerateNumberInput(props.value, props.setData)
      : GenerateStringInput(props.value, props.setData);
  };

  return (
    <>
      <label className={labelClassName}>driver Nummer</label>
      <GenerateInput />
    </>
  );
};

function GenerateNumberInput(value: any, setData: any) {
  return (
    <input
      className={inputClassName}
      type="number"
      step="1"
      min={0}
      max={999}
      value={value}
      onChange={(e) => setData(Number(e.target.value))}
      required
    />
  );
}

function GenerateStringInput(value: any, setData: any) {
  return (
    <input
      className={inputClassName}
      type="text"
      value={value}
      onChange={(e) => setData(e.target.value)}
      required
    />
  );
}
