import React from 'react';
import {Card, CardActionArea, CardActions, CardContent, CardMedia} from "@material-ui/core";
import classes from './image-card.module.scss';
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import {Delete, Share} from "@material-ui/icons";
import {getFilePath} from "../utils/file-handlers";
// @ts-ignore
import {CopyToClipboard} from 'react-copy-to-clipboard';

function ImageCard({ image, onDelete }: { image: string, onDelete: Function }) {
    const url = getFilePath(image);

    return (
        <Card className={classes.imageView}>
            <CardActionArea>
                <CardMedia
                    classes={{ root: classes.image }}
                    component="img"
                    alt={image}
                    title={image}
                    height="200"
                    image={url} />
            </CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {image}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {url}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton onClick={() => onDelete(image)}>
                    <Delete />
                </IconButton>
                <CopyToClipboard text={url}>
                    <IconButton>
                        <Share />
                    </IconButton>
                </CopyToClipboard>
            </CardActions>
        </Card>
    );
}

export default ImageCard;
