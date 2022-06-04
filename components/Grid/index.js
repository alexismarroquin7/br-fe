export const Grid = props => {
  return <div {...props} className="Grid">
    {props.children}
    
    <style jsx>{`
      .Grid {
        border: ${props.border ? props.border : ''};
        width: ${props.width ? props.width : 'auto'};
        height: ${props.height ? props.height : 'auto'};
        padding: ${props.padding ? props.padding : '0'};
        margin: ${props.margin ? props.margin : '0'};
        gap: ${props.gap ? props.gap : '0'};
        display: flex;
        flex-flow: ${props.ff ? props.ff : 'row wrap'};
        align-items: ${props.ai ? props.ai : 'flex-start'};
        justify-content: ${props.jc ? props.jc : 'flex-start'};
        color: ${props.color ? props.color : 'black'};
        background-color: ${props.bc ? props.bc : 'auto'};
        overflow: ${props.overflow ? props.overflow : 'visible'};
        overflow-x: ${props.ox ? props.ox : 'visible'};
        overflow-y: ${props.oy ? props.oy : 'visible'};
        z-index: ${props.zi ? props.zi : '0'};
        position: ${props.position ? props.position : '0'};
      }
    `}</style>

  </div>

}