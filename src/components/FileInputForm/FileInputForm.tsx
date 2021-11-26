// @ts-nocheck
import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import DataService from "../../api/DataService";

const FileInputForm = () => {
    const [files, setFiles] = useState([]);
    const sendFiles = async (e) => {
        e.preventDefault()
        await DataService.sendFiles(files);
    }
    return (
        <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Загрузите дата сет состоящий из 4х CSV файлов</Form.Label>
            <div className="d-flex align-items-center">
                <Form.Control type="file" multiple onChange={(e)=>{
                    setFiles(e.target.files)
                }}/>
                <Button variant="primary" style={{marginLeft: 10}} onClick={e => sendFiles(e)}>Отправить</Button>
            </div>
        </Form.Group>
    );
};

export default FileInputForm;