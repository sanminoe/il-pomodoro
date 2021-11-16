import { formatTime } from '../../helpers/formatTime';

export default function RangeInput(props) {
	return (
		<div className="w-full flex flex-col items-center my-4">
			<label>{props.title}</label>
			<div className="w-full flex justify-center mt-2">
				<input
					type="number"
					min="1"
					max="59"
					onChange={props.onChange}
					value={props.value}
					className=" w-4/12 border text-center"
				/>
				<p className="ml-2">{props.value > 1 ? 'Minutes' : 'Minute'}</p>
			</div>
		</div>
	);
}
