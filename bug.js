```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic here! 
    if (count > 5) {
      console.log('Count is greater than 5');
      setCount(0); // Resetting count here causes an infinite loop
    }
  }, [count]); // The dependency array should be empty if you don't want this to run every time count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```