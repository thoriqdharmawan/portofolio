import React from 'react';

import { makeStyles  } from '@material-ui/core/styles';

// MUI
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

const useStyles =  makeStyles({
    avatar: {
      backgroundColor: '#2D3A54',
      border: 'none'
    },
    titleContent: {
        display: 'inline-block'
    },
    card: {
        border: 'none',
        boxShadow: 'none'
    },
    classTitleContent: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    bodyContent: {
        marginLeft: 42,
        paddingTop: 12
    },
    classSubtitleContent: {
        marginTop: '-6px',
        color: '#B3B2BE',
        fontSize: 13,
        fontWeight: '200'
    },
    myCardHeader: {
        padding: 2
    }
});

const ProfileContent = ({icon, titleContent, subTitleContent, bodyContent }) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardHeader 
                className={classes.myCardHeader}
                avatar={
                    <Avatar className={classes.avatar} color="primary" >
                        {icon}
                    </Avatar>
                }
                title={
                    <Typography className={classes.classTitleContent} color="primary">
                        {titleContent}
                    </Typography>
                }
                subheader={
                    <Typography className={classes.classSubtitleContent} >
                        {subTitleContent}
                    </Typography>
                }
            />
            <CardContent className={classes.bodyContent}>
                {bodyContent}
            </CardContent>
        </Card>
    )
}

export default ProfileContent;