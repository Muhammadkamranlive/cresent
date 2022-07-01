import { useState } from 'react';
import { DocumentViewer } from 'react-documents';
function PDFTest() {
    
  
    return <>
       <DocumentViewer
        url="https://firebasestorage.googleapis.com/v0/b/images-107c9.appspot.com/o/1-0.jpg?alt=media&token=7311e600-572d-4754-8650-bcca5a5d108f"
        viewer="url"
        style={{ width: '100%', height: '700px' }}
        >
        </DocumentViewer>
    </>
}

export default PDFTest;