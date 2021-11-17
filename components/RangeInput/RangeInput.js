import ButtonPlusMinus from '../ButtonPlusMinus/ButtonPlusMinus';
import style from './style.module.css';
export default function RangeInput(props) {
	return (
		<div className="w-full flex flex-col items-center my-4">
			<label>{props.title}</label>
			<div className="w-full flex justify-center mt-2">
				<div>
					<ButtonPlusMinus onClick={props.onMinusClick} buttonType="-" theme={props.theme} />
				</div>
				<input
					type="number"
					min="1"
					max="59"
					onChange={props.onChange}
					value={props.value}
					className={[
						style.field,
						`w-7/12 py-2 text-center ${props.theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} outline-none`
					].join(' ')}
					onBlur={props.onBlur}
				/>
				<div>
					<ButtonPlusMinus onClick={props.onPlusClick} buttonType="+" theme={props.theme} />
				</div>
			</div>
		</div>
	);
}
