import React, {ChangeEvent, FormEvent, useState} from 'react';
import ImageCard from "../components/image-card.component";
import classes from './files-manager.module.scss';
import FileWidget from "../../shared/widgets/file-widget.component";
import {useDispatch} from "react-redux";
import {getFiles, getIsLoading} from "../../store/files-store/selectors";
import {AddFile, DeleteFile, LoadFiles} from "../../store/files-store/actions";
import {Button} from "@material-ui/core";
import withDataFetch from "../shared/hoc/with-data-fetch.component";
import {DataFetchProps} from "../models/data-fetch-props.interface";
import {DataFetchInterface} from "../models/data-fetch.interface";

function FilesManager({ data }: DataFetchProps<any>) {
    const dispatch = useDispatch();
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

    return (
        <>
            <p>Files Manager</p>
            <form className={classes.form} onSubmit={handleUploadImage}>
                <FileWidget value={formValue} name="photo" multiline={false} onChange={handleChange} />
                <Button type="submit"
                        disabled={!!data?.find((image: string) => formValue.includes(image)) || !formValue.length}
                        variant="contained"
                        color="primary" >Upload Image</Button>
            </form>
            <div className={classes.imageContainer}>
                {
                    (data || []).map((image: string) => (
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

const options: DataFetchInterface<any> = {
    dataLoader: LoadFiles,
    dataSelector: getFiles,
    loadingSelector: getIsLoading,
};

export default withDataFetch(FilesManager, options);
