import {
  AppBar,
  Typography,
  Toolbar,
  Box,
} from '@mui/material';

function Header() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', color: 'white' }}
          >
            CartNet
          </Typography>
          <Typography variant="subtitle2" component="div" sx={{ color: 'white', opacity: 0.8 }}>
            Deine geheime Einkaufsliste. Verzetteln war gestern.
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
