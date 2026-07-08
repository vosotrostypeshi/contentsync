
const ValidationMessage = ({ messages }) => {
  if (messages.length === 0) return null;

  return (
    <div className="validation-messages">
      {messages.map((msg, index) => (
        <div key={index} className={`alert alert-${msg.type}`}>
          {msg.text}
        </div>
      ))}
    </div>
  );
};

export default ValidationMessage;
