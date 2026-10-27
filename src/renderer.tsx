import { createRoot } from 'react-dom/client';

console.log('renderer ran');

function App() {

    (window as any).preloadApiThatIsInWindow.preloadApiKeyOne().then((result: any)=> {
        console.log('result: ', result);
    })


    return <h1>Hello from React + Electron!</h1>;
}

const root = createRoot(document.getElementById('app')!);

root.render(<App />);