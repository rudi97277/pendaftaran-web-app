import { ThemeProvider } from "@emotion/react"
import dataArray from "../data/FormList"
import { Box, Container, CssBaseline, TextField, Typography, createTheme } from "@mui/material"

const RegisterForm = (props) => {
    const data = props.formData
    const customTextField = dataArray.map(function(item){
        return (
                <TextField
                    key={item.id}
                    margin="normal"
                    required
                    fullWidth
                    onChange={(e)=> {props.handleOnChange(e)}}
                    id={item.id}
                    value={data[item.name] || ''}
                    type={item.type}
                    label={item.label}
                    name={item.name}
                    autoComplete={item.autoComplete}
                    autoFocus
                />
        )
    })
    const theme = createTheme()
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx= {{
                        marginTop: 8,
                        display : 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Register
                    </Typography>
                    <Box component="form" sx={{mt : 1}}>
                        {customTextField}
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default RegisterForm