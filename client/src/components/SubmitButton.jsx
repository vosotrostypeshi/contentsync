
const SubmitButton = ({ onClick, loading }) => {
  return (
    <button
      className="btn btn-primary"
      onClick={onClick}
      disabled={loading}
    >
      {loading ? 'Publishing...' : 'Process & Publish'}
    </button>
  );
};

export default SubmitButton;
