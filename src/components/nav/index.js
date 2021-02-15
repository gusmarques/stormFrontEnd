import React from "react";
import './style.css';
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import SecurityIcon from '@material-ui/icons/Security';
import TuneIcon from '@material-ui/icons/Tune';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SettingsIcon from '@material-ui/icons/Settings';
import CloseIcon from '@material-ui/icons/Close';
import { BrowserRouter } from "react-router-dom";
import Marca from '../../assets/marca.png'
import Accordion from '../accordion'
import {
  Input,
  InputAdornment,
  Button,
  AppBar,
  Toolbar,
  makeStyles,
  useTheme,
  IconButton,
  List, Divider,
  Drawer,
  Hidden
} from '@material-ui/core';






const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1


  },
  appBar: {
    backgroundColor: '#f5f5f5',

  },
  [theme.breakpoints.up("sm")]: {
    drawerPaper: {
      width: 410,
      backgroundColor: '#F5F5F5'
    }
  },
  [theme.breakpoints.down("sm")]: {
    drawerPaper: {
      width: 270,
      backgroundColor: '#F5F5F5'
    }
  },


  ToogleButton: {
    marginRight: 10,
    backgroundColor: '#fff',
    width: 48,
    height: 38
  },
  userBtn: {
    backgroundColor: '#D83367',
    color: '#fff',
    height: 38,
    [theme.breakpoints.down("sm")]: {
      display: 'none'
    }
  },
  userBtn2: {
    backgroundColor: '#D83367',
    color: '#fff',
    height: 38,
    fontSize: 8,
    [theme.breakpoints.up("sm")]: {
      display: 'none'
    }
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "block",

    }
  },
  iconHeader: {
    fontSize: 24,
    color: '#666666',
    margin: '0px 10px 0px 10px',
    [theme.breakpoints.down("sm")]: {
      display: 'none'
    }
  },
  iconHeader2: {
    fontSize: 16,
    color: '#666666',
    margin: '0px 10px 0px 10px',
    [theme.breakpoints.up("sm")]: {
      display: 'none'
    }
  },
  logo: {
    marginTop: 17,
    marginRight: 40
  },
  buttonGroup: {
    flexGrow: 1

  },
  group: {
    display: 'flex',
    marginRight: 40,
    [theme.breakpoints.down("sm")]: {
      display: 'none'
    }
  },
  inputHeader: {
    [theme.breakpoints.down("sm")]: {
      display: 'none'
    }
  },

  subTitle: {
    fontStyle: 'italic',
    fontWeight: 'normal',
    fontSize: 16,
    color: '#666666'

  }



}));



function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const handleClose = () => {
    setMobileOpen(false);
  };




  const drawer = (
    <div style={{ background: '#F5F5F5', }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', background: '#fff', padding: 19 }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <TuneIcon className="icon" style={{ color: '#666666', marginRight: 10 }} />
          <h1 className="title">
            <b>Filtros</b>
          </h1>
        </div>
        <Button
          onClick={handleClose}
          variant="contained"
          color="default"
          style={{ background: '#fff' }}
        >
          <CloseIcon className="icon" style={{ color: '#666666' }} />
        </Button>
      </div>
      <Divider />
      <div style={{ padding: 20 }}>
        <p className={classes.subTitle}>
          <i>Utilize os filtros abaixo para refinar os resultados da tabela,
         clique no botão APLICAR para salvar as alterações.</i>
        </p>
      </div>
      <List style={{ padding: 20 }} >
        <Accordion />
        <Button variant="outlined" color="secondary" style={{ width: '100%', padding: 20, marginTop: 20 }}>
          APLICAR
         </Button>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
          <div>
            <Button className={classes.userBtn2}>
              <PersonIcon /> USUÁRIO ATIVO
          </Button>
          </div>
          <div>
            <HomeIcon className={classes.iconHeader2} />
            <SettingsIcon className={classes.iconHeader2} />
            <PowerSettingsNewIcon className={classes.iconHeader2} />
          </div>
        </div>

      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <div className={classes.logo}>
            <img src={Marca} className="marca" />
          </div>

          <div className={classes.group}>
            <div style={{ borderRadius: 4, alignItems: 'center', padding: 7, background: '#fff' }}>
              <SecurityIcon style={{ color: '#666666' }} />
            </div>
            <div style={{ borderRadius: 4, alignItems: 'center', padding: 7, background: 'linear-gradient(to right, #DC3C5B, #E7533F, #F5701C)' }}>
              <PersonIcon className="person" />
            </div>

          </div>
          <Input
            className={classes.inputHeader}
            placeholder="Digite...."
            variant="outlined"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
          />
          <div style={{ marginLeft: '30%', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Button className={classes.ToogleButton} onClick={handleDrawerToggle}>
              <TuneIcon style={{ color: '#666666' }} />
            </Button>

            <Button className={classes.userBtn}>
              <PersonIcon /> USUÁRIO ATIVO
          </Button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <HomeIcon className={classes.iconHeader} />
            <SettingsIcon className={classes.iconHeader} />
            <PowerSettingsNewIcon className={classes.iconHeader} />
          </div>
        </Toolbar>

      </AppBar>
      <BrowserRouter>
        <nav className={classes.drawer} aria-label="mailbox folders">
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "left" : "right"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>

        </nav>


        <div className={classes.toolbar} />

      </BrowserRouter>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  )
};

export default ResponsiveDrawer;
