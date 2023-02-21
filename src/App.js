// MyInput Component
function MyInput({ shouldFocus, value, onChange }) {
  const myInputRef = React.useRef(null);

  React.useEffect(() => {
    shouldFocus && myInputRef.current.focus();
  }, [shouldFocus]);

  return (
    <input
      ref={myInputRef}
      value={value}
      onChange={onChange}
      className="px-2 border border-slate-400 rounded"
    />
  );
}

// Form Component
function Form() {
  const [firstName, setFirstName] = React.useState("Rick");
  const [lastName, setLastName] = React.useState("Grimes");
  let shouldFocus = false;

  function onFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function onLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <form className="mt-5">
      <label className="block my-2 font-medium">
        Enter your first name:{" "}
        <MyInput
          value={firstName}
          onChange={onFirstNameChange}
          shouldFocus="true"
        />
      </label>

      <label className="block my-2">
        Enter your last name:{" "}
        <MyInput
          value={lastName}
          onChange={onLastNameChange}
          shouldFocus={shouldFocus}
        />
      </label>

      <p>
        Hello,{" "}
        <span className="text-emerald-700 font-mono font-bold">
          {firstName} {lastName}
        </span>
      </p>
    </form>
  );
}

function App() {
  const [show, setShow] = React.useState(false);

  return (
    <div className="p-3 font-mono w-fit">
      <button
        onClick={() => setShow(!show)}
        className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
      >
        {show ? "Hide" : "Show"} form
      </button>
      <hr />
      {show && <Form />}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(<App />);
