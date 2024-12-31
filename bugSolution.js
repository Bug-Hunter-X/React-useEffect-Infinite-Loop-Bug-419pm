```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 5) {
      console.log('Count is greater than 5');
    }
  }, []); // Empty dependency array prevents re-rendering of the effect each time the state changes

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```