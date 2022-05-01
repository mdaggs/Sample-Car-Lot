import React from 'react'
import { AppBar, CssBaseline, Toolbar, Typography, Link, Button } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';



export default function TopBar() {
  return (
    <React.Fragment>
    <CssBaseline />
        <AppBar
            position="static"
            color="default"
            elevation={2}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}`}}
        >
            <Toolbar sx={{ flexWrap: 'wrap' }}>
            <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                Sample-Car-Lot
            </Typography>
            <nav>
                <Link
                variant="button"
                color="text.primary"
                href="/"
                sx={{ my: 1, mx: 1.5 }}
                >
                    Full Inventory
                </Link>
                <Link
                variant="button"
                color="text.primary"
                href="/About"
                sx={{ my: 1, mx: 1.5 }}
                >

                    About
                </Link>
            </nav>
            <Link
            href="https://github.com/mdaggs/"
            >
            <Button
            variant="contained"
            color="primary"
            fullWidth
            startIcon={<GitHubIcon fontSize="small" />}
            >
                GitHub
            </Button>
            </Link>
            </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}
