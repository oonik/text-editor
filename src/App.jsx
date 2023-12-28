import { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';

function App() {
  const editor = useRef(null);
	const [content, setContent] = useState('');

  return (
    <>
      <h1>Text editor</h1>
      <JoditEditor
			ref={editor}
			value={content}
			onChange={newContent => {setContent(newContent)}}
		/>
    </>
  )
}

export default App
