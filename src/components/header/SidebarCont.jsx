export const SidebarCont = (props) => {
  return (
    <div className="sidebarContainer">
      <div className="d-flex justify-content-center"></div>
      <div className="d-flex flex-column justify-content-center overflow-hidden">
        {props.children}
      </div>
    </div>
  );
};
