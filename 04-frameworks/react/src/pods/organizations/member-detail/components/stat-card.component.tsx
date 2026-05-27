interface Props {
  label: string;
  value: number;
  icon: React.ReactNode;
}

const StatCardComponent: React.FC<Props> = (props) => {
  const { label, value, icon } = props;

  return (
    <div className="flex flex-col gap-2 rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
      <div className="flex items-center gap-2 text-sm text-zinc-400">
        {icon}
        <span>{label}</span>
      </div>
      <p className="text-2xl font-semibold tabular-nums">{value.toLocaleString()}</p>
    </div>
  );
};

export default StatCardComponent;
