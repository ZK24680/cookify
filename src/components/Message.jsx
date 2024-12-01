function Message({ message }) {
  return (
    <div>
      <p className="mx-auto mt-9 flex w-10/12 items-center justify-center bg-[var(--background-color)] p-4 text-center">
        {message}
      </p>
    </div>
  );
}

export default Message;
