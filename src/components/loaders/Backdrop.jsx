export const Backdrop = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        width: "100vw",
        minHeight: "1150px",
        zIndex: "99999999",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <div
        className="text-center"
        style={{
          position: "relative",
          width: "100vw",
          minHeight: "1150px",
        }}
      >
        <div
          className="spinner-border"
          role="status"
          style={{
            display: "block",
            position: "fixed",
            top: "50%",
            right: "50%",
            color: "#8fb4ff",
            width: "3rem",
            height: "3rem",
          }}
        ></div>
      </div>
    </div>
  );
};
