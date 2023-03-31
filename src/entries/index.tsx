import * as ReactDOMClient from 'react-dom/client';
import '@/styles';
import App from '@/components/App';

const divDom = document.createElement('div');
divDom.setAttribute('id', 'app');
const container = document.body.appendChild(divDom);

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(<App />);
