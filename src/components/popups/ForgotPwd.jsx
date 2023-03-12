export const ForgotPwd = (props) => {
  // Component Props:
  // icon: string
  // header: string

  const icon = props.icon;
  const header = props.header;
  return (
    <div>
      {icon}
      <h1>{header}</h1>
    </div>
  );
};
