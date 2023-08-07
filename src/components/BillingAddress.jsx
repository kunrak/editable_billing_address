import { useEffect, useState } from "react";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import {
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography
} from "@mui/material";

const BillingAddress = () => {
    const [open, setOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(localStorage.getItem("name") || "John Doe");
    const [address, setAddress] = useState(
        localStorage.getItem("address") || "123 Main St"
    );
    const [city, setCity] = useState(localStorage.getItem("city") || "Anytown");
    const [zipCode, setZipCode] = useState(
        localStorage.getItem("zipCode") || "12345"
    );
    const [country, setCountry] = useState(
        localStorage.getItem("country") || "United States"
    );

    useEffect(() => {
        localStorage.setItem("name", name);
        localStorage.setItem("address", address);
        localStorage.setItem("city", city);
        localStorage.setItem("zipCode", zipCode);
        localStorage.setItem("country", country);
    }, [name, address, city, zipCode, country]);


    return (
        <Container>
            <Box display="flex">
                <Box p={2}>
                    <Typography variant="h6">Billing Address</Typography>
                </Box>
                <CardContent>
                    <Collapse in={isEditing} timeout="auto" unmountOnExit>
                        <Box pt={1} width="900px">
                            <Box width="100%">
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
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <Button variant="contained" sx={{ borderRadius: '50px', marginRight: "1%" }} onClick={() => setIsEditing(false)}>Cancel</Button>
                                <Button variant="contained" sx={{ borderRadius: '50px' }} onClick={() => setOpen(true)}>Submit</Button>
                                <Dialog open={open} onClose={() => setOpen(false)}>
                                    <DialogTitle>Are you sure?</DialogTitle>
                                    <DialogContent>
                                        You will not be able to edit after submitting.
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={() => setOpen(false)}>Cancel</Button>
                                        <Button autoFocus onClick={() => setIsEditing(false)}>
                                            Submit
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </Box>
                        </Box>
                    </Collapse>
                    <Collapse in={!isEditing} timeout="auto" unmountOnExit>
                        <Box pt={1} width="900px">
                            <Box>
                                <Box mb={1}>{name}</Box>
                                <Box mb={1}>{address}</Box>
                                <Box mb={1}>
                                    {city}, {zipCode}, {country}
                                </Box>
                            </Box>
                        </Box>
                    </Collapse>
                </CardContent>
                <CardActions>
                    {!isEditing && (
                        <Button onClick={() => setIsEditing(true)}>Edit</Button>
                    )}
                </CardActions>
            </Box>
        </Container>
    );
};

export default BillingAddress;
