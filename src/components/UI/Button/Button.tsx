import style from './Button.module.scss';
import { Link } from 'react-router-dom';

type Props = {
    children: string;
    color: string;
    to: string;
}

export const Button: React.FC<Props> = ({children, color, to}: Props) => {
    let addColor = color === 'blue' ? style.button_blue : style.button_grey 

    return(
        <Link className={addColor} to={to} >
            {children}
        </Link>
    )
}