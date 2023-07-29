type Props = {
  index: number;
  text: string;
};

export const LineOfCode = ({ index, text }: Props) => {
  return (
    <div className="flex items-center">
      <h4 className="font-medium w-[3ch]">{index}</h4>
      <h4 className="text-sm font-medium">{text}</h4>
    </div>
  );
};
