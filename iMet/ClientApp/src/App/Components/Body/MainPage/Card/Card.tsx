import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    Typography,
} from "@mui/material";
import React from "react";
import { Interaction } from "../../../../../types/models";

export const InteractionCard: React.FC<Interaction> = ({ ...props }) => {
    return (
        <>
            <Card style={{ marginTop: "1rem" }}>
                <CardActionArea>
                    <CardContent>
                        <Typography
                            className="d-flex"
                            style={{ minWidth: "max-content", display: "flex" }}
                            gutterBottom
                            variant="h6"
                            component="div"
                        >
                            <Typography style={{ marginRight: "1rem" }} color="darkviolet">
                                {props.user.displayName}
                            </Typography>
                            <Typography style={{ marginRight: "1rem" }}> potkal</Typography>
                            <Typography color="darkviolet"> {props.target.displayName} </Typography>
                        </Typography>
                        <Typography
                            textAlign="right"
                            variant="body2"
                            color="text.secondary"
                        >
                            {props.created}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Add Reaction
                    </Button>
                </CardActions>
            </Card>
        </>
    );
};
