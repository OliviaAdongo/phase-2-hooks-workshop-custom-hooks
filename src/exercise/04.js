import { useEffect, useState } from "react";


function setLocalStorageValue(key, value) {
  const valueToStore = JSON.stringify(value);
  localStorage.setItem(key, valueToStore);
}

export function useLocalStorage(key, initialValue = null) {
  const storedValue = getLocalStorageValue(key);
  const [state, setState] = useState(storedValue || initialValue);

  useEffect(() => {
    setLocalStorageValue(key, state);
  }, [key, state]);

  useEffect(() => {
    function handleChange() {
      const newValue = getLocalStorageValue(key);
      setState(newValue);
    }

    window.addEventListener("storage", handleChange);

    return function cleanup() {
      window.removeEventListener("storage", handleChange);
    };
  }, [key]);

  return [state, setState];
}




//Tasks
/* 
  the two parameters for this function are: 
  - key: the key on localStorage where we are saving this data
  - initialValue: the initial value of state
*/
  /* 
    ✅ in this hook, use the useState hook. For the initial value for state:
    use the value saved in localStorage OR the initialValue from the function parameters 
  */
 
  /* 
   ✅ write a useEffect hook 
   in the useEffect, when state is updated, save the state to localStorage
   don't forget the dependencies array!
  */
 

  /* 
   ✅ return the same interface as useState:
   an array with state and a setState function
  */
  // 👀 return [state, setState]

function Form() {
  // ✅ after implementing the useLocalStorage hook, replace useState with useLocalStorage
  // don't forget to pass in both arguments (a key and an initialValue)
  const [name, setName] = useLocalStorage("_solution_3_username", "");

  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <label htmlFor="name">Name:</label>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <h4>{name ? `Welcome, ${name}!` : "Enter your name"}</h4>
    </form>
  );
}

function FormWithObject() {
  // 🤓 save me for the bonus! when you're ready, update this useState to use your useLocalStorage hook instead
  const [formData, setFormData] = useLocalStorage("_solution_3_blog_post", {
    title: "",
    content: "",
  });
  
  function handleChange(e) {
    setFormData(formData => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <label htmlFor="name">Title:</label>
      <input name="title" value={formData.title} onChange={handleChange} />
      <label htmlFor="name">Content:</label>
      <textarea
        name="content"
        value={formData.content}
        onChange={handleChange}
      />
    </form>
  );
}

export default function App() {
  return (
    <div>
      <h2>useLocalStorage can save string</h2>
      <Form />
      <hr />
      <h2>useLocalStorage can save objects (Bonus)</h2>
      <FormWithObject />
    </div>
  );
}
