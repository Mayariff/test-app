import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react'
import s from './CustomInput.module.css'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export type  CustomInputType = DefaultInputPropsType & { // пропсы обычного инпута + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string|null
    spanClassName?: string
}

export const CustomInputText: React.FC<CustomInputType> = React.memo((
    {   type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeText,
        onKeyPress, onEnter,
        error,
        className, spanClassName,
        ...props}) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {

        onChange // если есть пропс onChange
        && onChange(e) // то передать ему е (поскольку onChange не обязателен)
        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);
        onEnter // если есть пропс onEnter
        && e.key === 'Enter' // и если нажата кнопка Enter
        && onEnter() // то вызвать его
    }

    const finalInputClassName = error? `${s.errorInput} ${s.superInput}`: `${s.superInput}`

    return (
        <>
            <input
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                className={finalInputClassName}
                placeholder={error? 'Поле пустое':''}
                type={type}
                {...props} // value  внутри
            />

        </>
    )
}
)

