import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './CustomButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type CustomButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
    nameButton: string
}

export const CustomButton: React.FC<CustomButtonPropsType> = React.memo((
    {red, className,nameButton, ...props}
) => {
    const finalClassName =  props.disabled ? `${s.default} ${s.disabled}` : (red ? `${s.default} ${s.red}` : s.default)
    return (
        <button
            className={finalClassName}
            {...props} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        >{nameButton}</button>
    )
})
