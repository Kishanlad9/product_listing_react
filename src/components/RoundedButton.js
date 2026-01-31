const RoundedButton = ({ value }) => {
  return (
    <button className="border border-gray-500 rounded-3xl px-3 py-1 bg-transparent active:scale-95">
      {value}
    </button>
  );
};

export default RoundedButton;
