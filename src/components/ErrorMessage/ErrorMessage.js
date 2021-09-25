const ErrorMessage = ({ children }) => {
  return (
    <div
      style={{
        width: "70%",
        padding: 10,
        marginTop: 4,
        marginBottom: 1,
        borderRadius: 4,
        backgroundColor: "red",
        textAlign: "center",
        color: "white",
        textTransform: "capitalize",
      }}
    >
      {children}
    </div>
  );
};

export default ErrorMessage;
