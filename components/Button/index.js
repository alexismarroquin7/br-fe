export const Button = props => {



  return <button {...props} className="Button">
    {props.children}
    
    <style jsx>{`
      .Button {
        border: ${props.border ? props.border : '1px solid #eee'};
        border-radius: ${props.borderRadius ? props.borderRadius : '50px'};
        width: ${props.width ? props.width : 'auto'};
        height: ${props.height ? props.height : 'auto'};
        padding: ${props.padding ? props.padding : '.5rem 1rem'};
        gap: ${props.gap ? props.gap : '0'};
        display: flex;
        flex-flow: ${props.ff ? props.ff : 'row wrap'};
        align-items: ${props.ai ? props.ai : 'flex-start'};
        justify-content: ${props.jc ? props.jc : 'flex-start'};
        color: ${props.color ? props.color : 'black'};
        background-color: ${props.bc ? props.bc : 'auto'};
      }
    `}</style>

  </button>

}