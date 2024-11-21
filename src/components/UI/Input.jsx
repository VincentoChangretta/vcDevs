import './Input.css'

export const Input = ({ children, childrenToTop, type, className, placeholder, name }) => {

    let classes = []
    className ? classes.push(className) : null

    if (childrenToTop && children) {
        return (
            <div className={classes.join(' ') + ' ' + 'input-box' + ' ' + 'with-select'}>
                {children}
                <input name={name} type={type} placeholder={placeholder} required />
            </div>
        );
    }

    return (
        <div className={classes.join(' ') + ' ' + 'input-box'}>
            <input name={name} type={type} placeholder={placeholder} required/>
            {children}
        </div>
    );
}
