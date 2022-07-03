type BottomTabs = undefined | {
  title: string;
  Icon: (data: any) => JSX.Element;
  value: string;
  index: number;
  component: () => JSX.Element;
  color: string;
};

export type {BottomTabs};
