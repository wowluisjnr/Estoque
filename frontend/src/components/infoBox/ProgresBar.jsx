import React from 'react'

export default props =>
<React.Fragment>
    <div className="progress">
        <div className="progress-bar" style={{width: props.percent}}></div>
    </div>
    <span className="progress-description">
          {props.description}
    </span>
</React.Fragment>