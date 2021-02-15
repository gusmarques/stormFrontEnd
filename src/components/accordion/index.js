import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DateRangeIcon from '@material-ui/icons/DateRange';
import HdrStrongIcon from '@material-ui/icons/HdrStrong';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    color: '#D83367',
    marginLeft: 5
  },
  icon: {
    color: '#666666',
  }

}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <DateRangeIcon className={classes.icon} />
            <Typography className={classes.heading}>TODAS AS DATAS DE INCLUSÃO</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <DateRangeIcon className={classes.icon} />
            <Typography className={classes.heading}>TODAS AS DATAS DE ALTERAÇÃO</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <HdrStrongIcon className={classes.icon} />
            <Typography className={classes.heading}>ATIVOS E INATIVOS</Typography>
          </div>

        </AccordionSummary>
      </Accordion>
    </div>
  );
}