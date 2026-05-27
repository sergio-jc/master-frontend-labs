interface Props {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}

const DetailItemComponent: React.FC<Props> = (props) => {
  const { icon, label, children } = props;

  return (
    <div className="flex items-start gap-3 text-sm">
      <span className="mt-0.5 shrink-0 text-zinc-500">{icon}</span>
      <div className="flex min-w-0 flex-col gap-0.5">
        <span className="text-xs text-zinc-500">{label}</span>
        <span className="text-zinc-200">{children}</span>
      </div>
    </div>
  );
};

export default DetailItemComponent;
