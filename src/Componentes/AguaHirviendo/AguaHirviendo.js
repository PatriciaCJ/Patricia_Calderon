import React from 'react';

class Temperatura extends React.Component {
    
    render() {        
        if (this.props.celsius)
        {
            if (this.props.celsius >= 100) {
                return <b>El agua hierve.</b>;
            }
            else
            {
                return <b>El agua no hierve.</b>;
            }                  
        }
        else
        {
            return <b>Indique un valor por favor.</b>;
        }
    }
  }
  
export default Temperatura;
