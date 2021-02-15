import React from 'react'
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import ComputerIcon from '@material-ui/icons/Computer';
import HistoryIcon from '@material-ui/icons/History';
import './style.css';


export default function Footer() {
  return (
    <div className="footer">
      <div className="divFooter">
        <RadioButtonCheckedIcon style={{ color: '#ff8700', marginRight: 8 }} />
        <p className="textFooter">NO AR</p>
      </div>

      <div className="divFooter">
        <ComputerIcon style={{ color: '#666666', marginRight: 8 }} />
        <p style={{ color: "#E9E9E9" }}>ENCONTRO - 10:00</p>
      </div>

      <div className="divFooter">
        <HistoryIcon style={{ color: '#666666', marginRight: 8 }} />
        <p style={{ color: "#E9E9E9" }}>ultima atualização em 10:28</p>
      </div>


      <div className="divFooter" >
        <p style={{ color: "#E9E9E9", marginRight: 8 }} >Quinta,<b>30</b> de <b>Maio</b> de <b>2019</b></p>
        <p className="textFooter"> // 10:30:42</p>
      </div>

    </div>
  )
}

