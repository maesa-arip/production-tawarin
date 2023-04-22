import React, { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import { usePage } from "@inertiajs/inertia-react";
registerPlugin(FilePondPluginImagePreview);

export default function EditMultipleFile({ files, onEdit }) {
    const { csrf_token } = usePage().props;
    const [fileItems, setFileItems] = useState(
        files.map((file) => ({ source: file.url }))
    );
    const handleEdit = () => {
        const editedFiles = fileItems.map((fileItem, index) => ({
            id: files[index].id,
            file: fileItem.file,
        }));
        onEdit(editedFiles);
    };
    return (
        <div>
            <FilePond
                files={fileItems}
                onupdatefiles={setFileItems}
                allowMultiple={true}
                server={{
                    // url: '/api/files/load',
                    load: {
                        method: "GET",
                        headers: {
                            "X-CSRF-TOKEN": csrf_token,
                        },
                        onload: (response) => {
                            const loadedFiles = JSON.parse(response);
                            setFileItems(
                                loadedFiles.map((file) => ({
                                    source: file.url,
                                }))
                            );
                        },
                    },
                }}
            />
            <button onClick={handleEdit}>Save</button>
        </div>
    );
}
