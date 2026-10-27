import { createRoot } from 'react-dom/client';

console.log('renderer ran');

function App() {

    console.log('renderer window', window);

    // (window as any).preloadApiThatIsInWindow.preloadApiKeyOne().then((result: any)=> {
    //     console.log('result: ', result);
    // })

    // let foo = (window as any).preloadApiThatIsInWindow.anyValue; 
    // console.log("foo: ", foo);


    // (window as any).preloadApiThatIsInWindow.preloadApiKeyOne('rendererArg').then((final: any)=> {
    //     console.log('final', final);
    // })

    (window as any).preloadApiThatIsInWindow.getMemoryFromPreload().then((result: any)=> {
        console.log('result', result);
    })


    return <h1>Hello from React + Electron!</h1>;
}

const root = createRoot(document.getElementById('app')!);

root.render(<App />);