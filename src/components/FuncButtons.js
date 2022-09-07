export default function Button({ textRecord, deleteEventHandler }) {
  const { id, text } = textRecord;
  return (
    <button className="btn" id={id} onClick={() => deleteEventHandler(id)}>
      {text}
    </button>
  );
}
