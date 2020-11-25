import tw, { GlobalStyles } from 'twin.macro';
import { Button, Logo } from './components';

interface AppProps {}

// function App({}: AppProps) {
//   // Create the count state.
//   const [count, setCount] = useState(0);
//   // Create the counter (+1 every second).
//   useEffect(() => {
//     const timer = setTimeout(() => setCount(count + 1), 1000);
//     return () => clearTimeout(timer);
//   }, [count, setCount]);
//   // Return the App component.
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <p>
//           Page has been open for <code>{count}</code> seconds.
//         </p>
//         <p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </p>
//       </header>
//     </div>
//   );
// }

const App = ({}: AppProps) => (
  <div>
    <GlobalStyles />
    {/* <GlobalStyles />
    <div
      css={[
        tw`flex flex-col items-center justify-center h-screen`,
        tw`bg-gradient-to-b`,
      ]}
    >
      <div tw="flex flex-col justify-center h-full space-y-5">
        <Button isPrimary>Submit</Button>
        <Button isSecondary>Cancel</Button>
        <Button isSmall>Close</Button>
      </div>
      <Logo />
    </div> */}
  </div>
);

export default App;
