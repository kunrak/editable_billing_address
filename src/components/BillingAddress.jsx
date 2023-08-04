import { Edit, Save } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"

function BillingAddress() {
    const [isEditing, setIsEditing] = useState(false);
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
                <Box display="flex" justifyContent="space-between" width="80%">
                    <Box width="80%">
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
                            <TextField
                                label="Country"
                                fullWidth
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                            />
                        </Box>
                    </Box>
                    <Box>
                        <Button onClick={handleSaveClick}>
                            <Save />
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
            )}
        </Box>
    )
}

export default BillingAddress