"use client";

import dynamic from "next/dynamic";
import ReactQuill from 'react-quill'
import { useState } from "react";
import 'react-quill/dist/quill.snow.css';
function RichTextReminders() {

    const [value, setValue] = useState('');

    return (
        <>
            <ReactQuill theme="snow" value={value} onChange={setValue} />
        </>
    )
}

export default RichTextReminders;