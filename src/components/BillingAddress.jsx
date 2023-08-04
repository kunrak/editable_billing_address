import { Edit } from "@mui/icons-material";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"

function BillingAddress() {
    const [isEditing, setIsEditing] = useState(false);
    const [open, setOpen] = useState(false);
    // const [name, setName] = useState("John Doe");
    // const [address, setAddress] = useState("123 Main St");
    // const [city, setCity] = useState("Anytown");
    // const [zipCode, setZipCode] = useState("12345");
    // const [country, setCountry] = useState("United States");
    const [name, setName] = useState(
        localStorage.getItem('name') || 'John Doe'
    );
    const [address, setAddress] = useState(
        localStorage.getItem('address') || '123 Main St'
    );
    const [city, setCity] = useState(
        localStorage.getItem('city') || 'Anytown'
    );
    const [zipCode, setZipCode] = useState(
        localStorage.getItem('zipCode') || '12345'
    );
    const [country, setCountry] = useState(
        localStorage.getItem('country') || 'United States'
    );

    useEffect(() => {
        localStorage.setItem('name', name);
        localStorage.setItem('address', address);
        localStorage.setItem('city', city);
        localStorage.setItem('zipCode', zipCode);
        localStorage.setItem('country', country);
    }, [name, address, city, zipCode, country]);

    const handleEditClick = () => {
        setIsEditing(true);
    }
    const handleSaveClick = () => {
        setIsEditing(false);
    }

    return (
        <Box p={4} display="flex">
            <Box pr={10}>
                <Typography variant="h6">Billing Address</Typography>
            </Box>
            {isEditing ? (
                <Box width="80%">
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
                        <Stack direction="row" spacing={3}>
                            <TextField
                                label="City"
                                fullWidth
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                            <TextField
                                label="Zip Code"
                                fullWidth
                                value={zipCode}
                                onChange={(e) => setZipCode(e.target.value)}
                            />
                            <TextField
                                label="Country"
                                fullWidth
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                            />
                        </Stack>
                    </Box>
                    <Box display="flex" justifyContent="flex-end" mt={4}>
                        <Button onClick={() => setOpen(true)} sx={{ mr: 2 }}>
                            Cancel
                        </Button>
                        <Dialog
                            open={open}
                            onClose={() => setOpen(false)}
                        >
                            <DialogTitle>Are you sure?</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    There are unsaved changes. Are you sure you want to leave?
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={() => setOpen(false)}>Cancel</Button>
                                <Button autoFocus onClick={() => setOpen(false)}>Submit</Button>
                            </DialogActions>
                        </Dialog>
                        <Button onClick={handleSaveClick} variant="contained">
                            Save
                        </Button>
                    </Box>
                </Box>
            ) : (
                <Box display="flex" justifyContent="space-between" width="80%">
                    <Box>
                        <Box mb={1}>{name}</Box>
                        <Box mb={1}>{address}</Box>
                        <Box mb={1}>{city}, {zipCode}, {country}</Box>
                    </Box>
                    <Box>
                        <Button>
                            <Edit onClick={handleEditClick} />
                        </Button>
                    </Box>
                </Box>
            )
            }
        </Box >
    )
}

export default BillingAddress