import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './CustomCheckBox.module.css'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type CustomCheckBoxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
}

export const CustomCheckBox: React.FC<CustomCheckBoxPropsType> = React.memo((
    {   type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeChecked,
        className, spanClassName,
        children,
        ...props}
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeChecked && onChangeChecked(e.currentTarget.checked)
    }

    return (
            <label className={s.checkboxLabel}>
                <input
                    type={'checkbox'}
                    onChange={onChangeCallback}
                    className={s.checkbox}

                    {...props} // отдаём инпуту остальные пропсы если они есть (checked например там внутри)
                />
                {children && <span className={s.spanClassName}>{children}</span>}
            </label>
        //</div>
    )
}
)