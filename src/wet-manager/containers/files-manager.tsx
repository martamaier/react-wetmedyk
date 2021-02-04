import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import ImageCard from "../components/ImageCard";
import classes from './files-manager.module.scss';
import FileWidget from "../../shared/widgets/FileWidget";
import {useDispatch, useSelector} from "react-redux";
import {getFiles, getIsLoading} from "../../store/files-store/selectors";
import {AddFile, DeleteFile, LoadFiles} from "../../store/files-store/actions";
import {Button} from "@material-ui/core";

function FilesManager () {
    const dispatch = useDispatch();
    const images = useSelector(getFiles);
    const isLoading = useSelector(getIsLoading);
    const [formValue, setFormValue] = useState<string>('');

    const handleUploadImage = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const file = form.get('photo');
        dispatch(AddFile(file as any));
        event.currentTarget.reset();
        setFormValue('');
    }

    const handleDelete = (fileName: string) => {
        dispatch(DeleteFile(fileName));
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormValue(event.currentTarget.value);
    }

    useEffect(() => {
        if (!images.length && !isLoading) {
            dispatch(LoadFiles());
        }
    }, []);

    return (
        <>
            <p>Files Manager</p>
            <form className={classes.form} onSubmit={handleUploadImage}>
                <FileWidget value={formValue} name="photo" multiline={false} onChange={handleChange} />
                <Button type="submit"
                        disabled={!!images.find((image: string) => formValue.includes(image)) || !formValue.length}
                        variant="contained"
                        color="primary" >Upload Image</Button>
            </form>
            <div className={classes.imageContainer}>
                {
                    images.map((image: string) => (
                        <ImageCard
                            onDelete={handleDelete}
                            key={image}
                            image={image} />
                    ))
                }
            </div>
        </>
    );
}

export default FilesManager;
