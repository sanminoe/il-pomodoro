import { formatTime } from '../../helpers/formatTime';
import ButtonPlusMinus from '../ButtonPlusMinus/ButtonPlusMinus';

export default function RangeInput(props) {
	return (
		<div className="w-full flex flex-col items-center my-4">
			<label>{props.title}</label>
			<div className="w-full flex justify-center mt-2">
				<div>
					<ButtonPlusMinus onClick={props.onMinusClick} buttonType="-" />
				</div>
				<input
					type="number"
					min="1"
					max="59"
					onChange={props.onChange}
					value={props.value}
					className=" w-7/12 border py-2 text-center"
				/>
				<div>
					<ButtonPlusMinus onClick={props.onPlusClick} buttonType="+" />
				</div>
			</div>
		</div>
	);
}
