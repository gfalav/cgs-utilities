import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import { useFormik } from "formik"
import * as Yup from 'yup'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import app from '../fb/fb'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import {useNavigate, Link} from 'react-router-dom'


const SignUp = () => {

    const navigate = useNavigate()

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Enter a valid email').required('Is required'),
        password: Yup.string().min(8,'Too short').required('Is required'),
        repassword: Yup.string().required('Is required').oneOf([Yup.ref('password'), null], 'Passwords must match')
    })

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            repassword: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const fb = app
            const auth = getAuth(fb)
            createUserWithEmailAndPassword(auth, values.email, values.password)
                .then((userCredential) => {
                // Signed in 
                navigate('/')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                window.alert(errorCode, errorMessage)

            // ..
            })
        }
    })

    return(
        <Box id="SignUp" sx={{ pt: 8}}>
            <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2}>
                <Grid item>
                    <LockOpenIcon color="secondary" />
                </Grid>
                <Grid item>
                    <Typography variant="h4">SignUp</Typography>
                </Grid>
                <Grid item>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            id="email"
                            name="email"
                            label="Enter email"
                            type="email"
                            fullWidth
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            sx={{ m: 1}}
                            /> 
                        <TextField
                            id="password"
                            name="password"
                            label="password"
                            type="password"
                            fullWidth
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                            sx={{ m: 1}}
                            />
                        <TextField
                            id="repassword"
                            name="repassword"
                            label="Confirm password"
                            type="password"
                            fullWidth
                            value={formik.values.repassword}
                            onChange={formik.handleChange}
                            error={formik.touched.repassword && Boolean(formik.errors.repassword)}
                            helperText={formik.touched.repassword && formik.errors.repassword}
                            sx={{ m: 1}}
                            />
                        <Button type="submit" variant="contained" sx={{ m: 2}}>Submit</Button>
                    </form>
                </Grid>
                <Grid item sm={12}>
                    <div>
                        <Button component={Link} to="/auth/SignIn">Have an account? SignIn</Button>
                    </div>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SignUp