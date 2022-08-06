import React, { useCallback } from 'react'
import App from '@/Layouts/App'
import { Head } from '@inertiajs/inertia-react'
import {useDropzone} from 'react-dropzone'

export default function Dropzone() {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  return (
    <div>
        <Head title="Dropzone" />
        <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
    </div>
  )
}

Dropzone.layout = page =><App children={page}></App>
