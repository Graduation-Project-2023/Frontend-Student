export const SidebarCont = (props) => {
  return (
    <div className="sidebarContainer">
      <div></div>
      <div>{props.children}</div>
    </div>
  );
};
