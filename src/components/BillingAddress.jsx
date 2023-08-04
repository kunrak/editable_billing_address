import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";

const BillingAddress = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState("John Doe");
    const [address, setAddress] = useState("123 Main St");
    const [city, setCity] = useState("Anytown");
    const [zipCode, setZipCode] = useState("12345");
    const [country, setCountry] = useState("United States");

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
    };

    return (
        <Card>
            <CardContent>
                <Collapse in={isEditing} timeout="auto" unmountOnExit>
                    <Box mb={2}>
                        <TextField
                            label="Name"
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            label="Address"
                            fullWidth
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            label="City"
                            fullWidth
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            label="Zip Code"
                            fullWidth
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                        />
                    </Box>
                    <Box mb={2}>
                        <Autocomplete
                            options={["United States", "Canada", "Mexico"]}
                            value={country}
                            onChange={(e, newValue) => setCountry(newValue)}
                            renderInput={(params) => (
                                <TextField {...params} label="Country" fullWidth />
                            )}
                        />
                    </Box>
                </Collapse>
                <Collapse in={!isEditing} timeout="auto" unmountOnExit>
                    <Box mb={1}>
                        <strong>Name:</strong> {name}
                    </Box>
                    <Box mb={1}>
                        <strong>Address:</strong> {address}
                    </Box>
                    <Box mb={1}>
                        <strong>City:</strong> {city}
                    </Box>
                    <Box mb={1}>
                        <strong>Zip Code:</strong> {zipCode}
                    </Box>
                    <Box mb={1}>
                        <strong>Country:</strong> {country}
                    </Box>
                </Collapse>
            </CardContent>
            <CardActions>
                {isEditing ? (
                    <Button onClick={handleSaveClick}>Save</Button>
                ) : (
                    <Button onClick={handleEditClick}>Edit</Button>
                )}
            </CardActions>
        </Card>
    );
};

export default BillingAddress;
